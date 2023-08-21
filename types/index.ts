import { MouseEventHandler } from "react";

export interface APIRequestsProps {
  query: string;
  route: string;
  filter?: "partial" | "full" | "free-ebooks" | "paid-ebooks" | "ebooks";
  start_index?: number;
  count_per_page?: number;
  print_type?: "all" | "books" | "magazines";
  download_format?: boolean;
  order_by?: "relevance" | "newest";
}

export interface BookProps {
  id: string;
  kind: string;
  etag: string;
  selfLink: string;
  saleInfo: { country: string; isEbook: boolean; saleability: string };
  searchInfo: { textSnippet: string };
  accessInfo: {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    publicDomain: boolean;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
    epub: { isAvailable: boolean };
    pdf: { isAvailable: boolean };
  };
  volumeInfo: {
    allowAnonLogging: boolean;
    authors: string[];
    canonicalVolumeLink: string;
    contentVersion: string;
    description: string;
    imageLinks: { smallThumbnail: string; thumbnail: string };
    industryIdentifiers: { type: string; identifiers: string }[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    title: string;
    readingModes: { image: boolean; text: boolean };
  };
}

export interface BooksApiResponse {
  kind: string;
  totalItems: number;
  items: BookProps[];
}

export interface FilterProps {
  query: string;
  filter?: "partial" | "full" | "free-ebooks" | "paid-ebooks" | "ebooks";
  start_index?: number;
  count_per_page?: number;
  print_type?: "all" | "books" | "magazines";
  download_format?: boolean;
  order_by?: "relevance" | "newest";
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface BookCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface ButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  pageLimit: number;
  total: number;
  isNext: boolean;
}

export interface SearchQueryProps {
  query: string;
  setQuery: (query: string) => void;
}

export interface SearchFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}
