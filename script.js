
const button = document.querySelector("button");

    // Pythagoras' theorem to find the distance e between two points
const distanceBetween = (p1x, p1y, p2x, p2y) => {

    const dx = p1x - p2x;
    const dy = p1y - p2y;

    return Math.sqrt(dx * dx + dy * dy);
};

// Add an event listener to track mouse movements
document.addEventListener("mousemove", (event) => {
    // Calculate the radius based on button size and a minimum of 100px
    const radius = Math.max(
        button.offsetWidth * 0.75,
        button.offsetHeight * 0.75,
        100
    );
    
    //To calculate center position of button where is the exact button is located
    const bx = button.parentNode.offsetLeft
     + button.offsetLeft + button.offsetWidth / 2;
    const by = button.parentNode.offsetTop
     + button.offsetTop + button.offsetHeight / 2;

    //To calculate distance angle between mouse & button center
    const dist = distanceBetween(event.clientX, event.clientY, bx, by);
    const angle = Math.atan2(event.clientY - by, event.clientX - bx);


    //to add left to right & top to bottom movement
    const ox = -1 * Math.cos(angle) *
     Math.max(radius - dist, 0);
    const oy = -1 * Math.sin(angle) *
     Math.max(radius - dist, 0);

    // Rotate and create the visual effect
    button.style.transition = `all 0.1s ease`;
    
    button.style.transform = `translate(${ox}px, ${oy}px) rotateX(${oy / 2}deg) rotateY(${-ox / 2}deg)`;

    // Create a shadow effect based on the movement
    button.style.boxShadow = `0px ${Math.abs(oy)}px ${(Math.abs(oy) / radius) * 40}px rgba(0, 0, 0, 0.15)`;
});
