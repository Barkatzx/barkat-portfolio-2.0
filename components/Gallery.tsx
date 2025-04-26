"use client";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useState } from "react";

const builder = imageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => builder.image(source);

interface Photo {
  _key?: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export default function ImageGallery({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        className="relative w-72 h-64 md:w-96 md:h-96
 rounded-xl overflow-hidden"
      >
        <Image
          src={urlFor(photos[activeIndex]).width(1200).height(1200).url()}
          alt={`Project image ${activeIndex + 1}`}
          fill
          className="object-left"
          priority
        />
      </div>

      {/* Thumbnail Slider */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {photos.map((photo, index) => (
          <button
            key={photo._key || index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${activeIndex === index ? "border-blue-500" : "border-transparent"}`}
          >
            <Image
              src={urlFor(photo).width(200).height(200).url()}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
