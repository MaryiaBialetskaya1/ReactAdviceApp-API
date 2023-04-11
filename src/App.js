import "./App.css";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import video from "./video.mp4";
import React from "react";

const { useLayoutEffect, useRef } = React;

function App() {
  const app = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".svgOne", {
        duration: 2,
        y: 100,
        yPercent: -100,
      });
      gsap.from(".svgTwo", {
        duration: 2,
        y: 200,
        yPercent: -100,
        delay: 0.7,
      });
      gsap.from(".svgThree", {
        duration: 2,
        y: 300,
        yPercent: -100,
        delay: 1,
        ease: "bounce.out",
      });
      gsap.from(".title", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
      });
      gsap.from(button.current, {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        ease: "elastic",
      });
    }, app);
    return () => ctx.revert();
  }, []);

  const [activity, setActivity] = useState("");

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    const url = `http://www.boredapi.com/api/activity/`;
    const res = await fetch(url);
    const data = await res.json();
    setActivity(data);
  };

  return (
    <div className="App" ref={app}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="buttonContainer">
        <h3 className="title">{activity.activity}</h3>
        <button ref={button} className="button" onClick={getActivity}>
          new activity
        </button>
      </div>
      <div className="wrap">
        <div className="container">
          <svg
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
            className="svgOne"
          >
            <path
              className="pathOne"
              d="M0, 100 C150, 200 350,
                0 500, 100 L500, 00 L0, 0 Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <svg
            className="svgTwo"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              className="pathTwo"
              d="M0, 80 C300, 0 400,
                300 500, 50 L500, 00 L0, 0 Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <svg
            className="svgThree"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              className="pathThree"
              d="M0, 100 C150, 300 350,
                0 500, 100 L500, 00 L0, 0 Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
