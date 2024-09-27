import { Field, Form, Formik } from "formik";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    if (values.query.trim() === "") {
      toast.error("Пошуковий запит не може бути порожнім!");
      return;
    }

    console.log(values);
    setQuery(values.query);
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <ToastContainer /> {/* Додано для відображення повідомлень */}
    </div>
  );
};

export default SearchBar;
