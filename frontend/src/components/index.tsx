import { useContext } from "react";
import BooksTable from "./table";
import { ToastContainer } from "react-toastify";
import { MyContext } from "../context/MyContext";
const Home = () => {
  const { books }: any = useContext(MyContext);

  return (
    <div className="flex justify-center items-center mt-14">
      <BooksTable books={books} />
      <ToastContainer />
    </div>
  );
};

export default Home;
