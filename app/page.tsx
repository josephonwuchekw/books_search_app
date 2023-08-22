import { CustomFilter, Hero, RouterMounting, SearchBar } from "@/components";
import BooksGrid from "@/components/BooksGrid";
import { print, sorting } from "@/constants";
import { HomeProps, BookProps } from "@/types";

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
          <div className="home__filter-container">
            <div className="flex flex-wrap gap-2 items-center">
              <span>Print type:</span>{" "}
              <CustomFilter title="print_type" options={print} />
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span>Order by:</span>{" "}
              <CustomFilter title="order_by" options={sorting} />
            </div>
          </div>
        </div>

        {/* render fetched data */}
        <RouterMounting>
          <BooksGrid searchParams={searchParams} />
        </RouterMounting>
      </div>
    </main>
  );
}
