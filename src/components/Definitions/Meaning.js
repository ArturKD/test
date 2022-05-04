import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import "./Meaning.css";

const Meaning = () => {
  const selectedMeaning = useSelector((state) => state.meaning.meanings);
  const loading = useSelector((state) => state.meaning.requestInProgress);
  const error = useSelector((state) => state.meaning.error);
  if (loading == true) {
    return <Loader />;
  }
  if (error !== null) {
    return <Error />;
  }
  return (
    <div className="Definition">
      {selectedMeaning.length > 0 ? (
        <div key={selectedMeaning}>
          <h1>
            <b>Word: </b>
            {selectedMeaning[0].word}
          </h1>
          <h2>
            <b>Phonetic: </b>
            {selectedMeaning[0].phonetic}
          </h2>
          <audio
            src={
              selectedMeaning[0].phonetics[0] &&
              selectedMeaning[0].phonetics[0].audio
            }
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              alignSelf: "center",
              height: "54px",
            }}
            controls
          >
            Your browser does not support audio.
          </audio>
          {selectedMeaning[0].origin && (
            <p>
              <b>Origin: </b>
              {selectedMeaning[0].origin}
            </p>
          )}
          {selectedMeaning.map((item) =>
            item.meanings.map((singleMean, index) => (
              <div key={index} className="single-mean">
                <p>Part of speech: {singleMean.partOfSpeech}</p>
                <b>Definitions: </b>
                {singleMean.definitions.map((def) => (
                  <div key={def.definition}>
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        - {def.definition}
                        <ul>
                          {def.example && (
                            <li>
                              <b> Example: </b>
                              {def.example}
                            </li>
                          )}
                          {def.synonyms.length > 0 && (
                            <li>
                              <b> Synonyms: </b>
                              {def.synonyms.map((syn) => `${syn}, `)}
                            </li>
                          )}
                          {def.antonyms.length > 0 && (
                            <li>
                              <b> Antonyms: </b>
                              {def.antonyms.map((ant) => `${ant}, `)}
                            </li>
                          )}
                        </ul>
                      </li>
                    </ul>
                  </div>
                ))}
                <hr style={{ backgroundColor: "white", width: "100%" }} />
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="home">
          <h1>Please search for a word.</h1>
        </div>
      )}
    </div>
  );
};

export default Meaning;
