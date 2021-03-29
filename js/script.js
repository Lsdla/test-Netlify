const divListEpisode = document.querySelector('#list-episodes');

fetch("https://rickandmortyapi.com/api/episode")
.then((response)=> {
  return response.json();
})
.then((responJson) => {
  let listEpisode = responJson.results;
  console.log(listEpisode);

  for (const episode of listEpisode) {
    divListEpisode.innerHTML +=
    `<div class="episode-name" id="episode-${episode.id}">${episode.name}</div>`;
    // let elmtEpisode = document.getElementById(`episode-${episode.id}`);
  }
  
  // toute les div avec la class episode-name
  let divEpisode = document.querySelectorAll('.episode-name'); 

  console.log('données en index 0 : ', listEpisode[0]);
  console.log('element HTML en index 0 : ', divEpisode[0]);

  for (let index = 0; index < divEpisode.length; index++) {
    divEpisode[index].addEventListener('click', () => {
      let listUriCharacter = listEpisode[index].characters;
      console.log(listUriCharacter);
      getEpisodeDetails(listUriCharacter, divEpisode[index]);
    });
  }
})
.catch((error) => {
  console.error(error);
})

function getEpisodeDetails(listUriCharacter, divEp) {
  let reponse = [];

  for (const uri of listUriCharacter) {
    fetch(uri).then((resp)=> {
      return resp.json()
    }).then((resp2)=> {
      console.log(resp2.id)
      reponse.push(resp2);
      divEp.innerHTML += `<span> ${resp2.name} </span>`
    })
  }
}