import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

// Get the header
var header = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeNavSticky() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// $('.about-us-link').click(function(){$('.about-us').reveal()});

// When the user scrolls the page, execute myFunction
window.addEventListener("scroll", makeNavSticky);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


// To check the scroll position on page load
reveal();

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function topNav() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const files = await imagemin(['images/*.{jpg}'], {
	destination: 'build/images',
	plugins: [
		imageminJpegtran(),
		imageminPngquant({
			quality: [0.6, 0.8]
		})
	]
});

console.log(files);

function SendMail() {
    var contactParams = {
        from_name: document.getElementById("contact-name").value,
        email_id: document.getElementById("contact-email").value,
        company: document.getElementById("contact-company").value,
        role: document.getElementById("contact-role").value,
        message: document.getElementById("contact-message").value

    }

    emailjs.send("service_xz4ojhe", "template_b7e1t6n", contactParams);
}