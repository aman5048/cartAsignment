import { Route, Routes } from "react-router-dom";
import { PageNotFound, Home, Cart } from "./page";
export const AllRoutes = ({ products }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
