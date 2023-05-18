function changeColor() {
  var title = document.querySelector('h1');
  var currentColor = title.style.color;
  
  if (currentColor === 'blue') {
    title.style.color = 'red';
  } else {
    title.style.color = 'blue';
  }
}
