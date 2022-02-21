import { useState } from "react";
import Dumb from "./Dumb";
import "./App.css";

const Profiledetail = () => {
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    if (name.length > 0) {
      setIsModalOpen(!ismodalOpen);
    }
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="input-div">
      <input
        type="text"
        placeholder="You must enter your name,please"
        value={name}
        onChange={handleChange}
        className="input-field"
        required
      />
      <button type="submit" className="yes" onClick={handleSubmit}>
        Enter
      </button>
      {ismodalOpen && <Dumb names={name} />}
    </div>
  );
};

export default Profiledetail;
