import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./components";
import CreateBook from "./components/create-book";
import NavBar from "./components/NavBar";
import { MyContext } from "./context/MyContext.tsx";
import { useState } from "react";
import { book_interface } from "./interfaces/books.tsx";
import Login from "./components/login.tsx";
import SignUp from "./components/sign-up.tsx";

function App() {
  const [books, setBooks] = useState<book_interface[]>([]);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ books, setBooks } as any}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
