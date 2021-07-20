const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}



const options = {
  method: 'GET',
  url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception',
  headers: {
    'x-rapidapi-key': '85b41c49e7msh15d7722915937e6p134ab0jsnf9615f398a61',
    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
  }
};
/*
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/

form = document.querySelector('#searchForm');


    
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const searchTerm = form.elements.query.value;
      const res = await axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchTerm}`);
      console.log(res.data);
    })
  
  