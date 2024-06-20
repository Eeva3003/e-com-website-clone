import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/bgimage.png" alt="sample image" />

        <div className="home__row">
          <Product
            title="The Hard Thing about Hard Thing: Building a Business When There are No Easy Answers"
            image={
              "https://m.media-amazon.com/images/I/810u9MkT3SL._SY522_.jpg"
            }
            price={208}
            rating={4}
          />
          <Product
            title="Lifelong PVC Hex Dumbbells Pack of 2 for Home Gym Equipment Fitness Barbell"
            image={
              "https://m.media-amazon.com/images/I/51+b9IWWbjL._SX679_.jpg"
            }
            price={248}
            rating={3}
          />
          <Product
            title="KYARI Money N'Joy-Jade-Sansevieria Golden Hahnii Snake Combo of 3 Indoor Plants for Living Room "
            image={
              "https://m.media-amazon.com/images/I/71uErRPWbgL._SX679_.jpg"
            }
            price={935}
            rating={4}
          />

          {/* p*/}
          {/* p*/}
        </div>
        <div className="home__row">
          {/* p*/}
          <Product
            title="Lifelong PVC Hex Dumbbells Pack of 2 for Home Gym Equipment Fitness Barbell|Gym Exercise|Home Workout, Gym Dumbbells|Dumbbells Weights for Men & Women (6 Months Warranty)"
            image={
              "https://m.media-amazon.com/images/I/51+b9IWWbjL._SX679_.jpg"
            }
            price={248}
            rating={3}
          />

          <Product
            title="Lifelong PVC Hex Dumbbells Pack of 2 for Home Gym Equipment Fitness Barbell|Gym Exercise|Home Workout, Gym Dumbbells|Dumbbells Weights for Men & Women (6 Months Warranty)"
            image={
              "https://m.media-amazon.com/images/I/51+b9IWWbjL._SX679_.jpg"
            }
            price={248}
            rating={3}
          />

          <Product
            title="Lifelong PVC Hex Dumbbells Pack of 2 for Home Gym Equipment Fitness Barbell|Gym Exercise|Home Workout, Gym Dumbbells|Dumbbells Weights for Men & Women (6 Months Warranty)"
            image={
              "https://m.media-amazon.com/images/I/51+b9IWWbjL._SX679_.jpg"
            }
            price={248}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="Lifelong PVC Hex Dumbbells Pack of 2 for Home Gym Equipment Fitness Barbell|Gym Exercise|Home Workout, Gym Dumbbells|Dumbbells Weights for Men & Women (6 Months Warranty)"
            image={
              "https://m.media-amazon.com/images/I/51+b9IWWbjL._SX679_.jpg"
            }
            price={248}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
