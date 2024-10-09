const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1",
        asciiArt: `
     _____________
    |             |
    |   Floor 1   |
    |_____________|
        `,
    },
    {
        title: "Project 2",
        description: "Description of Project 2",
        asciiArt: `
     _____________
    |             |
    |   Floor 2   |
    |_____________|
        `,
    },
    {
        title: "Project 3",
        description: "Description of Project 3",
        asciiArt: `
     _____________
    |             |
    |   Floor 3   |
    |_____________|
        `,
    },
    {
        title: "Project 4",
        description: "Description of Project 4",
        asciiArt: `
     _____________
    |             |
    |   Floor 4   |
    |_____________|
        `,
    },
    // Add more projects as needed
];

let currentFloor = 0;

const asciiArtElement = document.getElementById('ascii-art');
const greetingElement = document.getElementById('greeting');
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');

function updateFloor() {
    asciiArtElement.classList.add('fade-out');
    greetingElement.classList.add('fade-out');

    setTimeout(() => {
        const project = projects[currentFloor];
        asciiArtElement.textContent = project.asciiArt;
        greetingElement.textContent = `"Welcome to ${project.title}!"`;

        asciiArtElement.classList.remove('fade-out');
        greetingElement.classList.remove('fade-out');
    }, 500);
}


upButton.addEventListener('click', () => {
    if (currentFloor < projects.length - 1) {
        currentFloor++;
        updateFloor();
    }
});

downButton.addEventListener('click', () => {
    if (currentFloor > 0) {
        currentFloor--;
        updateFloor();
    }
});

// Keyboard Navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        upButton.click();
    } else if (event.key === 'ArrowDown') {
        downButton.click();
    }
});

// Sound Script for the Ding Sound
const dingSound = new Audio('https://camisrutt.github.io/my-showcase-space/assets/sounds/elevator-bell.mp3');

function playSound() {
    dingSound.play();
}

upButton.addEventListener('click', () => {
    if (currentFloor < projects.length - 1) {
        currentFloor++;
        updateFloor();
        playSound();
    }
});

downButton.addEventListener('click', () => {
    if (currentFloor > 0) {
        currentFloor--;
        updateFloor();
        playSound();
    }
});

// Initialize the first floor
updateFloor();
