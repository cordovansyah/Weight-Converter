//Grams
document.getElementById('lbsInput').addEventListener('input', function(e){
  let lbs = e.target.value;
  document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
})

//Kilograms
document.getElementById('lbsInput').addEventListener('input', function(e){
  let lbs = e.target.value;
  document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
})

//Ounces
document.getElementById('lbsInput').addEventListener('input', function(e){
  let lbs = e.target.value;
  document.getElementById('ozOutput').innerHTML = lbs * 16;
})
