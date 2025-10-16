import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/product.service';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) getProduct(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <img src={product.thumbnail} className="w-96 h-96 object-cover" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
