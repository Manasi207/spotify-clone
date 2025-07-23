const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://shazam-core.p.rapidapi.com/v1/search/multi?offset=0&search_type=SONGS_ARTISTS&query=metallica");
xhr.setRequestHeader("x-rapidapi-host", "shazam-core.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "81f6f3cd00mshed2fe9b292fe80fp18d6c2jsna5bb62815862");

// xhr.send(data);const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=POP&country_code=DZ");
// xhr.setRequestHeader("x-rapidapi-host", "shazam-core.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "81f6f3cd00mshed2fe9b292fe80fp18d6c2jsna5bb62815862");

// xhr.send(data);


// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://shazam-core.p.rapidapi.com/v2/artists/details?artist_id=136975");
// xhr.setRequestHeader("x-rapidapi-host", "shazam-core.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "81f6f3cd00mshed2fe9b292fe80fp18d6c2jsna5bb62815862");

// xhr.send(data);