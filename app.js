const form = document.querySelector("#searchform");
const inputSearch = document.querySelector("#search");
const img = document.querySelector("#gif");

async function newGif(inputSearch) {
  const url = "http://api.giphy.com/v1/gifs/search";

  const res = await axios.get(url, {
    params: { q: inputSearch, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });

  const results = res.data.data.length;
  const randomNum = Math.floor(Math.random() * results);
  const imgURL = res.data.data[randomNum].images.original.url;

  const square = document.createElement("div");
  square.className = "box";
  square.classList.add("giphs");

  const newImage = document.createElement("img");
  newImage.className = "newImage";

  square.append(newImage);
  newImage.src = imgURL;
  img.append(square);
  form.append(square);

  removeBtn.addEventListener("click", function () {
    square.remove();
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (inputSearch.value) {
    newGif(inputSearch.value);
  }

  inputSearch.value = "";
});
