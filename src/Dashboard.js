import React, { useState } from "react";
import "./index.css";

const Dashboard = () => {
  // Auction product data with blank images
  const [auctions] = useState([
    { id: 1, title: "iPhone 14 Pro", description: "Brand new, 128GB", price: 58000, image: "./images/download.jpg" },
    { id: 2, title: "Gaming Laptop", description: "RTX 3060, 16GB RAM", price: 99999, image: "" },
    { id: 3, title: "Smartwatch", description: "Water-resistant, AMOLED display", price: 12499, image: "" },
    { id: 4, title: "Wireless Headphones", description: "Noise-canceling, Bluetooth 5.0", price: 16999, image: "" },
    { id: 5, title: "4K Smart TV", description: "55-inch Ultra HD", price: 74999, image: "" },
    { id: 6, title: "Electric Scooter", description: "Long battery life, 25km/h", price: 49999, image: "" },
    { id: 7, title: "DSLR Camera", description: "24MP, 4K recording", price: 89999, image: "" },
    { id: 8, title: "Gaming Console", description: "Next-gen, 1TB storage", price: 41999, image: "" },
    { id: 9, title: "Bluetooth Speaker", description: "Portable, deep bass", price: 6999, image: "" },
    { id: 10, title: "Home Theater System", description: "Surround sound, 5.1 channels", price: 31999, image: "" },
    { id: 11, title: "Fitness Tracker", description: "Heart rate monitor, step counter", price: 8499, image: "" },
    { id: 12, title: "Tablet", description: "10-inch display, 64GB storage", price: 24999, image: "" },
    { id: 13, title: "Air Purifier", description: "HEPA filter, removes allergens", price: 19999, image: "" },
    { id: 14, title: "Microwave Oven", description: "Convection, 20L capacity", price: 17999, image: "" },
    { id: 15, title: "Smart Doorbell", description: "Video calling, motion detection", price: 14999, image: "" },
    { id: 16, title: "VR Headset", description: "Immersive gaming experience", price: 28999, image: "" },
    { id: 17, title: "Coffee Maker", description: "Automatic brewing, 12 cups", price: 9999, image: "" },
    { id: 18, title: "Robot Vacuum Cleaner", description: "Self-charging, smart mapping", price: 37999, image: "" },
  ]);

  // Search query state
  const [searchQuery, setSearchQuery] = useState("");

  // Filter auctions based on search query
  const filteredAuctions = auctions.filter((auction) =>
    auction.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Browse!!!!</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {/* Auction Product Grid */}
      <div className="auction-grid">
        {filteredAuctions.length > 0 ? (
          filteredAuctions.map((auction) => (
            <div key={auction.id} className="auction-card">
              {/* Image Placeholder (Replace with actual images later) */}
              <div className="image-placeholder">Image</div>
              
              <div className="product-details">
                <h3>{auction.title}</h3>
                <p className="product-desc">{auction.description}</p>
                <strong className="product-price">₹{auction.price.toLocaleString("en-IN")}</strong>
              </div>

              {/* Action Buttons */}
              <div className="buttons">
                <button className="buy-now">Buy Now</button>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
