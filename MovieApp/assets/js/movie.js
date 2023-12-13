// API server
const API_URL = 'http://localhost:3001/movie';

// API duong danh anh
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

/* Truy cap phan tu */
let rowMovie = document.querySelector(".row-js");

/* Get API */
let getMovie = async (url,page,itemsPerPage) => {
  // console.log(url);
  let response = axios.get(url);
  let res_1 = await response;

  // console.log(res_1.data);
  return showMovie(res_1.data,page,itemsPerPage);
};

getMovie(API_URL,1,4);


let showMovie = (data, page ,itemsPerPage) => {
  // Tính chỉ số của phần tử đầu tiên và phần tử cuối cùng trên từng trang
  let startIndex = (page - 1) * itemsPerPage;
  let endIndex = page * itemsPerPage;
  let totalPage = Math.ceil(data.length / itemsPerPage);

  let listMovie = data.slice(startIndex, endIndex); // Lấy dữ liệu cho từng trang

  let HTML = ``;
  listMovie.forEach((value, index) => {

    HTML = HTML + `
    <div class="col-md-3 col-sm-6 col-12">
    <div class="box-movie">
      <img src=${IMG_PATH + value.poster_path} alt="images short movie">
      <div class="movie-content">
        <div class="movie-info">
          <div class="movie-title">
            ${value.title}
          </div>
          <div class="movie-start ${showRating(value.vote_average)}"> 
            ${value.vote_average}
          </div>
        </div>
      </div>
      <div class="movie-overview">
        <h3>Overview</h3>
        <p>${value.overview}</p>
      </div>
    </div>
  </div>
    `;
  });
  HTML = HTML + `<nav aria-label="Page navigation example">
  <ul class="pagination">`;
  for(let i = 1; i <= totalPage; i++){
    HTML = HTML + `<li onClick="getMovie( '${API_URL}', ${i}, ${itemsPerPage})" class="page-item"><a class="page-link" href="#">${i}</a></li>`
  }
  HTML = HTML + `</ul>
  </nav>`

  rowMovie.innerHTML = HTML; 


};


// Hien thi danh gia
let showRating = (vote) => {
  // console.log(vote);
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "organe";
  } else {
    return "red";
  }
}
