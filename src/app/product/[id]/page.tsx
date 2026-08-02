import React from "react";
import { fetchProductById } from "../../../../utils/actions/product.action";
import ProductDetails from "@/components/ProductDetails";

async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await fetchProductById(id);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}

export default Product;
