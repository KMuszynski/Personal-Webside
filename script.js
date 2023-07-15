// Auto-scroll to a section defined in the taskbar
const offset = -10000;
const infoPos = calculatePos("informations");
const projectsPos = calculatePos("projectsID");
const cvPos = calculatePos("CV");
const contactPos = calculatePos("contactID");

function calculatePos(id) {
  const targetElement = document.getElementById(id);
  const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const offset = targetOffset - 100;
  return offset;
}

const about = document.getElementById('scrollLink0');
about.addEventListener('click' , (event) => {
  event.preventDefault();
  let offset = calculatePos("informations");
  window.scrollTo({ top: offset+10, behavior: 'smooth' });
});

const projects = document.getElementById('scrollLink1');
projects.addEventListener('click' , (event) => {
    event.preventDefault();
    let offset = calculatePos("projectsID");
  window.scrollTo({ top: offset+10, behavior: 'smooth' });
});

const cv = document.getElementById('scrollLink2');
cv.addEventListener('click' , (event) => {
    event.preventDefault();
    let offset = calculatePos("CV");
  window.scrollTo({ top: offset+10, behavior: 'smooth' });
});

const contact = document.getElementById('scrollLink3');
contact.addEventListener('click' , (event) => {
  event.preventDefault();
  let offset = calculatePos("contactID");
  window.scrollTo({ top: offset+10, behavior: 'smooth' });
});

// highlight the button of a current section
const button1 = document.getElementById("about");
const button2 = document.getElementById("projects");
const button3 = document.getElementById("cv");
const button4 = document.getElementById("contact");

//button1.classList.add('button-activated');

window.addEventListener('scroll', (event)=>{
    const scrollPosition = window.scrollY || window.pageYOffset;
    if(scrollPosition >= infoPos && scrollPosition < projectsPos)
    {
        button1.classList.add('button-activated');

        button2.classList.remove('button-activated');
        button3.classList.remove('button-activated');
        button4.classList.remove('button-activated');
    }
    else if(scrollPosition >= projectsPos && scrollPosition < cvPos)
    {
        button2.classList.add('button-activated');

        button1.classList.remove('button-activated');
        button3.classList.remove('button-activated');
        button4.classList.remove('button-activated');
    }
    else if(scrollPosition >= cvPos && scrollPosition < contactPos)
    {
        button3.classList.add('button-activated');

        button1.classList.remove('button-activated');
        button2.classList.remove('button-activated');
        button4.classList.remove('button-activated');
    }
    else if(scrollPosition >= contactPos)
    {
        button4.classList.add('button-activated');

        button1.classList.remove('button-activated');
        button2.classList.remove('button-activated');
        button3.classList.remove('button-activated');
    }
    else
    {
        button1.classList.remove('button-activated');
        button2.classList.remove('button-activated');
        button3.classList.remove('button-activated');
        button4.classList.remove('button-activated');
    }
});