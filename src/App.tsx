import "./App.css";
import {useEffect, useState} from "react";
import axios from "axios";
import GetBooks from "./getBooks.tsx";
import BookInsertForm from "./bookInsertForm.tsx";

function App() {
    // const [books, setBooks] = useState("");
    //
    // useEffect(() => {
    //     axios.get('http://localhost:3000/books')
    //         .then(res => setBooks(res.data))
    //         .catch(err => console.error(err))
    // }, [])

  return (
          <div>
              <GetBooks />
              <BookInsertForm/>
          </div>
  );
}

export default App;
