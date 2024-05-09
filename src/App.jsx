import { useEffect, useState } from 'react';
import './App.css';
import fetchData from '../getImage';

function App() {

  const [photo, setPhoto] = useState("")
  let ignore = false;

  useEffect(()=>{
    fetchData(25).then(result =>{
      if (!ignore) setPhoto(result)
    })
    return () => {
      ignore = true;}
  },[])
 
  return (
    <>
    <img src={photo.url} alt="{photo.id}"/>
    </>
    
  );
}

export default App;
