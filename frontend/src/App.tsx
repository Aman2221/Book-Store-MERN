import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./components";
import CreateBook from "./components/create-book";
import DeleteBook from "./components/delete-book";
import EditBooks from "./components/edit-book";
import ShowBook from "./components/show-books";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
    </Routes>
  );
}

export default App;
