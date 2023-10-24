const majorArcana = [/* List of major arcana cards */];
    { name: "The Fool", imageURL: "fool.jpg" },
];
const minorArcana = [/* List of minor arcana cards */];
    { name: "Ace of Swords", imageURL: "ace-of-swords.jpg" },
];

function ensureNoDuplicates(selectedCards, cardToCheck) {
    return !selectedCards.some(card => card.name === cardToCheck.name);
}

function determineOrientation() {
    return Math.random() < 0.5 ? "upright" : "reversed";
}

function getRandomCard(cards) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards.splice(randomIndex, 1)[0];
}

function drawTarotCards() {
    const selectedCards = [];
    const cardContainer = document.getElementById("card-container");

    // Define your array of tarot cards with properties
    const tarotCards = [
        { name: "Card1", imageURL: "image1.jpg" },
        { name: "Card2", imageURL: "image2.jpg" },
        { name: "Card3", imageURL: "image3.jpg" },
        // Add more tarot cards with their image URLs
    ];

    while (selectedCards.length < 3) {
        const cardToDraw = getRandomCard(tarotCards);
        cardToDraw.orientation = determineOrientation();
        selectedCards.push(cardToDraw);
    }

    // Add animation to flip the cards
    selectedCards.forEach((card, index) => {
        const cardElement = document.getElementById(`card${index + 1}`);
        cardElement.classList.add(card.orientation);
    });

    // Replace the card images in the HTML with selected cards
    selectedCards.forEach((card, index) => {
        const cardElement = document.getElementById(`card${index + 1}`);
        const imageElement = cardElement.querySelector("img");
        imageElement.src = card.imageURL;
    });
}
