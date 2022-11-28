import { getDatabase, onValue, ref } from "firebase/database";
import React, { createContext, useState } from "react";

import { useEffect } from "react";
import app from "../helpers/firebase";



export const BlogContext = createContext({
  cards:{},
  setCards: () => {},
 
  }
);

const BlogContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);


 
   useEffect(() => {
     const db = getDatabase(app);
     console.log(db);
     const blogRef = ref(db, "blogcard/");

     onValue(blogRef, (snapshot) => {
       const data = snapshot.val();
       const blogArray = [];

       for (let id in data) {
         blogArray.push({ id, ...data[id] });
       }
       setCards(blogArray);
       // setIsLoading(false);
     });
     console.log(cards);
   }, []);
 


  return (
    <BlogContext.Provider value={{ cards, setCards }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
