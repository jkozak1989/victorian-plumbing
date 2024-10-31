import { useEffect, useState } from 'react';
import { ProductsResult } from './types';

export const useProducts = () => {
  let filter = 
  {
      query: "toilets",
      pageNumber: 0,
      size: 0,
      additionalPages: 0,
      sort: 1
  }
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
  }, []);

  return { productsResult };
};