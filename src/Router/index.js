import Home from "../layouts/Home/Home";
import Sanpham from "../layouts/Sanpham";
import { Routes, Route } from "react-router-dom";
import Login from "../layouts/Login/Login";
import Chitiet from "../layouts/Chitietsanpham/Chitietsanpham";
import Giohang from "../layouts/Giohang/Giohang";
import Sanphammoi from "../layouts/Sanphammoi";
import Bosuutap from "../layouts/Bosuutap";
import Nemonline from "../layouts/Nemonline";
import Nhapkhaunhatban from "../layouts/Nhapkhaunhatban";



function Router() {
  return (
        <Routes>
          <Route path="/nemshop" element={<Home />} />
          <Route path="/tatcasanpham" element={<Sanpham />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chitietsanpham" element={<Chitiet />} />
          <Route path="/giohang" element={<Giohang />} />
          <Route path="/sanphammoi" element={<Sanphammoi />} />
          <Route path="/bosuutap" element={<Bosuutap />} />
          <Route path="/nemonline" element={<Nemonline />} />
          <Route path="/sanphamnhapkhau" element={<Nhapkhaunhatban />} />
        </Routes>
   
  );
}

export default Router;