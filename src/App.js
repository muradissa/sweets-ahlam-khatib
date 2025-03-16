import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BodyX from "./components/BodyX";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    console.log(`Category selected: ${category}`);
    setSelectedCategory(category);
  };

  const handleBackButtonClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="app">
      <Header selectedCategory={selectedCategory} onBackButtonClick={handleBackButtonClick} />
      <BodyX onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
