import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPayButton from "./Components/CheckoutPayButton/CheckoutPayButton";
import SuccessPay from "./Components/CheckoutPayButton/SuccessPay";
import ClosePay from "./Components/CheckoutPayButton/ClosePay";
import HomePageM from "./Pages/HomePageM/HomePageM";
import PointSystem from "./Pages/PointSystem/PointSystem";
import PointsAddButtonTest from "./Components/PointsAddButtonTest/PointsAddButtonTest";
import RefundButton from "./Components/RefundClientSide/RefundButton";
import SuccessRefund from "./Components/RefundClientSide/SuccessRefund";
import AdminRefundRequestPage from "./Pages/AdminRefundRequestPage/AdminRefundRequestPage";
import ClientRefundRequestPage from "./Pages/ClientRefundRequestPage/ClientRefundRequestPage";
import DiscountSettings from "./Components/DiscountAdminSide/DiscountSettings";


import UserDashboard from "./Pages/UserDashboardPage/UserDashboardPage";
import BookingPage from "./Pages/BookingPage/BookingPage";
import SlotSelect from "./Pages/SlotSelect/SlotSelect";


import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePageM />} />
            <Route path="/pointsystem" element={<PointSystem />} />
            <Route path="/checkoutpay" element={<CheckoutPayButton />} />
            <Route path="/successpay" element={<SuccessPay />} />
            <Route path="/closepay" element={<ClosePay />} />
            <Route path="/pointsaddbutton" element={<PointsAddButtonTest />} />
            <Route path="/refund" element={<RefundButton />} />
            <Route path="/successrefund" element={<SuccessRefund />} />
            <Route path="/discountsettings" element={<DiscountSettings/>}></Route>
            <Route
              path="/adminrefundrequest"
              element={<AdminRefundRequestPage />}
            />
            <Route
              path="/clientrefundrequest"
              element={<ClientRefundRequestPage />}
            />




            <Route path="/userdashboard/:id" element={<UserDashboard />} />
            <Route path="/Slotselection" element={<SlotSelect />} />
            <Route path="/booking" element={<BookingPage />} />
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
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
