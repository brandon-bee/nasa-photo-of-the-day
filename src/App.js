import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import PhotoTitle from './components/PhotoTitle';
import Photo from "./components/Photo";
import AboutPhoto from "./components/AboutPhoto";

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(resp => {
          setImage(resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    fetchImage();
  }, []);

  return (
    <div className="App">
      <h1>NASA Photo of the Day Generator</h1>
      {
        image && <PhotoTitle image={image} />
      }
      {
        <Photo />
      }
      {
        <AboutPhoto />
      }
    </div>
  );
}

export default App;
