var weatherBody = document.getElementById("weatherBody");


function searchCityName(keysearch) {
  async function logMovies(keysearch) {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=5f5aa66b833443b29bd80701240405&q=" +
        keysearch
    );
    movies = await response.json();
    console.log(movies.location.name);

    weatherBody.innerHTML = `<h2>${movies.location.name}اسم المدينة</h2>
        <h3>${movies.location.country}اسم البلد</h3>
        <h3>${movies.current.temp_c}درجة الحرارة</h3>
         <h3>${movies.current.condition.text}</h3>
       <h3>${movies.location.localtime}التاريخ و الوقت</h3>`;
  }
  logMovies(keysearch);
}
// كل ال جاى ده تجارب
// ----------------------------------

// weatherBody.innerHTML = `<h2>${movies}</h2>
//         <h3>name countryاسم البلد</h3>
//         <h3>temp-cel درجة الحرارة</h3>
//         <h3>حالة الطقس مشمس</h3>`;

// ---------------

// ده مهم علشان العرض
//  <h3>${movies.current.country.condition.text}</h3>


// ------------------------
// function searchCityName(keysearch) {
//   console.log(keysearch);
// }

// تجربة عمل Object جو اوبجيكت و انادى عليهم
// var family={ ismail:{aya:{boy:"abdelrhaman"}} , mohamed :"heba" ,ibrahim : "ilham" , yassmen :"mohamedhossny"}
// console.log(family.ismail.aya.boy);
