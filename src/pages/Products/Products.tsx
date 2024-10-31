import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { useProducts } from './Products.hooks';

export const Products = () => {
  const { productsResult } = useProducts();
  return (
    <section className='products-container'>
      <section className='products-sidebar'></section>
      <ProductGrid products={productsResult.products} />
    </section>
  );
};
