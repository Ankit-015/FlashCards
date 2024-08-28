import { useState } from "react";

function useGeoLocation() {
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, long: pos.coords.longitude });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, error, position, getPosition };
}

function App() {
  const [countClicks, setCountClicks] = useState(0);

  const {
    isLoading,
    error,
    position: { lat, long },
    getPosition,
  } = useGeoLocation();

  function handleClick() {
    setCountClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div className="App">
      <button className="btn-click" onClick={handleClick}>
        Get my position
      </button>
      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && long && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${long}`}
          >
            {lat},{long}
          </a>{" "}
        </p>
      )}
      <p>Your requested positon {countClicks} times</p>
    </div>
  );
}

export default App;
