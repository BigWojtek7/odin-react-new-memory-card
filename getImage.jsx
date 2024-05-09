
export default async function GetImg() {
  // const [photos, setPhotos] = useState([])
  const photos = []
  const imgNumber = 12;
  const pikachuNumber = 25;
  
    for (let i = pikachuNumber; i < pikachuNumber + imgNumber; i += 1) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i}/`,
        { mode: 'cors' }
      );
      const imgData = await response.json();
      const photo = {
        id: i,
        url: imgData.sprites.other['official-artwork'].front_default,
        title: imgData.name,
      };
      photos.push(photo)
    }
  
  
  return photos;
}
