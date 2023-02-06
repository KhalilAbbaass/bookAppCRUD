import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getBooks } from '../services/GetBooks';
import { deleteBook } from '../services/DeleteBook';


const Books = () => {

    const [books , setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((result)=> {
            setBooks(result.data);
        }).catch((err) => {
            console.log(err)
        })
    },[])


    const handleDelete = (bookId) => {
        deleteBook(bookId).then((result) => {
            console.log(result)
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }

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
                <button onClick={() => {handleDelete(item.id)}} className='delete'>Delete</button>
                <button className='update'><Link className='updateLink' to='/update'>Update</Link></button>
            </div>
        ))}
        </div>
        <button className='addNewBook'><Link className='addLink' to='/add'>Add new book</Link></button>

    </div>

  )
}

export default Books