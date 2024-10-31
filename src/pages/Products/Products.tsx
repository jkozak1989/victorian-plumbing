import { useProducts } from './Products.hooks';

export const Products = () => {
  const { productsResult } = useProducts();
  return (
    <section className='products-container'>
      <section className='products-sidebar'></section>
      <section className='products-grid'></section>
    </section>
  );
};
