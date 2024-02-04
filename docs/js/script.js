
// ------------------------------------------Home Page----------------------------------

// idk how to fix it, maybe later, change pic when mouse on and out
const movepic = document.getElementById('movepic');

movepic.addEventListener('mouseover', () => {
  movepic.classList.add('flipped');
})



// Cake imgs jumping
const cakepics = document.getElementsByClassName('img_product');

for (let i = 0; i < cakepics.length; i++) {
  const cakepic = cakepics[i];

  cakepic.addEventListener('mouseover', () => {
    cakepic.style.transform = 'translateY(-40px)';

    setTimeout(() => {
      cakepic.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        cakepic.style.transform = 'translateY(0)';
      }, 300); 
    }, 300); 
  });
}


// BUTTON STORY move left right side
const story_button = document.getElementById("story_button");

story_button.addEventListener('mouseover', () => {
    story_button.style.transform = 'translateX(-10px)';

    setTimeout(() => {
        story_button.style.transform = 'translateX(20px)';

        setTimeout(() => {
            story_button.style.transform = 'translateX(0)';
        }, 300); // Adjust the delay for the third action as needed
    }, 300); // Adjust the delay for the second action as needed
});





