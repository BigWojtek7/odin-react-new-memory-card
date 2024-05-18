export default async function GetImg() {
  const initial = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=25');
  const initialJson = await initial.json();

  const detailsData = initialJson.results.map(async (i) => {
    const preFetchData = await fetch(i.url);
    return preFetchData.json();
  });

  const photos = (await Promise.all(detailsData))
    .filter((data) => data.id % 2 && data.id !== 3)
    .map((data) => ({
      id: data.id,
      url: data.sprites.other['official-artwork'].front_default,
      title: data.name,
    }));
  return photos;
}

// for (let i = pikachuNumber; i < pikachuNumber + imgNumber; i += 1) {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, {
//     mode: 'cors',
//   });
//   const imgData = await response.json();
//   promises.push(imgData)

// };

// const photos = (await Promise.all(promises)).map(data => ({
//   id: data.id,
//   url: data.sprites.other['official-artwork'].front_default,
//   title: data.name
// }))
// return photos

// }

// return photos;

// for (let i = pikachuNumber; i < pikachuNumber + imgNumber; i += 1) {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, {
//     mode: 'cors',
//   });
//   const imgData = await response.json();
//   const photo = {
//     id: i,
//     url: imgData.sprites.other['official-artwork'].front_default,
//     title: imgData.name,
//   };
//   photos.push(photo);
// }

//   return photos;
// }
