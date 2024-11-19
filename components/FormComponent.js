import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", age: "", file: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("age", formData.age);
    data.append("file", formData.file);

    try {
      //   const response = await axios.post(
      //     "http://192.168.241.2:8080/submit",
      //     data,
      //     {
      //       headers: { "Content-Type": "multipart/form-data" },
      //     }
      //   );
      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error("Error submitting the form.");
    }
  };

  return (
    <div className="container">
      <h2>Healthcare Dashboard</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>File Upload</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
