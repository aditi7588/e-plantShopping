import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(true);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          cost: "$20"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          cost: "$17"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          cost: "$14"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=600&q=80",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?auto=format&fit=crop&w=600&q=80",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          cost: "$12"
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          cost: "$14"
        },
        {
          name: "Hyacinth",
          image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          cost: "$22"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80",
          cost: "$25"
        },
        {
          name: "Pothos",
          image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          cost: "$10"
        },
        {
          name: "Cast Iron Plant",
          image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
          cost: "$20"
        },
        {
          name: "Succulents",
          image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
          cost: "$18"
        },
        {
          name: "Aglaonema",
          image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
          cost: "$22"
        },
        {
          name: "Chinese Money Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a7e4e95?auto=format&fit=crop&w=600&q=80",
          cost: "$21"
        }
      ]
    }
  ];

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    setShowPlants(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
    setShowPlants(true);
  };

  return (
    <div className="product-list-container">

      <nav
        className="navbar"
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onHomeClick();
            }}
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            <h2>Paradise Nursery</h2>
            <i>Where Green Meets Serenity</i>
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onHomeClick();
            }}
            style={{
              color: 'white',
              fontSize: '20px',
              textDecoration: 'none'
            }}
          >
            Home
          </a>

          <a
            href="#plants"
            onClick={handlePlantsClick}
            style={{
              color: 'white',
              fontSize: '20px',
              textDecoration: 'none'
            }}
          >
            Plants
          </a>

          <a
            href="#cart"
            onClick={handleCartClick}
            style={{
              color: 'white',
              fontSize: '20px',
              textDecoration: 'none'
            }}
          >
            🛒 Cart ({totalItems})
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem
          onContinueShopping={handleContinueShopping}
        />
      ) : (
        <div>
          <h1 style={{ textAlign: 'center' }}>
            Paradise Nursery Plants
          </h1>

          {showPlants &&
            plantsArray.map((category) => (
              <section
                className="category"
                key={category.category}
              >
                <h2 style={{ textAlign: 'center' }}>
                  {category.category}
                </h2>

                <div className="product-grid">
                  {category.plants.map((plant) => (
                    <div
                      className="product-card"
                      key={plant.name}
                    >
                      <img
                        src={plant.image}
                        alt={plant.name}
                        style={{
                          width: '100%',
                          height: '220px',
                          objectFit: 'cover'
                        }}
                      />

                      <h3>{plant.name}</h3>

                      <p>{plant.cost}</p>

                      <button
                        className="product-button"
                        onClick={() =>
                          handleAddToCart(plant)
                        }
                        disabled={isInCart(plant.name)}
                      >
                        {isInCart(plant.name)
                          ? 'Added to Cart'
                          : 'Add to Cart'}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
