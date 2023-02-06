import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/AddBook';

const Add = () => {

    const nav = useNavigate();

    const [addedBook , setAddedBook] = useState({
        title: "",
        desc:"",
        price:null,
        cover:"",
    });
    const handleChange = (e) => {
        setAddedBook((prev) => (
            {...prev, [e.target.name]:e.target.value}
        ))
    }

    const handleAddBook =   (e) => {
        e.preventDefault();
        addBook(addedBook).then((result) => {
            console.log(result)
            nav('/')
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='form'>
        <h1>Add new book</h1>
        <input type="text" placeholder='Title' onChange={handleChange} name='title'/>
        <input type="text" placeholder='Description'onChange={handleChange}  name='desc'/>
        <input type="number" placeholder='Price' onChange={handleChange}  name='price'/>
        <input type="text" placeholder='Cover' onChange={handleChange}  name='cover'/>
        <button onClick={handleAddBook}>Add</button>
    </div>
  )
}

export default Add