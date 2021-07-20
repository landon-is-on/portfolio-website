const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${searchTerm}&api_key=E94wh5dgBxoBS27g84A8N9pOK3TWtS8HBBXLmhm1`);
console.log();
const img = document.createElement('IMG');
img.className = 'roverPic';
img.src = res.data.photos [0] .img_src;
document.body.append(img)
})
