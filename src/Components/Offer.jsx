import React from "react";
import "../styles/offer.css";
import image1 from "../assets/artisan 8.jpg";
import image2 from "../assets/leather material.jpg";
import image3 from "../assets/artisan networking.jpg";
import image4 from "../assets/showcase 8.jpg";

const Offer = () => {
  return (
    <div className="offerWrapper" id="offer">
      <section className="p-top">
        <div className="offerText">
          <h2>What We Offer</h2>
          <p>
            We empower artisans to craft their success. Here are a few of our
            services:
          </p>
        </div>
      </section>

      <div className="container">
        <div className="grid">
          <div className="off-img">
            <img src={image1}></img>
          </div>

          <div className="text1">
            <h2>Advanced Trainings </h2>
            <p>
              Stay at the top of your game with our exclusive Training sessions.
              Learn new techniques, refine your skills and keep your craft as
              sharp as your tools. Trainings are available as webinars or
              in-person workshops.
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="text2">
            <h2>Discounted Materials </h2>
            <p>
              Why pay more when you can pay less? Get your hands on the finest
              materials at unbeatable prices. Thanks to our partnerships with
              leading suppliers, we’re able to offer you the best materials at
              discounted prices.{" "}
            </p>
          </div>

          <div className="off-img">
            <img src={image2}></img>
          </div>
        </div>

        <div className="grid">
          <div className="off-img">
            <img src={image4}></img>
          </div>
          <div className="text1">
            <h2>Product ShowCases</h2>
            <p>
              Your work deserves to be in the spotlight. Display your products
              in our virtual showroom and watch as customers from around the
              world admire and purchase your masterpieces.
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="text2">
            <h2>Networking </h2>
            <p>
              Connect, collaborate and create with fellow artisans who share
              your passion and drive, through our vibrant community of artisans.
              As they say, it’s not what you know but who you know.
            </p>
          </div>

          <div className="off-img">
            <img src={image3}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
