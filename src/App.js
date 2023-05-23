import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Transactionhistory from "./pages/Transactionhistory";
import Myprofile from "./pages/Myprofile";
import Eventdiscription from "./pages/Eventdiscription";
import PaymentPage from "./pages/PaymentPage";
import Addhackathon from "./pages/Addhackathon";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";

import Changepassword from "./pages/ChangePassword";
import Resetpassword from "./pages/ResetPassword";
import Members from "./pages/Members";
import { Toaster } from "react-hot-toast";
import Addagenda from "./pages/Addagenda";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Toaster />

      {localStorage.getItem("token") ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />

          <Route path="/home" element={<Home />} />
          <Route path="/agenda" element={<Events isAgenda={true} />} />
          <Route path="/agenda/:id" element={<Agenda isAgenda={true} />} />
          <Route path="/transactionhistory" element={<Transactionhistory />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/event/:id" element={<Eventdiscription />} />
          <Route path="/paymentpage/:eventType/:id" element={<PaymentPage />} />
          <Route path="/addhackathon" element={<Addhackathon />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/participents/:id" element={<Members />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
