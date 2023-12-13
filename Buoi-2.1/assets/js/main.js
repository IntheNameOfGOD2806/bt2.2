const API = 'https://fakestoreapi.com/products';

// C1: Call API

let callApi = () => {

  let response = axios.get(API);
  // console.log(response);

  response
    .then((res) => {
      // console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    });
}

callApi();


// C2: Call API Async/await

let callApiUrl = async() => {
  try {
    // Code tra ve thanh cong
    let response_1 = await axios.get(API);
    console.log(response_1.data);
  } catch (error) {
    // That bai
    console.log(error);
  }
}

callApiUrl();
