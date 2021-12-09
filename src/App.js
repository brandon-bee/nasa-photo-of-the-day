import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import PhotoTitle from './components/PhotoTitle';
import Photo from "./components/Photo";
import AboutPhoto from "./components/AboutPhoto";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: #AED4E6;
  background-color: #8C2155;
`

const StyledBody = styled.div`
  background-color: #AF7595;
`

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
    <StyledBody className="App">
      <StyledTitle>NASA Photo of the Day Generator</StyledTitle>
      {
        image && <PhotoTitle image={image} />
      }
      {
        image && <Photo image={image} />
      }
      {
        image && <AboutPhoto image={image} />
      }
    </StyledBody>
  );
}

export default App;
