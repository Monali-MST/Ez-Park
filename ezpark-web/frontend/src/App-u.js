import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePageM/HomePageM";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PointSystem from "./Pages/PointSystem/PointSystem";
import SignUpPage from "./Pages/SignUpPage/Form";
import UserDashboardPage from "./Pages/UserDashboardPage/UserDashboardPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import SlotSelect from "./Pages/SlotSelect/SlotSelect";
import BookingPage from "./Pages/BookingPage/BookingPage";
import MyBookingsPage from "./Pages/MyBookingsPage/MyBookingsPage";
import MyProfilePage from "./Pages/MyProfilePage/MyProfilePage";
import SupportPage from "./Pages/SupportPage/SupportPage";
import VehicleDetails from "./Pages/VehicleDetails/VehicleDetails";
import VerEmail from "./Pages/VerEmail/verEmail";
import VerMobile from "./Pages/VerMobile/verMobile";
import Sucess from "./Pages/Sucess/SucessPage";
import Review_Rating from "./Pages/Review_Rating/Feedback";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pointsystem" element={<PointSystem />} />
            <Route path="/userdashboard/:id" element={<UserDashboardPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/Slotselection" element={<SlotSelect />} />
            <Route path="/booking" element={<BookingPage />} />

            <Route path="/mybooking" element={<MyBookingsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/vehicledetails" element={<VehicleDetails />} />
            <Route path="/emailverify" element={<VerEmail />} />
            <Route path="/Mobileverify" element={<VerMobile />} />
            <Route path="/sucess" element={<Sucess />} />
            <Route path="/myaccount" element={<MyProfilePage />} />
            <Route path="/rating" element={<Review_Rating />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
