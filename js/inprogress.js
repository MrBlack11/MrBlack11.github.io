function typeWriter(element) {
  const arrayText = element.innerHTML.split('');
  console.log(arrayText);
  element.innerHTML = '';
  arrayText.forEach((letter, index) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, 75 * index)
  });
}

const title = document.getElementById('inprogress');
typeWriter(title);

