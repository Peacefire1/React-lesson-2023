import Books from "./components/books";
import { BookContextProvider } from "./contexts/BookContext";
import { DATA } from "./data/data";

export default function BooksList() {
  return (
    <div>
      <BookContextProvider>
        <Books />
      </BookContextProvider>
    </div>
  );
}
