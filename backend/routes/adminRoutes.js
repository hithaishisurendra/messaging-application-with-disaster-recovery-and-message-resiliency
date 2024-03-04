// routes/adminRoutes.js
const express = require("express");
const { protect } = require("../middleware/adminMiddleware");
const {
  monitorClients,
  registerAdmin,
  authAdmin,
  logoutAdmin,
  allAdmins,
  unregisterUser,
} = require("../controllers/adminController");
const { registerUser } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").get(protect, allAdmins);
router.route("/").post(registerAdmin);
router.post("/login", authAdmin);
router.get("/logout", protect, logoutAdmin);
router.post("/register-user", registerUser);
router.delete("/unregister-user", unregisterUser);
router.get("/monitor-clients", monitorClients);

module.exports = router;
