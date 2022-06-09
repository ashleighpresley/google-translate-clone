import { useEffect, useState } from "react";
import axios from "axios";

import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import TextBox from "./components/TextBox";

function App() {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Polish");
  const [languages, setLanguages] = useState(null);

  const getLanguages = () => {
    const options = {
      method: "GET",
      url: "https://google-translate20.p.rapidapi.com/languages",
      headers: {
        "X-RapidAPI-Key": "dbcc677bc6msh31df28e8d9fe4e9p1065c4jsne25d8f6feb56",
        "X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const arrayOfData = Object.keys(response.data.data).map(
          (key) => response.data.data[key]
        );
        setLanguages(arrayOfData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log("languages", languages);

  useEffect(() => {
    getLanguages();
  }, []);

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            style={`input`}
            setShowModal={setShowModal}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            selectedLanguage={outputLanguage}
            style={`output`}
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal && <Modal setShowModal={setShowModal} languages={languages} />}
    </div>
  );
}

export default App;
