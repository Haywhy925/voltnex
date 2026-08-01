import { ProductParams } from "../../shared.types";
import ProductCard from "./ProductCard";

interface HomeProductsParams {
  products: ProductParams[];
}

function HomeProducts({ products }: HomeProductsParams) {
  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Popular Products</p>
      <div className="grid max-md:gap-1.5 gap-3 mt-6 pb-14 w-full lg:max-w-37.5 grid-cols-2 sm:grid-cols md:grid-cols lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-3">
        {products.map((product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
