import { books } from "./data/bookData";
import Book from "./Book";
// import EventExamples from "./EventExamples";

const Booklist = () => {
  return (
    <>
      <h1 className="header">Books every developer should read</h1>
      <section className="booklist">
        {/* Uncomment the EventExamples component below to see event handling
        examples */}
        {/* <EventExamples /> */}

        {books.map((book, index) => {
          return <Book key={book.id} {...book} number={index} />;
        })}
      </section>
    </>
  );
};
export default Booklist;

// In this code snippet, the Booklist component is defined as a functional component that renders a list of books. The books data is imported from the bookData.js file and passed as props to the Book component. The Book component is then used to render each book in the list.
