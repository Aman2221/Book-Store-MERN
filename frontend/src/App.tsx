import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./components";
import CreateBook from "./components/create-book";
import DeleteBook from "./components/delete-book";
import EditBooks from "./components/edit-book";
import ShowBook from "./components/show-books";
import NavBar from "./components/NavBar";
import { MyContext } from "./context/MyContext.tsx";
import { useState } from "react";
import { book_interface } from "./interfaces/books.tsx";

function App() {
  const [books, setBooks] = useState<book_interface[]>([]);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ books, setBooks } as any}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
          <Route path="/books/edit/:id" element={<EditBooks />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
