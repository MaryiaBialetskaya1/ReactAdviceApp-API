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
      <h3>{activity.activity}</h3>
      <button onClick={getActivity}>new activity</button>
    </div>
  );
}

export default App;
