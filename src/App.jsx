import { useEffect, useState } from 'react';
import './App.css';
import GetImg from '../getImage';

function App() {
  const [photos, setPhotos] = useState([])

  const [result, setResult] = useState(0)
  const [bestResult, setBestResult] = useState(0)

  let ignore = false;

  useEffect(()=>{
    GetImg().then(result =>{
      if (!ignore) setPhotos(result)
    })
    return () => {
      ignore = true;}
  },[])

  console.log(photos)
  return (
    <>
    <div className="results">
      <p>Score: {result}</p>
      <p>Best Score: {bestResult}</p>
    </div>
    <div className='cards'>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} width={300} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
