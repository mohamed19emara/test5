import React from "react";
import { useCart } from "../../context/CartContext"; // Import useCart to access cart functions
import "./ProductCard.css";
import TopBar from '../../components/TopBar/TopBar';

// Sample Products
const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "High-performance smartphone with excellent camera.",
    price: 999.99,
    image: "https://via.placeholder.com/150",
    rating: 4.7,
    reviews: 320,
    category: "Electronics",
    stock: 50,
    discount: 10,
  },
  {
    id: 2,
    name: "Laptop",
    description: "Lightweight and powerful laptop for professionals.",
    price: 1299.99,
    image: "https://via.placeholder.com/150",
    rating: 4.8,
    reviews: 410,
    category: "Electronics",
    stock: 30,
    discount: 15,
  },
  {
    id: 3,
    name: "T-shirt",
    description: "Comfortable and stylish cotton T-shirt.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    rating: 4.4,
    reviews: 220,
    category: "Clothing",
    stock: 200,
    discount: 5,
  },
  {
    id: 4,
    name: "Jeans",
    description: "Classic denim jeans with a modern fit.",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    reviews: 180,
    category: "Clothing",
    stock: 150,
    discount: 10,
  },
];

const ProductCard = () => {
  const { addToCart } = useCart(); // Access the addToCart function from CartContext

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5;
    let filledStars = Math.floor(rating);
    let emptyStars = totalStars - filledStars;
    return (
      <>
        {"★".repeat(filledStars)}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div>
      <TopBar className="mt-5" />

      {/* عرض جميع المنتجات بدون تصفية */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-rating">
                <span>{renderStars(product.rating)}</span>
                <span className="reviews-count">({product.reviews} reviews)</span>
              </div>
              <p className="product-price">
                ${product.price.toFixed(2)}{" "}
                {product.discount > 0 && (
                  <span className="discount">-{product.discount}%</span>
                )}
              </p>
              <p className="product-stock">Stock: {product.stock}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
