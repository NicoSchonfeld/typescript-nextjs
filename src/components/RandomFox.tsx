"use client";

import React, {
  useRef,
  useEffect,
  useState,
  type ImgHTMLAttributes,
} from "react";
import Image from "next/image";

type LazyProps = { image: string };

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyProps & ImageNative;

const RandomFox: React.FC<Props> = ({ image }: Props) => {
  const [src, setSrc] = useState("");

  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      e.forEach((e) => {
        if (e.isIntersecting) {
          setSrc(image);
        }
      });
    });

    if (node.current) observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <>
      <Image
        ref={node}
        src={src}
        alt="Random Image"
        width={900}
        height={400}
        className="bg-red-500 h-auto"
      />
    </>
  );
};

export default RandomFox;
