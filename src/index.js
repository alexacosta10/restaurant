import { pageLoad } from "./page-load";
import "./styles.css";

pageLoad.menuButton.addEventListener('click', function() 
{
  (function loadMenuTab()
  {
    pageLoad.content.replaceChildren();
    pageLoad.header.textContent = 'Menu';
    pageLoad.content.appendChild((pageLoad.header));
  })()
});

pageLoad.aboutButton.addEventListener('click', function() 
{
  (function loadAboutTab()
  {
    pageLoad.content.replaceChildren();
    pageLoad.header.textContent = 'About';
    pageLoad.content.appendChild((pageLoad.header));
  })()
});





