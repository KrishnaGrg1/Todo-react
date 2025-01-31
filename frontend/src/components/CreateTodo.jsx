import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    fetch("http://localhost:9000/add", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json", // Correct header
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to add todo");
        }
        const json = await res.json();
        alert("Todo Added Successfully");
        // Optionally, reset the input fields
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add todo");
      });
  };

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        value={title} // Controlled input
      />
      <br />
      <br />
      <input
        id="desc"
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
        value={description} // Controlled input
      />
      <br />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={handleAddTodo}
      >
        Add a Todo
      </button>
    </div>
  );
}