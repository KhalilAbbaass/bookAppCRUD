import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getBooks } from '../services/GetBooks'


const Books = () => {

    const [books , setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((result)=> {
            setBooks(result.data);
        }).catch((err) => {
            console.log(err)
        })
    },[])


  return (
    <div >
        <h1>KHALIL BOOKS APP</h1>
        <div className='booksDiv'>
        {books.map((item , i) => (
            <div key={i} className='bookDiv'>
                {item.cover && <img src={item.cover} alt ='' />}
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <span>{item.price}</span>
                <button className='delete'>Delete</button>
                <button className='update'>Update</button>
            </div>
        ))}
        </div>
        <button><Link to='/add'>Add new book</Link></button>

    </div>

  )
}

export default Books