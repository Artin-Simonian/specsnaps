import { useState, useRef, useEffect } from "react";
import * as photosAPI from "../../utilities/photo-api";

export default function PcPostPage() {
  const [title, setTitle] = useState("");
  const [PC, setPC] = useState("");
  const [photos, setPhotos] = useState([]);
  const [processor, setProcessor] = useState("");
  const [videoCard, setVideoCard] = useState("");
  const [ram, setRam] = useState(4);

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
    setTitle("");
    fileInputRef.current.value = "";
  }

  return (
    <main className="App flex-ctr-ctr">
      <section className="flex-ctr-ctr">
        <h2>New PC Post</h2>
        <form action="">
          <input type="file" ref={fileInputRef} /> <br />
          <label htmlFor="">Name of PC</label>
          <input value={PC} onChange={(evt) => setPC(evt.target.value)} />{" "}
          <br />
          <label htmlFor="processor">Name of processor</label>
          <input
            type="text"
            id="processor"
            value={processor}
            onChange={(evt) => setProcessor(evt.target.value)}
          />
          <br />
          <label htmlFor="videoCard">Name of Video Card</label>
          <input
            type="text"
            id="videoCard"
            value={videoCard}
            onChange={(evt) => setVideoCard(evt.target.value)}
          />
          <br />
          <label htmlFor="ram">Amount of RAM</label>
          <input
            type="number"
            id="ram"
            value={ram}
            onChange={(evt) => setRam(evt.target.value)}
          />
          <br />
          <button onClick={handleUpload}>Upload</button>
        </form>
      </section>
    </main>
  );
}
