import HeaderSlider from "@/components/HeaderSlider";
import Navbar from "@/components/Navbar";
import { fetchProducts } from "../../utils/actions/product.action";
import HomeProducts from "@/components/HomeProducts";
import Footer from "@/components/Footer";

const allProducts = await fetchProducts();

console.log(allProducts);

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <HeaderSlider />
        <HomeProducts products={allProducts} />
        <Footer />
      </div>
    </div>
  );
}
