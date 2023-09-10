import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <style jsx>
        {`
          .container {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex: 1;
            padding: 6rem;
          }
          .about-content {
            text-align: center;
          }
          .about-content h1 {
            margin-bottom: 2rem;
          }
          .about-content p {
            padding: 1rem 8rem;
            margin-bottom: 2rem;
            font-size: 18px;
          }
          .about-content button {
            padding: 0.4rem;
            font-size: 1rem;
            width: 120px;
            border: 1px solid black transparent;
            border-radius: 0.5rem;
          }
        `}
      </style>
      <div className="container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolorem laudantium doloribus quaerat atque, placeat odit itaque
            voluptas maiores? Commodi, dolores. Beatae fugiat, quae doloribus
            adipisci sint nulla esse consequuntur?
          </p>
          <button>Learn More</button>
        </div>
        <div>
          <Image
            src="/hunterHome1.webp"
            alt="about-image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default About;
