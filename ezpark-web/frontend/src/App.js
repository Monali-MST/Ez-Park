import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageM from "./Pages/HomePageM/HomePageM";
import PointSystem from "./Pages/PointSystem/PointSystem";
import PointsAddButtonTest from "./Components/PointsAddButtonTest/PointsAddButtonTest";
import DiscountSettings from "./Components/DiscountAdminSide/DiscountSettings";
import UserBadge from "./Components/UserBadge/UserBadge";
import BookingPageb from "./Pages/BookingPageB/Checkoutpay";
import CancelBookingButton from "./Components/RefundClientSide/CancelBookingButton";
import Refund from "./Components/RefundClientSide/Refund";
// import CheckoutPayButton from "./Components/Payment/CheckoutPayButton";
import SuccessPay from "./Components/Payment/SuccessPay";
import ClosePay from "./Components/Payment/ClosePay";

import UserDashboard from "./Pages/UserDashboardPage/UserDashboardPage";
//import BookingPage from "./Pages/BookingPage/BookingPage";
import SlotSelect from "./Pages/SlotSelect/SlotSelect";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import AdminRefundRequestPage from "./Pages/AdminRefundRequestPage/AdminRefundRequestPage";
import ClientRefundRequestPage from "./Pages/ClientRefundRequestPage/ClientRefundRequestPage";
import PaymentScreen from "./Components/PaymentCustom/PaymentScreen";
import MyProfilePage from "./Pages/UserProfile/MyProfilePage";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePageM />} />
            <Route path="/pointsystem" element={<PointSystem />} />
            {/* <Route path="/checkoutpay" element={<CheckoutPayButton />} /> */}
            <Route path="/successpay" element={<SuccessPay />} />
            <Route path="/closepay" element={<ClosePay />} />
            <Route path="/pointsaddbutton" element={<PointsAddButtonTest />} />
            <Route path="/discountsettings" element={<DiscountSettings />} />
            <Route path="/showbadge" element={<UserBadge />} />
            <Route path="/bookingpageb" element={<BookingPageb />} />
            <Route path="/cancelbooking" element={<CancelBookingButton />} />
            <Route path="/refundpage" element={<Refund />} />
            <Route path="/custompayment" element={<PaymentScreen />} />
            <Route
              path="/adminrefundrequest"
              element={<AdminRefundRequestPage />}
            />
            <Route
              path="/clientrefundrequest"
              element={<ClientRefundRequestPage />}
            />

            <Route path="/homepage" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/userdashboard/:id" element={<UserDashboard />} />
            <Route path="/Slotselection" element={<SlotSelect />} />            
            <Route path="/myaccount/:id" element={<MyProfilePage />} />

            {/* 

            <Route path="/about" element={<AboutUsPage />} />
                  

            <Route path="/mybooking" element={<MyBookingsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/vehicledetails" element={<VehicleDetails />} />
            <Route path="/emailverify" element={<VerEmail />} />
            <Route path="/Mobileverify" element={<VerMobile />} />
            <Route path="/sucess" element={<Sucess/>}/>
            <Route path="/myaccount" element={<MyProfilePage/>}/>
            <Route path="/rating" element={<Review_Rating/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
