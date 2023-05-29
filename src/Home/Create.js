import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Create({ isAuth }) {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, " posts");
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="create-post-page">
      <div className="create-post-container">
        <h1>Create a post</h1>
        <div className="input-group">
          <label>Title:</label>
          <input
            placeholder="Title.."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label>Content:</label>
          <textarea
            placeholder="Write post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button class="button-56" onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default Create;
