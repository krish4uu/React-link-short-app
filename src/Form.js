import React, { useState } from "react";
import { useUrls } from "./url-context";
import { URL_REGEX, API_URL } from "./Utility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Particle from "./Particle";

export default function Form() {
  const [url, setUrl] = useState("");
  const { dispatch, state } = useUrls();
  const urls = state.urls;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUrlValid(url)) {
      fetchShortUrl(url);
      setUrl("");
    } else {
      alert("Please enter correct url");
    }
  };

  const isUrlValid = (url) => {
    return URL_REGEX.test(url);
  };

  const fetchShortUrl = (url) => {
    fetch(`${API_URL}?url=${url}`)
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch({ type: "STORE_URL", url: result.result.short_link });
        },
        (error) => {
          alert(error.error);
        }
      );
  };

  const clearDisplayData = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="main-container">
      <Particle />
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              id="input"
              type="text"
              placeholder="Past url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <input id="button" type="submit" value="Submit" />
        </form>
        <div id="storage-clear-btn">
          {" "}
          <button onClick={clearDisplayData}>Clear storage</button>
        </div>

        {state.urls.length > 0 &&
          urls.map((url, index) => {
            return (
              <div className="data-container">
                <div className="data-wrapper">
                  <h3 className="data-link" key={index}>
                    {url}
                  </h3>
                  <button
                    className="data-button"
                    onClick={() => navigator.clipboard.writeText(url)}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
