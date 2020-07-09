import React, { createContext, useReducer, Children } from 'react'
import AppReducer from './AppReducer'

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    price: 250,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    price: 350,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    price: 550,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
  "nike-blazer-mid-77": {
    name: "NIKE BLAZER MID '77",
    price: 150,
    img:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-b9a04687-a06b-4a44-b6a8-08d4bd336e1e/blazer-mid-77-womens-shoe-25h71W.jpg",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
  "air-max-97-essential": {
    name: "NIKE AIR MAX 97 ESSENTIAL",
    price: 50,
    img:
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2cede278-d385-424c-ba20-bfd4d4361b0c/air-max-97-essential-womens-shoe-XD9m01.jpg",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
  "zoom-double-stacked": {
    name: "NIKE ZOOM DOUBLE STACKED",
    price: 75,
    img:
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1e59a9c5-2434-4842-bff4-11e2f4117833/zoom-double-stacked-womens-shoe-zPhZQr.jpg",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
  "air-max-2090": {
    name: "NIKE AIR MAX 2090",
    price: 100,
    img:
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ea203d32-1a52-4c79-b400-25a9b5836507/air-max-2090-womens-shoe-nk9ZbX.jpg",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
  "air-vapormax-plus": {
    name: "NIKE AIR VAPORMAX PLUS",
    price: 200,
    img:
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/834aa5fc-e81f-431d-a7d0-6033e549c0f9/air-vapormax-plus-womens-shoe-xbt7zf.jpg",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
  "air-force-1-07": {
    name: "NIKE AIR FORCE 1 07",
    price: 300,
    img:
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9e422b30-ece7-4c9a-9e62-84d245a16d1f/air-force-1-07-womens-shoe-s20PDf.jpg",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
  "lebron-17-low": {
    name: "LEBROM 17 LOW",
    price: 30,
    img:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0b2ea20b-6da3-4948-8692-ac5ca5a4964f/lebron-17-low-basketball-shoe-fHcqqM.jpg",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus vehicula purus eu vehicula. Suspendisse vulputate condimentum metus, vel bibendum justo porta at. In sagittis dui at tortor volutpat, non volutpat lectus tempor. Suspendisse potenti. Cras condimentum vehicula mauris, quis rutrum lorem vestibulum sed. Sed porttitor dui et iaculis pulvinar. Pellentesque commodo et felis et consequat. Sed tincidunt dolor dui, ultricies placerat dolor vestibulum scelerisque. In varius aliquet lectus et malesuada."
  },
};
    
const item = [
  { id: 1, product: "jordan-mars-270-london" },
  { id: 2, product: "air-jordan-1-zoom-racer-blue" },
  { id: 3, product: "jordan-mars-270-london" },
  { id: 4, product: "air-jordan-3-valor-blue" }
];
  
export const GlobalContext = createContext({shoes, item});


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, {shoes, item});

    function deleteItem(id) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        });
    }

  function addItem(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
    }

    return (
        <GlobalContext.Provider value={{ shoes: state.shoes, item: state.item, deleteItem, addItem }}>
            {children}
        </GlobalContext.Provider>
    );
}