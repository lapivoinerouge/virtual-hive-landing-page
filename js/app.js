const navbar = document.getElementById("nav-menu");
const activeClassName = "active-class";

let titleNumber = document.getElementsByClassName("nav-title").length;
let activeClass = document.getElementsByClassName(activeClassName).item(0);
let activeTitle = null;


// underline section title
function underlineTitle(title) {
    if (activeTitle != null) {
        activeTitle.style.cssText = "text-decoration: none;";
    }
    title.style.cssText = "color: rgb(241, 163, 89);";
    activeTitle = title;
}

// set section as active
function setActiveSection(section) {
    activeClass.classList.remove(activeClassName);
    section.classList.add(activeClassName);
    activeClass = section;
}

for (let i = 1; i < titleNumber + 1; i++) {

    const section = document.getElementById("section"+i);
    const title = document.getElementById("nav-title"+i);
    
    //event listener for titles on navbar
    title.addEventListener("click", function() {
        setActiveSection(section);
        underlineTitle(this);
        section.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });

    // change active section when scrolled
    window.addEventListener('scroll', function() {
        const sectionTop = section.offsetTop - 300;
        const sectionBottom = sectionTop + section.offsetHeight;
        let windowTop = window.pageYOffset + navbar.offsetHeight;
        if (windowTop > sectionTop && windowTop < sectionBottom) {
            setActiveSection(section);
            underlineTitle(document.getElementById("nav-title" + i));
        };
    });
}