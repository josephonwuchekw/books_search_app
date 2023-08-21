import { CustomFilter, Hero, RouterMounting, SearchBar } from "@/components";
import BookCard from "@/components/BookCard";
import BooksGrid from "@/components/BooksGrid";
import ShowMore from "@/components/ShowMore";
import useAPIRequests from "@/hooks/useAPIRequests";
import { HomeProps, BookProps } from "@/types";

const base_url = "http://localhost:8000/api/v1";
const route = "books";

export default async function Home({ searchParams }: HomeProps) {
  // Fetch API data here

  const books: BookProps[] = []; //success && data ? data.items : [];
  // console.log("Data:", books);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Book Catalogue</h1>
          <p>Explore books</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          {/* <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div> */}
        </div>

        {/* render fetched data */}
        <RouterMounting>
          <BooksGrid searchParams={searchParams} />
        </RouterMounting>
      </div>
    </main>
  );
}

// export async function getServerSideProps() {
//   const searchParams = URLSearchParams;
//   console.log("PARAMS:", searchParams);

//   return {
//     props: {
//       searchParams: searchParams,
//     },
//   };
// }
