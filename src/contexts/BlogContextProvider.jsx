import React, { createContext, useEffect, useState } from 'react'
import app from "../helpers/firebase";
import {getDatabase, onValue, ref} from "firebase/database"

export const BlogContext = createContext();




const BlogContextProvider = ({children}) => {

  
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const db = getDatabase(app);
      const blogRef = ref(db, "blogcard/") 

      onValue(blogRef, (snapshot) => {
          const data = snapshot.val();
          const blogArray = [];

          for (let id in data) {
              blogArray.push({id, ...data[id]});
          }
          setCards(blogArray)
          setIsLoading(false)
      })
    console.log(cards);
    
    }, []);
    

  return (
    <BlogContext.Provider value={{isLoading, cards}}>
{children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider