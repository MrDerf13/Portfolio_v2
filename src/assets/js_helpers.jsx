import CSS from "./css.png";
import ECom from "./ecom.png";
import Firebase from "./firebase.png";
import Git from "./git.png";
import GoogleBooks from "./googlebooks.png";
import HTML from "./html.png";
import Java from "./java.png";
import JavaScript from "./javascript.png";
import MorseConverter from "./morseconverter.png";
import Python from "./python.png";
import Re from "./react.png";
import Sass from "./sass.png";
import SQL from "./sql.png";

export const skills = [
  { name: "css", img: CSS },
  { name: "firebase", img: Firebase },
  { name: "git", img: Git },
  { name: "html", img: HTML },
  { name: "java", img: Java },
  { name: "javascript", img: JavaScript },
  { name: "python", img: Python },
  { name: "react", img: Re },
  { name: "sass", img: Sass },
  { name: "sql", img: SQL },
];

export const projects = [
  {
    name: "E-Commerce",
    img: ECom,
    description:
      "A React app that uses Firebase to mock up the frontend of an e-commerce site.",
    link: "https://github.com/MrDerf13/ECommerceSite",
  },
  {
    name: "Books Search",
    img: GoogleBooks,
    description:
      "A React app that provides a simple and advanced search of the Google Books API and renders fetched data to the page.",
    link: "https://github.com/MrDerf13/GoogleBooksAPISearch",
  },
  {
    name: "Morse Converter",
    img: MorseConverter,
    description:
      "A web app that converts between English and Morse Code in either direction. Project includes unit testing.",
    link: "https://github.com/MrDerf13/morse_converter",
  },
];
