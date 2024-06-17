import { Link } from "react-router-dom";
import { ProductCard } from "../components/card";
import { useTitle } from "../hooks/useTitle";

const products = [
  {
    id: 1,
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: 149,
    image: "/assets/images/1001.png",
  },
  {
    id: 2,
    name: "boAt Rockerz 450",
    price: 49,
    image: "/assets/images/1002.png",
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    price: 179,
    image: "/assets/images/1003.png",
  },
  {
    id: 4,
    name: "Logitech H111 Wired",
    price: 39,
    image: "/assets/images/1004.png",
  },
  {
    id: 5,
    name: "APPLE Airpods Max Bluetooth Headset",
    price: 199,
    image: "/assets/images/1005.png",
  },
  {
    id: 6,
    name: "ZEBRONICS Zeb-Thunder Wired",
    price: 29,
    image: "/assets/images/1006.png",
  },
];

export const Home = () => {
  useTitle("Home");
  return (
    <>
      <main className=" xl:mx-32 lg:mx-24 md-mx-16 sm:mx-8 mt-6 ">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </main>
    </>
  );
};
