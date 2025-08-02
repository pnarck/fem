// API const
const APIURL = "https://api.adviceslip.com/advice";

// Main
document.addEventListener("DOMContentLoaded", function () {
  // Trigger API call on click
  document.querySelector(".card__dice").addEventListener("click", (event) => {
    event.currentTarget.classList.add("card__dice--active");
    // After the animation, reset everything to its default state
    event.currentTarget.addEventListener('animationend', function(event){
      event.currentTarget.classList.remove("card__dice--active");
     });
    refreshAdvice();
  });
  // Refresh on start
  // refreshAdvice();
});

/**
 * Refresh the Advice on the page
 */
async function refreshAdvice() {
  // Get the advice from API
  let advice;
  try {
    advice = await getAdvice();
  } catch {
    console.log("Error during API call");
    return;
  }

  // Refresh the html components
  document.querySelector(".card__id").innerHTML = advice.slip.id;
  document.querySelector(".card__advice").innerHTML = `<q>${advice.slip.advice}</q>`;
}

/**
 * Make the API call to refresh Advice
 */
async function getAdvice() {
  const response = await fetch(APIURL, {cache: 'no-cache'});
  const advice = await response.json();
  return advice;
}
