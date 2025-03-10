// Array of different letters that will replace the current letter
const letters = [
    {
      title: "A Letter to You",
      body: "Dear dwiti,<br><br>paragraph here"
    },
    {
      title: "I'm Sorry for Everything",
      body: "paragraph"
    },
    {
      title: "I Apologize from the Heart",
      body: "Dear dwiti,<br><br>I made a mistake, and I own it..."
    },
    {
      title: "Special Song for You", // New page with the song
      body: `
        <p>Enjoy this special song just for you:</p>
        <button class="btn-play" onclick="playMusic()">Play Music</button>
        <div id="musicPlayer" style="display: none;">
          <audio controls>
            <!-- Replace with your desired song URL -->
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
            Your browser does not support the audio element.
          </audio>
          <button class="btn-next" onclick="nextLetter()">Next</button>
        </div>`
    }
  ];
  
  let currentLetterIndex = 0;
  
  // Function to change the letter when the Next button is clicked
  function nextLetter() {
    currentLetterIndex++;
    if (currentLetterIndex >= letters.length) {
      currentLetterIndex = 0; // Loop back to the first letter
    }
  
    // Get the current letter data
    const letter = letters[currentLetterIndex];
  
    // Update the letter section with new content
    const letterSection = document.getElementById('letterSection');
    const songSection = document.getElementById('songSection');
  
    if (currentLetterIndex === 3) {
      // If it's the song page, show the song section
      letterSection.style.display = "none";
      songSection.style.display = "block";
    } else {
      // Otherwise, hide the song section and show the letter section
      letterSection.style.display = "block";
      songSection.style.display = "none";
    }
  
    // Update the content of the letter section
    letterSection.innerHTML = `
      <h2>${letter.title}</h2>
      <p>${letter.body}</p>
      <button class="btn-next" onclick="nextLetter()">Next</button>
    `;
  }
  
  // Function to handle the Play Music button
  function playMusic() {
    const musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.style.display = "block"; // Show the music player
  }
  