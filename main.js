



let isSpeaking = false; // Track whether the speech synthesis is currently active
    
function readTextAloud() {
   if (isSpeaking) {
       window.speechSynthesis.cancel(); // Stop any ongoing speech
       isSpeaking = false; // Update the state to not speaking
   } else {
       const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span,a, button,span');
       const utterance = new SpeechSynthesisUtterance();

       // Combine text content of selected elements into a single string
       utterance.text = Array.prototype.map.call(textElements, (element) => element.textContent).join(' ');
       utterance.voice = window.speechSynthesis.getVoices()[0]; // Set the voice (default)
       utterance.lang = 'en-US'; // Set language

       // Event listener to update the speaking state when the speech starts or ends
       utterance.onstart = function() {
           isSpeaking = true; // Update state to speaking
       };

       utterance.onend = function() {
           isSpeaking = false; // Update state to not speaking when finished
       };

       // Start speaking
       window.speechSynthesis.speak(utterance);
      }
  }
  const screenReaderButton = document.getElementById('screen-reader-button');
  screenReaderButton.addEventListener('click', readTextAloud)
function mynav() {
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");

    // Toggle navigation menu visibility without changing the bars
    bar.onclick = () => {
        if (nav.style.right === "0%") {
            nav.style.right = "-70%"; // Close the menu
        } else {
            nav.style.right = "0%"; // Open the menu
        }
    }
}

mynav();
document.addEventListener("DOMContentLoaded", function () {
    const animatedSection = document.getElementById('animated-section');
    const animatedContent = document.querySelector('.animated-content');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation: Slide content into view
                animatedContent.style.transform = 'translateX(0)';
                animatedContent.style.opacity = '1';
            } else {
                // Reset animation: Slide content back off-screen
                animatedContent.style.transform = 'translateX(-100%)';
                animatedContent.style.opacity = '0';
            }
        });
    }, {
        threshold: 0.5 // Trigger the animation when 50% of the section is in view
    });

    observer.observe(animatedSection);
});


document.addEventListener("DOMContentLoaded", function () {
    const animatedSection = document.getElementById('animated-section');
    const animatedContent = document.querySelector('.animated-content');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation: Slide content into view
                animatedContent.style.transform = 'translateX(0)';
                animatedContent.style.opacity = '1';
            } else {
                // Reset animation: Slide content back off-screen
                animatedContent.style.transform = 'translateX(-100%)';
                animatedContent.style.opacity = '0';
            }
        });
    }, {
        threshold: 0.5 // Trigger the animation when 50% of the section is in view
    });

    observer.observe(animatedSection);
});

document.addEventListener("DOMContentLoaded", function () { 
    // Select the 'get-involved' section and the cards
    const getInvolvedSection = document.querySelector('.get-involved');
    const cards = document.querySelectorAll('.card');
    const collections = document.querySelectorAll('.collect');

    // Create an observer for the entire section
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the section is in view, animate both cards and images
                cards.forEach(card => {
                    card.classList.add('animate');
                });
                collections.forEach(collect => {
                    collect.classList.add('animate');
                });
            } else {
                // Reset the animation when the section goes out of view
                cards.forEach(card => {
                    card.classList.remove('animate');
                });
                collections.forEach(collect => {
                    collect.classList.remove('animate');
                });
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is in view
    });

    // Observe the section
    sectionObserver.observe(getInvolvedSection);
});


function myheader(){
    let header=document.getElementById("header");
    window.addEventListener("scroll",function(){
        if(window.scrollY>0){
            header.classList.add("active");
        }
        else{
            header.classList.remove("active");
        }
           })
}
myheader();
document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggles = document.querySelectorAll("header ul li");

    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener("click", function() {
            // Close all other dropdowns
            dropdownToggles.forEach(function(otherToggle) {
                if (otherToggle !== toggle) {
                    otherToggle.classList.remove("open");
                }
            });

            // Toggle the clicked dropdown
            toggle.classList.toggle("open");
        });
    });
});
