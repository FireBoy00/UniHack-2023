
const descriptionTextarea = document.getElementById('description');
const wordCountDisplay = document.getElementById('word-count');

descriptionTextarea.addEventListener('input', () => {
  const remainingWords = 800 - descriptionTextarea.value.length;
  wordCountDisplay.textContent = `${remainingWords} ${remainingWords === 1 ? 'word' : 'words'} remaining`;
});
const but1 = document.querySelector('.but1');
const input1 = document.querySelector('#input_skills');
but1.addEventListener('click',()=>{
input1.style.display='block';
but1.style.display = 'none';
})
input1.addEventListener('keyup',(e)=>{
  
  if(e.key === 'Enter'){
    input1.style.display = 'none';
    but1.style.display = 'block';
    const skill = input1.value;
    
  }
})