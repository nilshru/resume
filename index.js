var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// --------------------------------------------------------------------------------- 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzE8eHG6U9eNE5MZIYHhJyVW7CDON0FjHVItm__ntDP5gxloDKW6-FnrM5lmZXiUb5W/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You For Contact Me"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
var sidemenu = document.getElementById("sidemenu");

function scrollToTop() {
    window.scrollTo(0, 0);
}


function openmenu() {
    sidemenu.style.top = "-4.7vh";


}
function closemenu() {
    sidemenu.style.top = "-105vh";

}
function closemen() {
    sidemenu.style.top = "-105vh";

}
// --------------------------------------------------------------------------------------------------------
var sidemenu = document.getElementById("sidemenu");
window.addEventListener('load', function() {
    // Add the 'loaded' class to the body element
    document.body.classList.add('loaded');
    function handleResize() {
        if (window.matchMedia('(max-width:630px)').matches) {
          sidemenu.style.position = 'absolute';
        } else {
          sidemenu.style.position = '';
        }
    }
     // Call the handleResize function on page load
  handleResize();

  // Call the handleResize function on window resize
  window.addEventListener('resize', handleResize);
  });
  