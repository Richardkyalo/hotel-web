// app.js

const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash access key
const query = 'restaurant';

// Function to fetch image from Unsplash
async function fetchImage() {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}`);
    const data = await response.json();
    return data.urls.full;
}

// Function to set the fetched image as background
async function setBackground() {
    try {
        const imageUrl = await fetchImage();
        const heroSection = document.getElementById('hero');
        heroSection.style.backgroundImage = `url(${imageUrl})`;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

// Call the function to set the background image
setBackground();
