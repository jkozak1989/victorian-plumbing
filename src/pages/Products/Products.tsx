import MenuItem from '@mui/material/MenuItem';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import Select from '@mui/material/Select/Select';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useProducts } from './Products.hooks';

import './Products.css';

export const Products = () => {
  const { productsResult, sortTypes, filter, handleChangeSort, handleChangeFacets, handleLoadMore } = useProducts();
  return (
    <section className='products-container'>
      <Sidebar
        facets={productsResult.facets}
        onChangeFacets={handleChangeFacets}
      />
      <div>
        <div className='products-top-bar'>
          <Select
            value={filter.sort}
            onChange={(e) => handleChangeSort(e.target.value as number)}
            size='small'
            className='products-top-bar-select'
          >
            {sortTypes.map((type) => (
              <MenuItem
                value={type.id}
                key={type.id}
              >
                {type.name}
              </MenuItem>
            ))}
          </Select>
          <div>{productsResult.pagination.total} results</div>
        </div>
        <ProductGrid products={productsResult.products} />
        {productsResult.products.length < productsResult.pagination.total && (
          <div
            className='products-load-more'
            onClick={handleLoadMore}
          >
            Load more
          </div>
        )}
      </div>
    </section>
  );
};
