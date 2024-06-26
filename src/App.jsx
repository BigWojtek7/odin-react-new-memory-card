import { useEffect, useState } from 'react';
import './styles/App.css';
import GetImg from './getImage';

function App() {
  const [photos, setPhotos] = useState([]);
  const [photoId, setPhotoId] = useState([]);

  const [result, setResult] = useState(0);
  const [bestResult, setBestResult] = useState(0);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    GetImg().then((result) => {
      setPhotos(result);
    });
    return () => {
      setPhotos([]);
    };
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function handleClick(e) {
    const currentValue = e.currentTarget.dataset.value;

    if (photoId.includes(currentValue)) {
      if (result > bestResult) setBestResult(result);
      setResult(0);
      setPhotoId([]);
    } else {
      setResult(result + 1);
      setPhotoId((photoId) => [...photoId, currentValue]);
    }

    setPhotos(shuffleArray(photos));

    if (currentValue === '25') document.querySelector('.my-audio').play();
  }
  return (
    <>
      <div className="header">
        <div className="title">
          <h1>Pokemon Memory Card Game</h1>
          <p>Click only one time on the same picture and get point</p>
        </div>
        <div className="score">
          <p>Score: {result}</p>
          <p>Best Score: {bestResult}</p>
        </div>
      </div>
      <div className="cards">
        {photos.map((photo) => (
          <div key={photo.id} onClick={handleClick} data-value={photo.id}>
            <img src={photo.url} alt={photo.title} width={300} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
      <audio className="my-audio" src="/pikachu.ogg" type="audio/ogg"></audio>
    </>
  );
}

export default App;
