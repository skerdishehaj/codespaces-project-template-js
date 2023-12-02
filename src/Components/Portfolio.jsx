/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "the-wild-oasis",
    description:
      "React Course Project: \"The Wild Oasis\" is a small boutique hotel with 8 luxurious wooden cabins . They need a custom-built application to manage everything about the hotel: bookings, cabins and guests. This is the internal application used inside the hotel to check in guests as they arrive.",
    url: "https://github.com/skerdishehaj/the-wild-oasis",
  },
  {
    title: "usePopcorn",
    description:
      "Simple React Project to manage movies watchlist. It uses the Movie Database API to fetch movies and display them in a list. It also allows you to add movies to your watchlist and mark them as watched.",
    url: "https://github.com/skerdishehaj/usePopcorn",
  },
  {
    title: "fast-react-pizza",
    description:
      "Simple React Project to manage a pizza restaurant.",
    url: "https://github.com/skerdishehaj/fast-react-pizza",
  },
  {
    title: "world-wise",
    description:
      "Users can register all places they have visited and see them on a map.",
    url: "https://github.com/skerdishehaj/world-wise",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
