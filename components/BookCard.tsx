"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { BookProps } from "@/types";
import Button from "./Button";
import BookDetails from "./BookDetails";

interface BookCardProps {
  book: BookProps;
}

const BookCard = ({ book }: BookCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { volumeInfo } = book;

  return (
    <div className="book-card group">
      <div className="book-card__content">
        <h2 className="book-card__content-title">{volumeInfo?.title}</h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-end text-[14px] leading-[17px] font-medium">
          {volumeInfo?.pageCount} pages
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        {volumeInfo?.imageLinks ? (
          <Image
            src={volumeInfo?.imageLinks ? volumeInfo?.imageLinks.thumbnail : ""}
            alt="book model"
            fill
            priority
            className="object-contain"
          />
        ) : (
          <h6>No image available</h6>
        )}
      </div>

      <div className="relative flex w-full mt-2">
        {/* <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="book-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="book-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="book-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="book-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div> */}

        <div className="book-card__btn-container">
          <Button
            title="View Details"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <BookDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        book={book}
      />
    </div>
  );
};

export default BookCard;
