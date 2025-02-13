import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Store from "./pages/Product/Store";
import Layout from "./components/Layout/Layout";
import Mypage from "./pages/MyPage/Mypage";
import ReviewForm from "./pages/Review/ReviewForm";
import Cart from "../src/pages/Cart/Cart";
import SurveySecond from "./components/Layout/SurveySecond";
import SurveyThird from "./components/Layout/SurveyThird";
import Recommendation from "./pages/Recommendation/Recommendation";
import NaverLogin from "./pages/Login/NaverLogin";
import Logout from "./pages/Login/Logout";
import ReviewList from "./pages/Review/ReviewList";
import Header from "./components/Layout/Header";
import WishList from "./pages/MyPage/WishList/WishList";
import ReservList from "./pages/MyPage/ReservCheck/ReservList";
import { useState } from "react";
import Footer from "./components/Layout/Footer";
import RecomDetail from "./pages/Recommendation/RecomDetail";
import Ordercom from "./pages/Cart/Ordercom";
import EditMyInfo from "./pages/MyPage/EditMyInfo";
import KakaoRedirectHandeler from "./pages/Login/KakaoRedirectHandeler";
import StoreDetail from "./pages/Product/StoreDetail";
import StoreSurvey from "./pages/Product/StoreSurvey";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <Header auth={auth} setAuth={setAuth} />
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Mypage/:tab" element={<Mypage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ordercom" element={<Ordercom />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path="/Recommendation:site_seq" element={<RecomDetail />} />
          <Route path="/surveysecond" element={<SurveySecond />} />
          <Route path="/surveythird" element={<SurveyThird />} />
          <Route
            path="/Naver"
            element={<NaverLogin auth={auth} setAuth={setAuth} />}
          />
          <Route path="/wishlist:id" element={<WishList />} />
          <Route path="/reservlist:id" element={<ReservList />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/oauth/callback/kakao"
            element={<KakaoRedirectHandeler setAuth={setAuth} auth={auth} />}
          />
          <Route path="/ReviewForm:resnum" element={<ReviewForm />} />
          <Route path="/editmyinfo" element={<EditMyInfo />} />
          <Route path="/ReviewList/:id" element={<ReviewList />} />

          <Route path="/storedetail:pkg_seq" element={<StoreDetail />} />
          <Route path="/Store:surveyParams" element={<StoreSurvey />} />
        </Routes>
      </div>
      {window.location.pathname != "/recommendation" ? <Footer /> : <></>}
    </div>
  );
}

export default App;
