import { useEffect, useState } from 'react';
import { ProductsResult, SortType } from './types';
import { FormattedActiveFacets } from './components/Sidebar/types';

const INITIAL_FILTER = {
  query: "toilets",
  pageNumber: 1,
  size: 30,
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
    
  const handleLoadMore = () => {
    setFilter(prev => ({
      ...prev,
      pageNumber: prev.pageNumber + 1
    }));
  };
    
  const handleChangeSort = (value: number) => {
    setFilter(prev => ({
      ...prev,
      sort: value,
      pageNumber: 1
    }));
  };
    
  const handleChangeFacets = (facets: FormattedActiveFacets) => {
    if (Object.keys(facets).length == 0) {
      setFilter(prev => ({
        ...prev,
        facets: undefined,
        pageNumber: 1
      }));
      return;
    }
    setFilter(prev => ({
      ...prev,
      facets: facets,
      pageNumber: 1
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
        if (content.pagination.from !== 0) {
          setProductsResult(prev => ({
            pagination: content.pagination,
            products: [...prev.products, ...content.products],
            facets: content.facets
          }))
          return;
        }
        setProductsResult(content)
    })
  }, [filter]);
  return { productsResult, sortTypes, filter, handleChangeSort, handleChangeFacets, handleLoadMore };
};