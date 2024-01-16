import { useContext, useEffect } from "react";
import BooksTable from "./table";
import { ToastContainer } from "react-toastify";
import { MyContext } from "../context/MyContext";
import axios from "axios";

const Home = () => {
  const { books, setBooks }: any = useContext(MyContext);

  useEffect(() => {
    axios.get("http://localhost:8000/books").then((response) => {
      setBooks(response.data.data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center mt-40">
      <BooksTable books={books} />
      <ToastContainer />
    </div>
  );
};

export default Home;
