import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import Select from '@mui/material/Select/Select';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useProducts } from './Products.hooks';

import './Products.css';

export const Products = () => {
  const { productsResult, sortTypes, filter, handleChangeFilter } = useProducts();
  return (
    <section className='products-container'>
      <Sidebar facets={productsResult.facets} />
      <div>
        <div className='products-top-bar'>
          <Select
            value={filter.sort}
            onChange={(e) => handleChangeFilter('sort', e.target.value)}
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
      </div>
    </section>
  );
};
