import { useState, useRef, useEffect } from "react";
import * as photosAPI from "../../utilities/photo-api";
import PhotoCard from "../../components/PhotoCard/PhotoCard";

export default function PcPostPage() {
  const [title, setTitle] = useState("");
  const [PC, setPC] = useState("");
  const [photos, setPhotos] = useState([]);

  const fileInputRef = useRef();

  useEffect(function () {
    photosAPI.getAll().then((photos) => setPhotos(photos));
  }, []);

  async function handleUpload() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("photo", fileInputRef.current.files[0]);
    const newPhoto = await photosAPI.upload(formData);
    setPhotos([newPhoto, ...photos]);
    // Clear the description and file inputs
    setTitle("");
    fileInputRef.current.value = "";
  }

  return (
    <main className="App flex-ctr-ctr">
      <section className="flex-ctr-ctr">
        <h2>New PC Post</h2>
        <input type="file" ref={fileInputRef} /> <br />
        <label htmlFor="">Name of PC</label>
        <input value={PC} onChange={(evt) => setPC(evt.target.value)} /> <br />
        <label htmlFor="">Name of processor</label>
        <input type="text" /> <br />
        <label htmlFor="">Name of Video Card</label>
        <input type="text" /> <br />
        <label htmlFor="">Amount of RAM</label>
        <input type="number" /> <br />
        <button onClick={handleUpload}>Upload</button>
      </section>
      <section>
        {photos.map((p) => (
          <PhotoCard photo={p} key={p._id} />
        ))}
      </section>
    </main>
  );
}
