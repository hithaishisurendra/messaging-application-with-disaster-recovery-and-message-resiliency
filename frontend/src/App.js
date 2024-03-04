import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import AdminDashboard from "./Pages/AdminDashboard";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <p>Hello Jest!</p>
        <Route exact path = "/" component = {HomePage} />
        <Route path = "/chats" component = {ChatPage} />
        <Route path = "/admin" component = {AdminDashboard} />
    </div>
  );
}

export default App;
