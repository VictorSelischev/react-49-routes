import { ProductList } from "../components/ProductList/ProductList";
import { getProducts } from "../services/fakeAPI";

const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
export default Products;
