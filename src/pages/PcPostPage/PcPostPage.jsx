import { useState, useRef } from "react";
import React from "react";
import { addPC } from "../../utilities/pc-api";
import { useNavigate, useParams } from "react-router-dom";
import "./PcPostPage.css";

function PcPostPage() {
  const fileInputRef = useRef();
  const [formData, setFormData] = useState({
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
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const uploadData = new FormData();
    uploadData.append("name", formData.name);
    uploadData.append("processor", formData.processor);
    uploadData.append("videoCard", formData.videoCard);
    uploadData.append("ram", formData.ram);
    uploadData.append("image", fileInputRef.current.files[0]);
    try {
      await addPC(uploadData);
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  };
console.log(formData);
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
          type="text"
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
