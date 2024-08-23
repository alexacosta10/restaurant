export const pageLoad = (function() {
  const homeButton = document.getElementById('home');
  const menuButton = document.getElementById('menu');
  const aboutButton = document.getElementById('about');
  const content = document.getElementById('content');
  const header = document.createElement('h1');
  function loadHomeTab() 
  {
    content.replaceChildren();
    header.textContent = 'The Backyard';
    const welcomePara = document.createElement('p');
    welcomePara.textContent = "The Backyard is a homestyle restaurant where we grill backyard-themed foods in the most scrumptious way."
    content.appendChild((header));
    content.appendChild(welcomePara);
  }
  // Immediately invoke the function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", loadHomeTab);
  // Attach the function to the 'Home' tab's click event
  document.getElementById('home').addEventListener('click', loadHomeTab);
  return {homeButton, menuButton, aboutButton, content, header}
})();