import { useEffect, useState } from 'react';
import { ProductsResult, SortType } from './types';

const INITIAL_FILTER = {
  query: "toilets",
  pageNumber: 0,
  size: 0,
  additionalPages: 0,
  sort: 1
};

export const useProducts = () => {
  let sortTypes: SortType[] = [
    {
      id: 1,
      name: 'Recommended'
    },
    {
      id: 2,
      name: 'Price Low To High'
    },
    {
      id: 3,
      name: 'Price High To Low'
    },
    {
      id: 4,
      name: 'Largest Discount'
    }
  ];
    
  const [filter, setFilter] = useState({
    ...INITIAL_FILTER
  });
    
  const [productsResult, setProductsResult] = useState<ProductsResult>({
    facets: [],
    products: [],
    pagination: {
      from: 0,
      size: 0,
      total: 0,
      sortType: 1
    }
  });
    
  const handleChangeFilter = (key: string, value: any) => {
    setFilter(prev => ({
      ...prev,
      [key]: value
    }));
  };
    
  useEffect(() => {
    fetch('https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filter)
    }).then(response => {
      return response.json();
    }).then((content: ProductsResult) => {
        setProductsResult(content)
        console.log(content);
    })
  }, [filter]);

  return { productsResult, sortTypes, filter, handleChangeFilter };
};