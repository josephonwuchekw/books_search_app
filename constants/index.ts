import { OptionProps } from "@/types";

const isDev = process && process.env.NODE_ENV === "development";

export const base_url: string = isDev
  ? "http://localhost:8000/api/v1"
  : "http://13.59.3.245:8000/api/v1";

// export const base_url: string = "http://13.59.3.245:8000/api/v1";

export const books_route: string = "books";

export const filters: string[] = [
  "partial",
  "full",
  "free-ebooks",
  "paid-ebooks",
  "ebooks",
];

export const print: OptionProps[] = [
  { value: "all", title: "all" },
  { value: "books", title: "books" },
  { value: "magazines", title: "magazines" },
];

export const sorting: OptionProps[] = [
  { title: "relevance", value: "relevance" },
  { title: "newest", value: "newest" },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
    ],
  },
  {
    title: "BooksHub",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
