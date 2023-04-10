import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [activity, setActivity] = useState("");

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    const url = `http://www.boredapi.com/api/activity/`;
    const res = await fetch(url);
    const data = await res.json();
    setActivity(data);
    console.log(data);
    console.log(res);
  };

  return (
    <div className="App">
      <div className="buttonContainer">
        <h3>{activity.activity}</h3>
        <button className="button" onClick={getActivity}>
          new activity
        </button>
      </div>

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
  );
}

export default App;
