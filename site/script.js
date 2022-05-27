const body = document.querySelector('body')

function generateColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

document.getElementById('btn-change-color').addEventListener('click', () => {
  body.style.backgroundColor = generateColor()
})
