import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Test.css";

const Test = () => {
  const [tags, setTags] = useState([]);

  function checkURL(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    if (checkURL(value)) {
      setTags([...tags, value.trim()]);
      e.target.value = "";
    } else {
      toast.error("Please enter a valid image URL");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  return (
    <div className="tags-input-container">
      {tags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}>
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="tags-input"
        placeholder="Type somthing"
      />
    </div>
  );
};

export default Test;
