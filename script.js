document.addEventListener("DOMContentLoaded", () => {
    let index = 0; // Current slide
    const slides = document.querySelectorAll(".slide");
    const sequenceDisplay = document.getElementById("sequence");
    const totalSlides = slides.length;

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.style.display = i === n ? "block" : "none";
        });
        updateSequenceDisplay(n);
    }

    function updateSequenceDisplay(n) {
        if (sequenceDisplay) {
            sequenceDisplay.textContent = `${n + 1} / ${totalSlides}`; // Update sequence display (1-based index)
        }
    }

    // Next/previous controls
    function changeSlides(n) {
        index += n;
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        showSlide(index);
    }

    // Initial display
    showSlide(index);

    // Assign the functions to the arrows
    document.querySelector(".prev").addEventListener("click", () => changeSlides(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlides(1));
});
