import React, { useState } from "react";

const FileUpload = () => {
  const URL = "http://localhost:8080/fileUpload/";
  const [imagesUrls, setImagesUrl] = useState([]);
  const handleUpload = async (event) => {
    event.preventDefault();
    console.log(event.target.image.files[0]);
    const data = new FormData();
    const files = event.target.image.files;
    data.append("image", files[0]);

    const options = {
      method: "POST",
      body: data,
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setImagesUrl(FETCHED_JSON.data);
  };

  return (
    <form method="post" encType="multipart/form-data" onSubmit={handleUpload}>
      <input type="file" name="image" />
      <ul>
        {imagesUrls.map((img, index) => (
          <img src={img} alt="img" />
        ))}
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUpload;
