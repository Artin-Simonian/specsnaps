import { useState, useRef } from "react";
import React from "react";
import { addPC } from "../../utilities/pc-api";
import { useNavigate, useParams } from "react-router-dom";
import "./PcPostPage.css";

function PcPostPage() {
  const fileInputRef = useRef();
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    processor: "",
    videoCard: "",
    ram: 0,
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "ram" ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addPC(formData);

      if (response.ok) {
        navigate("/");
      } else {
      }
    } catch (error) {}
  };

  return (
    <form className="post-page-form" onSubmit={handleSubmit}>
      <input type="file" ref={fileInputRef} /> <br /> <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Processor:
        <input
          type="text"
          name="processor"
          value={formData.processor}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Video Card:
        <input
          type="text"
          name="videoCard"
          value={formData.videoCard}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        RAM:
        <input
          type="number"
          name="ram"
          value={formData.ram}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PcPostPage;
