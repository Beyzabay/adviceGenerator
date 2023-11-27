const choose = document.getElementById('choose');
fetch('https://api.adviceslip.com/advice')
.then(response => {
    return response.json();
})
.then(data => {
    const divAdvice = document.getElementById('advice');
    divAdvice.textContent = data.slip.advice;
    // Data slip id
    const divID = document.getElementById('id');
    divID.textContent = (" ADVICE " + " " + " # " + data.slip.id);
})
.catch(error => {
    console.error("Error !" , error);
})

function chooseAdvice(){
    window.location.reload();
}











































//   fetch('https://api.adviceslip.com/advice')
//   .then(response => {
//     return response.json(); // Response'u JSON formatına dönüştür ve promise olarak döndür
//   })
//   .then(data => {
//     console.log(data.slip.advice); // Veriyi kullan
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error); // Hata durumunda işlem yap
//   });
