"use client";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { BookProps } from "@/types";

interface BookDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  book: BookProps;
}

const BookDetails = ({ isOpen, closeModal, book }: BookDetailsProps) => {
  const { volumeInfo } = book;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-1 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-80 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={
                          volumeInfo?.imageLinks
                            ? volumeInfo?.imageLinks.thumbnail
                            : ""
                        }
                        alt="book model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {volumeInfo?.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey capitalize">Description</h4>
                        <div className="flex flex-col">
                          <p className="text-black-100 font-semibold text-justify">
                            {volumeInfo?.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey capitalize">Authors</h4>
                        <div className="flex flex-col">
                          {volumeInfo?.authors &&
                            volumeInfo?.authors.map((author) => (
                              <p
                                key={author}
                                className="text-black-100 font-semibold"
                              >
                                {author}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BookDetails;
