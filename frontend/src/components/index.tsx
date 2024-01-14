import { useState, useEffect } from "react";
import Spinner from "./spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { FaSalesforce } from "react-icons/fa";
import { book_interface } from "../interfaces/books";

const Home = () => {
  const [books, setBooks] = useState<book_interface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8000/books").then((response) => {
      setBooks(response.data);
      console.log("data :", response.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books list </h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
