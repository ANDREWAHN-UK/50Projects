const smallCups = document.querySelectorAll(".cup-small");

const litres = document.getElementById("litres");

const percentage = document.getElementById("percentage");

const remained = document.getElementById("remained");

updateBigCups

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});


// this function updates the small cups, as well as the single large cup
function highlightCups(idx) {
// this bit checks if the cup you are clicking is full, and the one next to it is not full, and decrements by one
  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
    idx --
  }

  // this bit adds and removes the class full as needed
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCups()
}

function updateBigCups(){
  const fullCups = document.querySelectorAll('.cup-small.full').length

  const totalCups = smallCups.length

  if (fullCups === 0){
    percentage.style.visibility = 'hidden'
     percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups/totalCups * 330}px`
    percentage.innerText = `${fullCups/totalCups * 100}% `
  }

  if(fullCups === totalCups){
    remained.style.height=0
    remained.style.visibility='hidden'
   
   
  } else {
    remained.style.visibility='visible'
    litres.innerText = `${2 -(250 * fullCups / 1000)}L remaining`
  }

}