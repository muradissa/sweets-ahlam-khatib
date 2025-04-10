import React from "react";
import "./BodyX.css";
import category1 from "../assets/category-11.jpg";
import category2 from "../assets/item-c-3.jpg";
import category3 from "../assets/item-e-1.jpg";
import category4 from "../assets/category-4.jpg";
// import category5 from "../assets/category-5.jpg";
import category6 from "../assets/category-6.jpg";
import category7 from "../assets/zz.jpg";
import category8 from "../assets/item-d-3.jpg";
import { FcPhone } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import Footer from "./Footer";


// Mapping category names to images
const categoryImages = {
  "كعكة عيد ميلاد": category1,
  "كعكة بطعمات": category2,
  "مقروطة الكندر": category3,
  "شوكلاطة دبي": category4,
  // "كعكة رولادة": category5,
  "كعك العيد": category6,
  "وجبات": category7,
  "مشكل": category8,
};

// JSON Data for categories and items
const categoryItems = {
  "كعكة عيد ميلاد": [
    { id: 1, name: "ميني كيك", image: "https://i.imgur.com/5IMEG7E.jpeg", price: "₪150", description: "" },
    { id: 2, name: "كعكة سبايدر مان", image: "https://i.imgur.com/66AWvGY.jpeg", price: "₪300-350", description: "" },,
    { id: 3, name: "كعكة شخصيات كرتونية", image: "https://i.imgur.com/m4isFa1.jpeg", price: "₪150-200", description: "" },
    { id: 4, name: "كعكة موس", image: "https://i.imgur.com/VimXHSd.jpeg", price: "₪150-200", description: "" },
    { id: 5, name: "كعكة الشوكولاتة الفاخرة", image: "https://i.imgur.com/Pkfgjf5.jpeg", price: "₪250-300", description: "" },
    { id: 55, name: "كعكة الشوكولاتة الفاخرة", image: "https://i.imgur.com/aYrEgDJ.jpeg", price: "₪250-300", description: "" },
    { id: 65, name: "كعكة الاميرات", image: "https://i.imgur.com/RBacYak.jpeg", price: "₪300", description: "" },
    { id: 78, name: " ميني كيك", image: "https://i.imgur.com/yrDJFD5.jpeg", price: "₪300", description: "" },
    { id: 75, name: " كعكة الدكتورة", image: "https://i.imgur.com/16Kgp9W.jpeg", price: "₪350", description: "" },

  ],
  "كعكة بطعمات": [
    { id: 6, name: "كعكة البرتقال و الشوكلاته", image: "https://i.imgur.com/qiU10FQ.jpeg", price: "₪50", description: "" },
    { id: 7, name: "كعكة موس شوكولاطة", image: "https://i.imgur.com/8MDSw9Z.jpeg", price: "₪150-200", description: "" },
    { id: 9, name: "كعكة جبنه ", image: "https://i.imgur.com/yAu9fbB.jpeg", price: "₪200", description: "" },
    { id: 99, name: "كعكة  ريد ڤيلڤت", image: "https://i.imgur.com/mO9FxYm.jpeg", price: "₪200", description: "" },
    { id: 8, name: "كعكة الشوكلاته", image: "https://i.imgur.com/sRfWPLt.jpeg", price: "₪50", description: "" },
  ],
  "مقروطة الكندر": [
    { id: 11, name: "مقروطة نكهات متعددة", image: "https://i.imgur.com/dt6PbRy.jpeg", price: "₪120 الكيلو ", description: "" },
    { id: 12, name: "مشكل مقروطه وزرد منوع", image: "https://i.imgur.com/qBxDVqc.jpeg", price: "₪80", description:"" },
    { id: 10, name: "مقروطة كندر", image: "https://i.imgur.com/DhUGCBt.jpeg", price: "₪120 الكيلو ", description: "" },
    { id: 111, name: "مقروطة مانچا", image: "https://i.imgur.com/dt6PbRy.jpeg", price: "₪120 الكيلو ", description: "" },
    { id: 112, name: "مقروطة نوتيلا ", image: "https://i.imgur.com/dt6PbRy.jpeg", price: "₪120 الكيلو ", description: "" },
    { id: 113, name: "مقروطة الذهب الأصفر", image: "https://i.imgur.com/dt6PbRy.jpeg", price: "₪120 الكيلو ", description: "" },
    { id: 114, name: "مقروطة ريد ڤيلڤيت", image: "https://i.imgur.com/dt6PbRy.jpeg", price: "₪120 الكيلو ", description: "" },
    { id: 115, name: "مقروطة فستق حلبي", image: "https://i.imgur.com/dt6PbRy.jpeg", price: "₪120 الكيلو ", description: "" },
  
  ],
  "شوكلاطة دبي": [
    { id: 14, name: "شوكولاتة دبي الفاخرة", image: "https://i.imgur.com/3Fwnv6J.jpeg", price: "₪اللوح الصغير   15", description: "" },
    { id: 13, name: "شوكولاتة دبي الفاخرة", image: "https://i.imgur.com/ko5geeM.jpeg", price: "₪اللوح الكبير  50", description: "" },
    { id: 26, name: "20 حبة حشوات كندر توت دبي فستق حلب", image: "https://i.imgur.com/KrNYaDC.jpeg", price: "₪120", description: "" },
  
  ],
  // "كعكة رولادة": [
  //   { id: 16, name: "رولادة الشوكولاتة", image: "https://via.placeholder.com/150", price: "₪180", description:""},
  //   { id: 17, name: "رولادة الفواكه", image: "https://via.placeholder.com/150", price: "₪200", description: ""},
  //   { id: 18, name: "رولادة الليمون", image: "https://via.placeholder.com/150", price: "₪190", description: "" },
  // ],
  "كعك العيد": [
    { id: 19, name: "كب كيك", image: "https://i.imgur.com/ObsYTgP.jpeg", price: "₪20-150", description: "" },
    { id: 20, name: "20 كاسه و هدية زلف خصوصي", image: "https://i.imgur.com/ZCXURyc.jpeg", price: "₪140", description: "" },
    { id: 21, name: "معمول", image: "https://i.imgur.com/wAzETfY.jpeg", price: "₪85 الكيلو", description: "" },
    { id: 21, name: "غريبه", image: "https://i.imgur.com/6xX9AsI.jpeg", price: "₪الكيلو 90", description: "" },
    { id: 21, name: "زرد", image: "https://i.imgur.com/gw99M0U.jpeg", price: "₪85 الكيلو", description: "" },
    { id: 21, name: "الفاخوروس", image: "https://i.imgur.com/5ylTljk.jpeg", price: "₪الكيلو 90", description: "" },
    // { id: 21, name: "معمول", image: "", price: "₪100", description: "" },
    // { id: 21, name: "معمول", image: "", price: "₪100", description: "" },
    // { id: 21, name: "معمول", image: "", price: "₪100", description: "" },
    // { id: 21, name: "معمول", image: "", price: "₪100", description: "" },
  ],
  "وجبات": [
    { id: 22, name: "ليالي بيروت ", image: "https://i.imgur.com/yoXOXEU.jpeg", price: "₪وجبة شخصية 10", description: "" },
    { id: 21, name: "معمول", image: "https://i.imgur.com/y5bFAT9.jpeg", price: "₪وجبة شخصية 10", description: "" },
    { id: 21, name: "20 كاسه فرنسيه", image: "https://i.imgur.com/ZCXURyc.jpeg", price: "₪140", description: "" },
    { id: 21, name: "اصبع خمائر", image: "https://i.imgur.com/0YJZJj1.jpeg", price: "₪50", description: "" },
    { id: 19, name: "كب كيك", image: "https://i.imgur.com/ObsYTgP.jpeg", price: "₪20-150", description: "" },

    
  ],
  "مشكل": [
    { id: 25, name: "زرد + معمول", image: "https://i.imgur.com/9P8czRl.jpeg", price: "₪100", description: ""},
    { id: 26, name: "مقروطه وزرد منوع ", image: "https://i.imgur.com/qBxDVqc.jpeg", price: "₪80", description: "" },
    { id: 26, name: "20 حبة حشوات كندر توت دبي فستق حلب", image: "https://i.imgur.com/KrNYaDC.jpeg", price: "₪120", description: "" },
    { id: 26, name: "30 حبه بيتفورم", image: "https://i.imgur.com/UZ0AAnh.jpeg", price: "₪140", description: "" },
  ],
  // "حلوى إضافية": [
  //   { id: 25, name: "حلوى البقلاوة", image: "https://via.placeholder.com/150", price: "₪120", description: "" },
  //   { id: 26, name: "تارت الفواكه", image: "https://via.placeholder.com/150", price: "₪200", description: "" },
  //   { id: 27, name: "براونيز الشوكولاتة", image: "https://via.placeholder.com/150", price: "₪100", description: "" },
  // ],
};

