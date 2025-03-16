import React from "react";
import foodImg from "../assets/food-category.jpg"
import drinkImg from "../assets/drink-category.jpg"
import logo from "../assets/logo.jpg";

const CategoryCards = ({ onCategorySelect }) => {
  return (
    <div className="category-cards">
      <div className="category-card" onClick={() => onCategorySelect('food')}>
        <img src={foodImg} alt="Food" />
        <h3>Foods</h3>
      </div>
      <div className="category-card" onClick={() => onCategorySelect('drinks')}>
        <img src={drinkImg} alt="Drinks" />
        <h3>Drinks</h3>
        <img src={logo} alt="Logo"  />

      </div>
    </div>
  );
};

export default CategoryCards;
