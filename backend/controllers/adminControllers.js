// controllers/adminControllers.js
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const Admin = require("../models/adminModel.js");

const allAdmins = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const admin = await Admin.create({
    name,
    email,
    password,
    pic,
  });

  if (admin) {
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      pic: admin.pic,
      token: generateToken(admin._id),
      onlineStatus: admin.onlineStatus,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.comparePassword(password))) {
    admin.onlineStatus = true;
    await admin.save();

    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdministrator: admin.isAdministrator,
      pic: admin.pic,
      token: generateToken(admin._id),
      onlineStatus: true,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const logoutAdmin = asyncHandler(async (req, res) => {
  req.admin.onlineStatus = false;

  if (!req.admin) {
    res.status(401).json({ error: "User not authenticated" });
    return;
  }

  await req.admin.save();

  res.json("user is loggedout");
});

const unregisterUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  } else {
    await user.deleteOne();
    res
      .status(200)
      .json({ message: "User has been unregistered successfully" });
  }
});

const monitorClients = asyncHandler(async (req, res) => {
  try {
    // Fetch online users with only name and _id fields
    const totalUsers = await User.find();
    const onlineUsers = await User.find({ onlineStatus: true }); //.select("user.name user._id");

    res.json({
      totalUsers,
      onlineUsers,
    });
  } catch (error) {
    res.status(500).json({ message: "Error monitoring clients" });
  }
});

module.exports = {
  monitorClients,
  authAdmin,
  registerAdmin,
  logoutAdmin,
  allAdmins,
  unregisterUser,
};
