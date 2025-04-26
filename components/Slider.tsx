"use client";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useState } from "react";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

type Props = {
  images: SanityImageSource[];
  title: string;
};

export default function Slider({ images, title }: Props) {
  const [selectedImage, setSelectedImage] = useState<SanityImageSource>(
    images[0]
  );

  console.log("Slider rendered with images:", images);

  return (
    <div className="z-10">
      <Image
        src={urlFor(selectedImage)?.width(800).height(450).url() || ""}
        alt={title}
        width={800}
        height={450}
        className="rounded-xl"
        unoptimized
      />
      <div className="flex gap-3 mt-4">
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={urlFor(img)?.width(150).height(100).url() || ""}
            alt={`Thumbnail ${idx + 1}`}
            width={150}
            height={100}
            className={`cursor-pointer rounded-md border-2 ${
              selectedImage === img ? "border-violet-500" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(img)}
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}
