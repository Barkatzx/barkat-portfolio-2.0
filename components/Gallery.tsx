"use client";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const goNext = () => setActiveIndex((prev) => (prev + 1) % photos.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="space-y-4">
      {/* Main Image (1200x630, left-aligned) */}
      <div
        className="relative aspect-[1200/630] w-full max-w-4xl rounded-xl overflow-hidden bg-white cursor-pointer"
        onClick={handleMainImageClick}
      >
        <Image
          src={urlFor(photos[activeIndex]).width(1200).height(630).url()}
          alt={`Project image ${activeIndex + 1}`}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
        />
      </div>

      {/* Thumbnails with fixed size */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {photos.map((photo, index) => (
          <button
            key={photo._key || index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-[100px] h-[100px] rounded-md overflow-hidden border-2 transition-all ${
              activeIndex === index ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <Image
              src={urlFor(photo).width(100).height(100).url()}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="object-cover w-full h-full bg-white"
            />
          </button>
        ))}
      </div>

      {/* Modal with full image view */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left arrow */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-20"
              onClick={goPrev}
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image (uncropped, full fit) */}
            <div className="relative w-full h-full max-h-[90vh] max-w-[90vw]">
              <Image
                src={urlFor(photos[activeIndex]).width(1200).height(630).url()}
                alt={`Full view image ${activeIndex + 1}`}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Right arrow */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-20"
              onClick={goNext}
            >
              <ChevronRight size={40} />
            </button>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-30"
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
