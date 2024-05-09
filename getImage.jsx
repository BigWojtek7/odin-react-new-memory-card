// import { useEffect, useState } from 'react';

export default async function FetchData(number) {
  // const [photos, setPhotos] = useState([])
  // const photos = []
  // const imgNumber = 12;
  // const pikachuNumber = 25;

  
    // async function fetchData() {
    //   for (let i = pikachuNumber; i < pikachuNumber + imgNumber; i += 1) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${number}/`,
    { mode: 'cors' }
  );
  const imgData = await response.json();
  const photo = {
    id: number,
    url: imgData.sprites.other['official-artwork'].front_default,
    title: imgData.name,
  };
  return photo;
}
    // console.log(photos)
  
  // console.log(photos)
  // return (
  //   <div>
  //     {photos.map((photo) => (
  //       <div key={photo.id}>
  //         <img src={photo.url} alt={photo.title} width={100} />
  //       </div>
  //     ))}
  //   </div>
  // );

