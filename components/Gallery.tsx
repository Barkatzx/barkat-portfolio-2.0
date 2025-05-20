"use client";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useState } from "react";

// Sanity image builder
const builder = imageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => builder.image(source);

// Image type
interface Photo {
  _key?: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export default function ImageGallery({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleMainImageClick = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        className="relative w-full max-w-xs md:max-w-sm aspect-[9/16] mx-auto rounded-xl overflow-hidden cursor-pointer bg-white"
        onClick={handleMainImageClick}
      >
        <Image
          src={urlFor(photos[activeIndex]).width(904).height(1600).url()}
          alt={`Project image ${activeIndex + 1}`}
          fill
          priority
          className="object-contain object-center"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {photos.map((photo, index) => (
          <button
            key={photo._key || index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-20 aspect-[9/16] rounded-md overflow-hidden border-2 transition-all ${
              activeIndex === index ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <Image
              src={urlFor(photo).width(100).height(178).url()}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={178}
              className="object-contain w-full h-full bg-white"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <div className="relative w-full h-screen max-w-6xl mx-auto">
            <Image
              src={urlFor(photos[activeIndex]).url()}
              alt={`Full view image ${activeIndex + 1}`}
              fill
              priority
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
