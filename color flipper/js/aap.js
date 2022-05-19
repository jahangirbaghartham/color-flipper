const colors = ["green","red","blue","rgba(133,122,200)","brown","yellow"];
const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click' , function(){
  // get random name between 0 - 4;
  randomname = getRendomName();
  console.log(randomname);

  document.getElementById('boddy').style.backgroundColor = colors[randomname];
  color.textContent = colors[randomname];
});

function getRendomName(){
  return Math.floor(Math.random() *colors.length);
}


