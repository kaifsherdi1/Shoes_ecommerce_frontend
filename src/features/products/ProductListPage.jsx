import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/product.service';
import ProductCard from '../../components/common/ProductCard';

export default function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-4 gap-4">
      {products.map(p => <ProductCard key={p.id} {...p} />)}
    </div>
  );
}
