"use client";

import React, { useState } from "react";
import type { MouseEventHandler } from "react";
import RandomFox from "@/components/RandomFox";

const App = () => {
  const random = () => Math.floor(Math.random() * 200) + 1;

  type ImageItems = { id: number; url: string };

  const [images, setImages] = useState<Array<ImageItems>>([]);

  const addNewPhoto: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItems = {
      id: images.length + 1,
      url: `https://picsum.photos/${random()}`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <main className="w-full h-auto p-20 flex flex-col justify-start items-center gap-20">
      <h1 className="text-4xl font-bold">Aprendiendo TypeScript + Next.js!</h1>

      <button
        onClick={addNewPhoto}
        className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none"
      >
        Add new Photo
      </button>

      <div className="grid grid-cols-3 gap-20">
        {images?.map(({ id, url }) => (
          <div key={id}>
            <RandomFox image={url} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
