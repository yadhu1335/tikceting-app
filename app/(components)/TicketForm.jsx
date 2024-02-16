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
    <div className="flex justify-center">
      <form>
        <h3>Create your Ticket</h3>
        <label>Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        ></input>
      </form>
    </div>
  );
  //   return <div>TicketForm</div>;
};

export default TicketForm;
