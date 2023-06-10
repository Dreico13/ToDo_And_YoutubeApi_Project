window.addEventListener("load", () => {
  let instanceMain = new Main();
});

class Main {
  constructor() {
    this.key = "AIzaSyAyn581MyHSo2LnR9LkX9jp2z92h9lrdS4";
    this.#apiYoutube();
  }

  #apiYoutube() {
    let search = document.getElementById("buscador");
    let searchButton = document.getElementById("submit");
    //I do a fetch to take the json object of youtube API with the search value that the user search
    searchButton.addEventListener("click",  async () => {
      await fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${search.value}&key=${this.key}&part=snippet&maxResults=5`
      )
        .then((response) => response.json())
        .then((data) => this.#extractInfo(data));
        
    });
    
  }
  
  #extractInfo(jsonYoutube) {

    let contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML='';
    //I create that count variable to iterate the id "play" of the images
    let cont = 1;
    
    jsonYoutube.items.forEach(element => {
      //I foreach the json and I create the elements in my page
      let imagen_titulo = `<div class="col text-center border border-danger overflow-auto">
        <img class="mt-3" type="button" src="${element.snippet.thumbnails.medium.url}" width="280" height="120" id="play`+ cont +`"/>` + "</br>" 
        + `<p class="text-white">${element.snippet.title}</p>
      </div>`;

      contenedor.innerHTML += imagen_titulo;
      cont++;
      
    });

    let play1 = document.getElementById("play1");
    let play2 = document.getElementById("play2");
    let play3 = document.getElementById("play3");
    let play4 = document.getElementById("play4");
    let play5 = document.getElementById("play5");
    /*When I press one of the play buttons this will activate the addEventlistener 
    and I send the json object and the id of the image to the createVideo method*/
    play1.addEventListener('click', () => {
      this.#createVideo(jsonYoutube, "play1");
    });
    play2.addEventListener('click', () => {
      this.#createVideo(jsonYoutube, "play2");
    });
    play3.addEventListener('click', () => {
       this.#createVideo(jsonYoutube, "play3");
    });
    play4.addEventListener('click', () => {
      this.#createVideo(jsonYoutube, "play4");
    });
    play5.addEventListener('click', () => {
      this.#createVideo(jsonYoutube, "play5");
    });

  }

  #createVideo (jsonYoutube, video) {
    let contenedor_video = document.getElementById("contenedor_video");
    let videoId = '';
    let video_element = '';
    //The switch case will reproduce the video that the user selected in the previous method  
    switch (video) {
      case "play1":
        videoId = jsonYoutube.items[0].id.videoId;
        video_element = `<iframe width="300" height="720" src="https://www.youtube.com/embed/${videoId}"></iframe>`;
        contenedor_video.innerHTML = video_element;
        break;
      case "play2":
        videoId = jsonYoutube.items[1].id.videoId;
        video_element = `<iframe width="300" height="720" src="https://www.youtube.com/embed/${videoId}"></iframe>`;
        contenedor_video.innerHTML = video_element;
        break;
      case "play3":
        videoId = jsonYoutube.items[2].id.videoId;
        video_element = `<iframe width="300" height="720" src="https://www.youtube.com/embed/${videoId}"></iframe>`;
        contenedor_video.innerHTML = video_element;
        break;
      case "play4":
        videoId = jsonYoutube.items[3].id.videoId;
        video_element = `<iframe width="300" height="720" src="https://www.youtube.com/embed/${videoId}"></iframe>`;
        contenedor_video.innerHTML = video_element;
        break;
      case "play5":
        videoId = jsonYoutube.items[4].id.videoId;
        video_element = `<iframe width="300" height="720" src="https://www.youtube.com/embed/${videoId}"></iframe>`;
        contenedor_video.innerHTML = video_element;
        break;
      default:
        console.log("Error: The switch-case don't works!")
        break;
    }
  }
  
}
