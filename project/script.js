// JavaScript Logic

    // Example challenges
    const challenges = [
      { id: 1, name: "30-Day Push-Up Challenge", description: "Do push-ups every day and track your progress!" },
      { id: 2, name: "30-Day Squat Challenge", description: "Squat every day and build strength!" },
      { id: 3, name: "Running Challenge", description: "Run 5 km every week and track your distance!" }
    ];

    // Check if there are existing challenges in localStorage, otherwise, initialize them
    if (!localStorage.getItem('challenges')) {
      localStorage.setItem('challenges', JSON.stringify(challenges));
    }

    // Render challenges
    function renderChallenges() {
      const challenges = JSON.parse(localStorage.getItem('challenges'));
      const challengeList = document.getElementById('challenge-list');
      const challengeSelector = document.getElementById('challenge-selector');

      challengeList.innerHTML = '';
      challengeSelector.innerHTML = '';

      challenges.forEach(challenge => {
        const challengeDiv = document.createElement('div');
        challengeDiv.classList.add('challenge');
        challengeDiv.innerHTML = `
          <h3>${challenge.name}</h3>
          <p>${challenge.description}</p>
        `;
        challengeList.appendChild(challengeDiv);

        const option = document.createElement('option');
        option.value = challenge.id;
        option.textContent = challenge.name;
        challengeSelector.appendChild(option);
      });
    }

    // Render progress for the user
    function renderProgress(username) {
      const challenges = JSON.parse(localStorage.getItem('challenges'));
      const userProgress = JSON.parse(localStorage.getItem(username)) || {};
      const progressContainer = document.getElementById('progress-container');

      progressContainer.innerHTML = '';
      progressContainer.style.display = 'none';

      challenges.forEach(challenge => {
        if (userProgress[challenge.id]) {
          const progressItem = document.createElement('li');
          progressItem.textContent = `${challenge.name}: ${userProgress[challenge.id]} days completed`;
          progressContainer.appendChild(progressItem);
          progressContainer.style.display = 'block';
        }
      });
    }

    // Handle joining a challenge
    document.getElementById('join-form').addEventListener('submit', function (event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const challengeId = document.getElementById('challenge-selector').value;

      if (!username || !challengeId) {
        alert("Please enter your username and select a challenge!");
        return;
      }

      // Initialize user progress if not already in localStorage
      const userProgress = JSON.parse(localStorage.getItem(username)) || {};
      if (!userProgress[challengeId]) {
        userProgress[challengeId] = 0; // Start with 0 progress
      }

      // Save the user progress to localStorage
      localStorage.setItem(username, JSON.stringify(userProgress));

      // Show user's progress
      renderProgress(username);
      alert(`${username}, you've successfully joined the challenge!`);

      // Clear the input field
      document.getElementById('username').value = '';
    });

    // Initialize the app
    renderChallenges();
