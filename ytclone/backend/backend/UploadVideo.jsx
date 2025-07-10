import { useState } from "react";
import axios from "axios";

export default function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video_file", videoFile);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/videos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      alert("✅ Video uploaded successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleUpload} className="p-6 max-w-md mx-auto flex flex-col gap-4">
      <h2 className="text-xl font-bold">Upload Video</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2"
        required
      />
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideoFile(e.target.files[0])}
        className="border p-2"
        required
      />
      <button className="bg-blue-600 text-white p-2 rounded" type="submit">
        Upload
      </button>
    </form>
  );
}