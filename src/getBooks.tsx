import {useEffect, useState} from "react";
// import {Book} from "./models/Book.ts";
import axios from "axios";


interface Book {
    id: number | undefined;
    title: string;
    author: string;
    isbn?: string;
}

function GetBooks() {
    const [books, getBooks] = useState<Array<Book | null>>(Array(null));

    useEffect(() => {
        axios.get('http://localhost:3000/books')
            .then(res => getBooks(res.data))
            .catch(err => console.error(err))
    }, [])


    return (
        <>
            <div>
                <h1>My books are:</h1>
                <table>
                    <thead>
                        <tr>
                            <th> Id </th><th> Title </th><th> Author </th><th> ISBN </th>
                        </tr>
                    </thead>
                    {books.map((book,index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{book?.id}</td>
                                <td>{book?.title}</td>
                                <td>{book?.author}</td>
                                <td>{book?.isbn}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>
        </>

    )
}

export default GetBooks;