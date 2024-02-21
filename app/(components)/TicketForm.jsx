"use client"; //This is necessary if we want to use the client sie javascript

import { useRouter } from "next/navigation";
import react, { useState } from "react";

//Use of "{}" in import = Curly braces are used because these imports are named exports from their respective modules. This syntax allows you to import only the specific parts of the module that you need, rather than importing the entire module.

const TicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center w-full">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h3>Create your Ticket</h3>
        <label>Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description: </label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
      </form>
    </div>
  );
};

export default TicketForm;
