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

// Router
(function () {

    var app = angular.module('sampleApp',['ngRoute']);
    
    app.config(function ($routeProvider){
        $routeProvider
            .when('/internal-team',{
                templateUrl:'/our-teams-pages/internal-team.html'
            })
            .when('/prof-dev',{
                templateUrl:'/our-teams-pages/prof-dev.html'
            })
            .when('/aca-dev',{
                templateUrl: '/our-teams-pages/aca-dev.html'
            })
            .when('/consulting',{
                templateUrl: '/our-teams-pages/consulting.html'
            })
            .otherwise({ redirectTo:'/'});
    });
    })();

    // HeaderController to highlight the active tabs
(function () { 

    var headerController = function ($scope, $location) 
    { 
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
    };
    
    angular.module('sampleApp').controller('HeaderController',headerController);
    }());