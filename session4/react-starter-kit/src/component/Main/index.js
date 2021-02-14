import React from "react";
// import "./styles.css";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <section className={styles.backgroundSalmon}>
      <div className={styles.box1}>
        <h1 className="mb3">Take your company to the next level</h1>
        <h3 className="mb3">
          Build more efficient and effective organizatioins through IoT, AI and
          mobile workface implementation
        </h3>
        <button>Free trial</button>
      </div>
      <div className="box2">
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Main;
