import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  //JSX

  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (e.target.name === "name") {
      if (!e.target.value.length) {
        setErrorMessage("Please enter your name.");
      } else {
        setErrorMessage("");
      }
    }
    if (e.target.name === "message") {
      if (!e.target.value.length) {
        setErrorMessage("Message me!! Please?!!");
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState, "handleSubmit ran");
    setFormState({ name: "", email: "", message: "" });
    e.target.reset();
    // alert("Your message has been sent to the man himself!");
  }
  //   console.log(formState);
  return (
    <div className="grid grid-col-1 justify-items-left h-screen mx-12 rounded-lg shadow-xl bg-gray-800">
      <section className="w-3/5 pt-32 mt-2 pb-3 text-4xl text-white text-left">
        <h1>Contact me!</h1>

        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/a2a4d9e91c26f6388f431847ca752590"
          method="POST"
          className="block mb-2 text-sm font-medium dark:text-gray-300 pt-6"
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@webmail.org"
              required
              defaultValue={email}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              className="block p-2.5 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Message me!..."
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <input
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 drop-shadow-lg"
            type="submit"
            value="Submit"
          />
        </form>
      </section>
    </div>
  );
}

export default Contact;
