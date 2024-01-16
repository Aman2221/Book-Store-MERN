import React, { useContext, useState } from "react";
import { customToast, validateEmail } from "../functions";
import axios from "axios";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { book_data } from "../../interfaces/books";
import CreateUpdate from "../create-update";
import { MyContext } from "../../context/MyContext";

const EditModal = ({
  data,
  showModal,
  closeModal,
}: {
  data: book_data;
  showModal: boolean;
  closeModal: (a: boolean) => void;
}) => {
  const { setBooks }: any = useContext(MyContext);
  const [formData, setFormData] = useState({
    id: data?._id ? data?._id : "",
    email: data?.email ? data.email : "",
    book_name: data?.title ? data.title : "",
    book_author: data?.author ? data.author : "",
    publish_year: data?.publishYear ? data.publishYear : "",
  });

  const handleChange = (e: any): void => {
    let key = e.target.id;
    let value = e.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (validateEmail(formData.email)) {
      const updated_data = {
        title: formData.book_name,
        author: formData.book_author,
        publishYear: formData.publish_year,
        email: formData.email,
      };
      axios
        .put(`http://localhost:8000/books/${formData.id}`, updated_data)
        .then(() => {
          customToast("Book Details Updated sucssessfully");
          closeModal(false);
          axios.get("http://localhost:8000/books").then((response) => {
            setBooks(response.data.data);
          });
        });
    }
  };

  return (
    <>
      <Transition.Root show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border">
                    <div className="sm:flex sm:items-center">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <i className="bx bxs-edit"></i>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Edit book details
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>
                  <CreateUpdate
                    formData={formData}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    closeModal={closeModal}
                    isEdit={true}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default EditModal;
