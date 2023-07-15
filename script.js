// Auto-scroll to a section defined in the taskbar
const offset = -10000;

const about = document.getElementById('scrollLink0');
about.addEventListener('click' , (event) => {
    event.preventDefault();
  const targetElement = document.getElementById("informations");
  const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const offset = targetOffset - 100;
  window.scrollTo({ top: offset, behavior: 'smooth' });
});

const projects = document.getElementById('scrollLink1');
projects.addEventListener('click' , (event) => {
    event.preventDefault();
  const targetElement = document.getElementById("projectsID");
  const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const offset = targetOffset - 100;
  window.scrollTo({ top: offset, behavior: 'smooth' });
});

const cv = document.getElementById('scrollLink2');
cv.addEventListener('click' , (event) => {
    event.preventDefault();
  const targetElement = document.getElementById("CV");
  const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const offset = targetOffset - 100;
  window.scrollTo({ top: offset, behavior: 'smooth' });
});

const contact = document.getElementById('scrollLink3');
contact.addEventListener('click' , (event) => {
  event.preventDefault();
  const targetElement = document.getElementById("contactID");
  const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const offset = targetOffset - 100;
  window.scrollTo({ top: offset, behavior: 'smooth' });
});

// highlight the button of a current section