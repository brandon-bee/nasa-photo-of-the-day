import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(resp => {
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>NASA Photo of the Day Generator</h1>
      <h3>Photo Title</h3>
    </div>
  );
}

export default App;