const BodyX = ({ onCategorySelect, selectedCategory }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (selectedCategory) {
      setIsVisible(true); // Show and animate the container when selected
    } else {
      setIsVisible(false); // Hide when no category is selected
    }
  }, [selectedCategory]);

  return (
    <div className={`body-container ${selectedCategory ? "expanded" : "collapsed"}`}>
    {/* Business Information at the Top */}
    
      <div className={`business-info ${selectedCategory ? "open" : "close"}`} >
          <h1 className="business-info-title">Sweets Ahlam Khatib</h1> 
          <span className="business-info-body">
            <p> <CiLocationOn></CiLocationOn>كفركنا</p> 
            <p> <FcPhone /> 0525863906</p> 
          </span>     
      </div>
      
      {/* Show Categories if no category is selected */}
      {!selectedCategory && (
        <div className="category-cards">
          {Object.keys(categoryItems).map((category, index) => (
            <div key={index} className="category-card" onClick={() => onCategorySelect(category)}>
              <img src={categoryImages[category]} alt={category} />
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      )}

      
       {selectedCategory && (
      <div className={`items-container ${isVisible ? "visible" : ""}`}>
        <h2 className="category-title">{selectedCategory}</h2>
        <div className="items-grid">
          {categoryItems[selectedCategory].map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h3>{item.name}</h3>
                {/* <p>{item.description}</p> */}
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    <Footer></Footer>
    </div>
  );
};

export default BodyX;
