// Handle login submission
document.getElementById('loginSubmit').addEventListener('click', () => {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Example: Send a login request to the backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            alert('Login successful');
        } else {
            alert('Invalid username or password');
        }
    });
});

// Handle video upload submission
document.getElementById('uploadSubmit').addEventListener('click', () => {
    const videoFile = document.getElementById('videoFile').files[0];
    const title = document.getElementById('videoTitle').value;
    const description = document.getElementById('videoDescription').value;

    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('title', title);
    formData.append('description', description);

    // Send video upload request to the backend
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => alert(data));
});

// Handle subscription submission
document.getElementById('subscribeSubmit').addEventListener('click', () => {
    const planType = document.getElementById('planType').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardExpiry = document.getElementById('cardExpiry').value;
    const cardCVC = document.getElementById('cardCVC').value;

    fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planType, cardNumber, cardExpiry, cardCVC }),
    })
    .then(response => response.text())
    .then(data => alert(data));
});
