import { useState } from 'react';
import axios from "axios";
// import './BookInsertForm.css';

const BookInsertForm = () => {
    const [Data, setData] = useState({
        title: '',
        author: '',
        isbn:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...Data,
            [name]: value,
        });
    };

    async function addBookToLibrary(newBook: typeof Data) {
        await axios.post('http://localhost:3000/books', newBook);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', Data);
        console.log(Data);
        addBookToLibrary(Data);
    };

    return (
        <div>
            <h1>Insert new book:</h1>
            <form className="form-container"
                  onSubmit={handleSubmit}>
                <input type="text" name="title"
                       placeholder="Enter the title"
                       value={Data.title}
                       onChange={handleChange} />
                <input type="text" name="author"
                       placeholder="Enter the author"
                       value={Data.author}
                       onChange={handleChange} />
                <input type="text" name="isbn"
                       placeholder="Enter the isbn"
                       value={Data.isbn}
                       onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookInsertForm;