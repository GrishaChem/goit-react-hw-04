import { Field, Form, Formik } from "formik";
import React from "react";
import s from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    // e.preventDefault();
    // if (inputValue.trim()) {
    //   setQuery(inputValue); // Встановіть запит
    //   setInputValue(""); // Очистіть ввід
    // }
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

      {/* <header>
        <form>
          <input
            type="text"
            autoComplete="off" // Changed here
            autoFocus // Changed here
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header> */}
    </div>
  );
};

export default SearchBar;
