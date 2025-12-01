
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

document.addEventListener('DOMContentLoaded', () => {
    const textSection = document.querySelector('.text-section');
    const imageSection = document.querySelector('.image-section');
    const paragraphs = document.querySelectorAll('.text-section p');
    const heading = document.querySelector('.text-section h2');

    const animateText = () => {
        // Trigger the animations
        textSection.style.opacity = 1;
        textSection.style.transform = 'translateY(0)';
        imageSection.style.opacity = 1;
        imageSection.style.transform = 'translateX(0)';
        heading.style.opacity = 1;
        heading.style.transform = 'translateY(0)';

        paragraphs.forEach((p, index) => {
            p.style.opacity = 1;
            p.style.transform = 'translateY(0)';
            p.style.transitionDelay = `${(index + 1) * 0.3}s`; // Slight delay for each paragraph
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateText();
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5 // Adjust threshold as needed
    });

    observer.observe(textSection);
});
document.addEventListener('DOMContentLoaded', () => {
    const educationSection = document.querySelector('.ict-education-section');

    const animateSection = () => {
        educationSection.style.opacity = 1;
        educationSection.style.transform = 'translateY(0)';
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSection();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(educationSection);
});


