let form=document.querySelector('form')
let input=document.querySelector('input')
let temp=document.querySelector('.temp')
let place=document.querySelector('.place')
let datetime=document.querySelector('.date')
let condition=document.querySelector('.condition')
let conimage=document.querySelector('.condition-image img')
form.addEventListener('submit',function(e){
    e.preventDefault();
    let value=input.value;
    // console.log(value)
    let apiUrl='https://api.weatherapi.com/v1/current.json?key=7aeed2d2f88e46d0912154014231812&q='+value+'&aqi=no'
    fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    temp.innerText=data.current.temp_c;
    place.innerText=data.location.name;
    datetime.innerText=data.current.last_updated;
    condition.innerText=data.current.condition.text;
    let imgSrc=data.current.condition.icon;
    conimage.src="https:"+imgSrc;
  })
  .catch(error => {
    alert('Try Again with Correct Spelling')
    console.error('Error:', error);
  });
})
