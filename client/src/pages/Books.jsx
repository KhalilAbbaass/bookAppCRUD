import React, { useEffect, useState } from 'react'
import { getBooks } from '../services/GetBooks'


const Books = () => {

    const [books , setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((result)=> {
            console.log(result);
        }).catch((err) => {
            console.log(err)
        })
    },[])


  return (
    <div>Books</div>
  )
}

export default Books