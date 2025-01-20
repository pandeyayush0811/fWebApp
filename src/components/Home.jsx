import React from "react";

import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id>
        <main>
          <h1>TechStar</h1>
          <p>Solutions To Your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            quam esse dolores est atque a saepe, corporis ratione distinctio
            eius perspiciatis nulla velit maxime alias quidem, soluta, aperiam
            expedita? Quidem provident minus distinctio tempore odit obcaecati
            veniam sint recusandae aspernatur sit saepe dolores, totam magnam
            nihil veritatis laudantium molestias placeat enim assumenda, tempora
            quas quia! Ipsa alias quaerat suscipit atque.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            dignissimos est sed aperiam odit velit, natus quas! Minima alias
            modi excepturi, aspernatur tempora debitis animi quidem veritatis
            repellat? Consequuntur nam provident ab harum sunt velit aliquid quo
            eligendi veniam, natus debitis saepe vitae illum dolorem, magni
            delectus. Nisi ipsum asperiores, exercitationem rem molestiae
            voluptatem iure reprehenderit tenetur eveniet, doloribus tempore.
            ipsum dolor sit amet consectetur adipisicing elit. Laborum vel
            dolore architecto facilis in rem debitis illo voluptatum eos. Dolor
            earum molestiae magni blanditiis velit alias recusandae at placeat
            illum. Blanditiis molestiae, aperiam, voluptatibus cupiditate rem
            illum, fugit eveniet error provident iusto temporibus libero porro
            impedit quo est quidem sit?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
