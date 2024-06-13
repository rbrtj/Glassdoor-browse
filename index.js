const isGlassdoorUrl = window.location.href.includes("glassdoor.com");

const bodyElement = document.body;
const hardshellElement = document.getElementById("ContentWallHardsell");

bodyElement.style.overflow = "visible";

if (hardshellElement) {
  hardshellElement.style.display = "none";
}

window.addEventListener(
  "scroll",
  function (event) {
    event.stopPropagation();
  },
  true
);
