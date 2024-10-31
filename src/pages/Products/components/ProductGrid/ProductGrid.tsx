import { FC } from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';

import './ProductGrid.css';

export const ProductGrid: FC<{ products: Product[] }> = (props) => {
  const { products } = props;
  return (
    <section className='products-grid'>
      {products.map((product: Product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
};
