import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useProducts } from './Products.hooks';

import './Products.css';

export const Products = () => {
  const { productsResult } = useProducts();
  return (
    <section className='products-container'>
      <Sidebar facets={productsResult.facets} />
      <div>
        <div className='products-top-bar'>
          <div></div>
          <div>{productsResult.pagination.total} results</div>
        </div>
        <ProductGrid products={productsResult.products} />
      </div>
    </section>
  );
};
