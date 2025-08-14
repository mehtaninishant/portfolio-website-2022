// import React from "react";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
// import ImageOne from "../../images/image1.jpg";
// import ImageTwo from "../../images/image2.jpg";
// import ImageThree from "../../images/image3.jpg";
// import ImageFour from "../../images/image4.jpg";
// import ImageFive from "../../images/image5.jpg";
// import "./styles.scss";
// import { useState } from "react";

// const portfolioData = [
//   {
//     id: 2,
//     name: "Ecommerce",
//     image: ImageOne,
//     link: "",
//   },
//   {
//     id: 3,
//     name: "Notes App",
//     link: "",
//     image: ImageTwo,
//   },
//   {
//     id: 2,
//     name: "Supplier Design",
//     image: ImageThree,
//     link: "",
//   },
//   {
//     id: 2,
//     name: "Todo App",
//     image: ImageFour,

//     link: "",
//   },
//   {
//     id: 3,
//     name: "Shopping cart design",
//     image: ImageFive,
//     link: "",
//   },
// ];

// const filterData = [
//   {
//     filterId: 1,
//     label: "All",
//   },
//   {
//     filterId: 2,
//     label: "Developement",
//   },
//   {
//     filterId: 3,
//     label: "Design",
//   },
// ];

// const Portfolio = () => {
//   const [filteredvalue, setFilteredValue] = useState(1);
//   const [hoveredValue, setHoveredValue] = useState(null);

//   function handleFilter(currentId) {
//     setFilteredValue(currentId);
//   }

//   function handleHover(index) {
//     setHoveredValue(index);
//   }

//   console.log("====================================");
//   console.log(hoveredValue);
//   console.log("====================================");

//   const filteredItems =
//     filteredvalue === 1
//       ? portfolioData
//       : portfolioData.filter((item) => item.id === filteredvalue);

//   console.log(filteredItems);

//   return (
//     <section id="portfolio" className="portfolio">
//       <PageHeaderContent
//         headerText="My Portfolio"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="portfolio__content">
//         <ul className="portfolio__content__filter">
//           {filterData.map((item) => (
//             <li
//               className={item.filterId === filteredvalue ? "active" : ""}
//               onClick={() => handleFilter(item.filterId)}
//               key={item.filterId}
//             >
//               {item.label}
//             </li>
//           ))}
//         </ul>
//         <div className="portfolio__content__cards">
//           {filteredItems.map((item, index) => (
//             <div
//               className="portfolio__content__cards__item"
//               key={`cardItem${item.name.trim()}`}
//               onMouseEnter={() => handleHover(index)}
//               onMouseLeave={() => handleHover(null)}
//             >
//               <div className="portfolio__content__cards__item__img-wrapper">
//                 <a>
//                   <img alt="dummy data" src={item.image} />
//                 </a>
//               </div>
//               <div className="overlay">
//                 {index === hoveredValue && (
//                   <div>
//                     <p>{item.name}</p>
//                     <button>Visit</button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Portfolio;





// import React from "react";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
// import ImageOne from "../../images/image1.jpg";
// import ImageTwo from "../../images/image2.jpg";
// import ImageThree from "../../images/image3.jpg";
// import ImageFour from "../../images/image4.jpg";
// import ImageFive from "../../images/image5.jpg";
// import Imagesix from "../../images/image6.jpg";
// import Imageseven from "../../images/image7.jpg";
// import "./styles.scss";
// import { useState } from "react";

// const portfolioData = [
//   {
//     id: 2,
//     name: "Ecommerce",
//     image: ImageOne,
//     link: "",
//   },
//   {
//     id: 2,
//     name: "Supplier Design",
//     image: ImageThree,
//     link: "",
//   },
//   {
//     id: 2,
//     name: "Todo App",
//     image: ImageFour,
//     link: "",
//   },
//   {
//     id: 3,
//     name: "Notes App",
//     link: "",
//     image: ImageTwo,
//   },
//   {
//     id: 3,
//     name: "Shopping cart design",
//     image: ImageFive,
//     link: "",
//   },
//   // Adding two duplicate copies of ImageFive for "My Programming Profile"
//   {
//     id: 3,
//     name: "Shopping cart design (Duplicate 1)",
//     image: Imagesix,
//     link: "",
//   },
//   {
//     id: 3,
//     name: "Shopping cart design (Duplicate 2)",
//     image: Imageseven,
//     link: "",
//   },
// ];

// const filterData = [
//   {
//     filterId: 1,
//     label: "All",
//   },
//   {
//     filterId: 2,
//     label: "My Programming Profile",
//   },
//   {
//     filterId: 3,
//     label: "Projects",
//   },
// ];

// const Portfolio = () => {
//   const [filteredvalue, setFilteredValue] = useState(1);
//   const [hoveredValue, setHoveredValue] = useState(null);

//   function handleFilter(currentId) {
//     setFilteredValue(currentId);
//   }

//   function handleHover(index) {
//     setHoveredValue(index);
//   }

//   const filteredItems =
//     filteredvalue === 1
//       ? portfolioData
//       : portfolioData.filter((item) => item.id === filteredvalue);

//   return (
//     <section id="portfolio" className="portfolio">
//       <PageHeaderContent
//         headerText="My Portfolio"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="portfolio__content">
//         <ul className="portfolio__content__filter">
//           {filterData.map((item) => (
//             <li
//               className={item.filterId === filteredvalue ? "active" : ""}
//               onClick={() => handleFilter(item.filterId)}
//               key={item.filterId}
//             >
//               {item.label}
//             </li>
//           ))}
//         </ul>
//         <div className="portfolio__content__cards">
//           {filteredItems.map((item, index) => (
//             <div
//               className="portfolio__content__cards__item"
//               key={`cardItem${item.name.trim()}`}
//               onMouseEnter={() => handleHover(index)}
//               onMouseLeave={() => handleHover(null)}
//             >
//               <div className="portfolio__content__cards__item__img-wrapper">
//                 <a>
//                   <img alt="dummy data" src={item.image} />
//                 </a>
//               </div>
//               <div className="overlay">
//                 {index === hoveredValue && (
//                   <div>
//                     <p>{item.name}</p>
//                     <button>Visit</button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;







import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import Imagesix from "../../images/image6.jpg";
import Imageseven from "../../images/image7.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "My Leetcode profile",
    image: ImageOne,
    link: "",
  },
  {
    id: 2,
    name: "My Codechef Profile",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "My Codeforces Profile",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Movie ticket booking (MERN)",
    link: "",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Stock Market Portfolio App",
    image: ImageFive,
    link: "",
  },
  // Adding two duplicate copies of ImageFive for "My Programming Profile"
  {
    id: 3,
    name: "NETFLIX Clone",
    image: Imagesix,
    link: "",
  },
  {
    id: 3,
    name: "Calculator",
    image: Imageseven,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "My Programming Profile",
  },
  {
    filterId: 3,
    label: "Projects",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <p className="portfolio__content__cards__item__name">{item.name}</p>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
