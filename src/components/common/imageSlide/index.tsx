"use client";

//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";
interface ImageSlideProps {
  images: string[];
  archive: string;
}

const ImageSlide = ({ images, archive }: ImageSlideProps) => {
  return (
    <div className="p-[24px]">
      <Splide
        aria-label={`${archive}`}
        options={{ arrows: false, perMove: 1, type: "loop" }}
        className="m-auto w-[342px]"
      >
        {images.map((image, i) => (
          <SplideSlide className="flex justify-center">
            <Image
              src={`${image}`}
              alt="main"
              width={342}
              height={456}
              className="inline-block"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ImageSlide;
