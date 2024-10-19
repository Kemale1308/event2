let  buttons = document.querySelectorAll('.shopping-list button');

buttons.forEach(button => {
  let changeStyle = () => {
    button.style.textDecoration = 'line-through';
    button.style.color = 'blue';
    

    button.removeEventListener('click', changeStyle);
  };
  
  button.addEventListener('click', changeStyle);
});


