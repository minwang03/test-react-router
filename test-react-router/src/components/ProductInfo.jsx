import { useParams } from 'react-router-dom';

function ProductInfo() {
  const { productId } = useParams(); 
  return (
    <div>
      <h1>Product Info</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
export default ProductInfo;
