"use client";

import React, { type ChangeEvent, useState } from "react";

type ListType = { id: number; title: string };

const App: React.FC = () => {
  const [list, setList] = useState<Array<ListType>>([]);
  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setText(value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newText = {
      id: list.length + 1,
      title: text,
    };

    if (text) setList([...list, newText]);

    setText("");
  };

  const handleDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <main>
      <h1>TodoList</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>

      <ul className="flex flex-col gap-3">
        {list?.map((dato) => (
          <li key={dato?.id} className="flex items-center gap-3">
            <p>
              {dato?.id} {dato?.title}
            </p>
            <button
              onClick={() => handleDelete(dato?.id)}
              className="bg-red-500 p-0.5 rounded-lg text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
