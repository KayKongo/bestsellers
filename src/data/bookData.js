import img1 from "../images/Book_1.jpg";
import img2 from "../images/Book_2.jpg";
import img3 from "../images/Book_3.jpg";
import img4 from "../images/Book_4.jpg";
import img5 from "../images/Book_5.jpg";
import img6 from "../images/Book_6.jpg";
import img7 from "../images/Book_7.jpg";
import img8 from "../images/Book_8.jpg";
import img9 from "../images/Book_9.png";
import img10 from "../images/Book_10.jpg";

export const books = [
  {
    id: 1,
    author: "Mel Robbins",
    title: "The Let Them Theory",
    img: img1,
  },
  {
    id: 2,
    author: "James Clear",
    title: "Atomic Habits",
    img: img2,
  },
  {
    id: 3,
    author: "Brene Brown",
    title: "Daring Greatly",
    img: img3,
  },
  {
    id: 4,
    author: "Mark Manson",
    title: "The Subtle Art of Not Giving a F*ck",
    img: img4,
  },
  {
    id: 5,
    author: "Ryan Holiday",
    title: "The Daily Stoic",
    img: img5,
  },
  {
    id: 6,
    author: "Simon Sinek",
    title: "Start With Why",
    img: img6,
  },
  {
    id: 7,
    author: "Cal Newport",
    title: "Deep Work",
    img: img7,
  },
  {
    id: 8,
    author: "Angela Duckworth",
    title: "Grit: The Power of Passion and Perseverance",
    img: img8,
  },
  {
    id: 9,
    author: "Malcolm Gladwell",
    title: "Outliers",
    img: img9,
  },
  {
    id: 10,
    author: "Yuval Noah Harari",
    title: "Sapiens: A Brief History of Humankind",
    img: img10,
  },
];

// Purpose: To store the data of the books that will be displayed on the website. This data is imported into the Booklist component and passed as props to the Book component. The Book component then uses this data to render the book information on the webpage. This separation of data from the component helps in keeping the code organized and makes it easier to update or modify the book information in the future.
