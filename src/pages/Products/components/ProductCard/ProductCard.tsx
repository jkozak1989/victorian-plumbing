import { FC } from 'react';
import { Product } from '../../types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';

import './ProductCard.css';

export const ProductCard: FC<{ product: Product }> = (props) => {
  const { product } = props;
  return (
    <section className='product-card'>
      <div className='product-card-img-container'>
        <img
          className='product-card-img'
          src={product.image.url}
          alt={product.productName}
        />
        {product.attributes.isBestSeller && <div className='product-card-best-seller'>Best seller</div>}
        {product.price.isOnPromotion && <div className='product-card-sale'>Sale</div>}
      </div>
      <div className='product-card-info'>
        {product.brand.brandImage ? (
          <img
            className='product-card-brand'
            src={product.brand.brandImage.url}
          />
        ) : (
          product.brand.name
        )}
        <div className='product-card-name-row'>
          <div className='product-card-name'>{product.productName}</div>
          <FavoriteBorderIcon className='product-card-favourite' />
        </div>
        <div className='product-card-price'>&#163;{product.price.priceIncTax}</div>
        <div className='product-card-stock'>
          <Checkbox
            disabled
            checked={product.stockStatus.status == 'G'}
            className={
              product.stockStatus.status == 'G' ? 'product-card-stock-checked' : 'product-card-stock-unchecked'
            }
          />
          {product.stockStatus.status == 'G' ? 'In Stock' : 'Not In Stock'}
        </div>
        <div className='product-card-rating'>
          <Rating
            defaultValue={product.averageRating}
            precision={0.1}
            readOnly
          />
          <div className='product-card-rating-count'>{product.reviewsCount}</div>
        </div>
      </div>
    </section>
  );
};
