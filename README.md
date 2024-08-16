# IVR Call Task

This project demonstrates how to use the Twilio API to send a personalized IVR (Interactive Voice Response) call. When the recipient presses a button during the call, they receive a personalized interview link.

## Project Structure

```plaintext
.
├── index.js           # Main server file
├── package.json       # Node.js dependencies and scripts
└── README.md          # Project documentation
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your machine.
A Twilio account (free trial available) with a Twilio phone number.
Ngrok installed to expose your local server to the internet.
Installation
Clone the repository or download the project files.

Install dependencies by running:

bash
Copy code
npm install
Create a .env file to store your Twilio credentials (optional, but recommended for security):

bash
Copy code
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
Alternatively, you can directly replace the placeholders in the code with your actual Twilio credentials.

Usage
Step 1: Start the Server
Run the following command to start the server:

bash
Copy code
npm run start
Step 2: Set Up ngrok
Open a new terminal and run:

bash
Copy code
ngrok http 3000
Copy the public URL provided by ngrok (e.g., http://abcd1234.ngrok.io).

Step 3: Update the Twilio Script
Replace the placeholder URL in index.js with your ngrok URL:

javascript
Copy code
url: 'http://your-ngrok-url/voice',  // Replace with actual ngrok URL
Step 4: Make the IVR Call
Run your Twilio script to initiate the call. The call will prompt the recipient to press a button and, based on the input, respond with a personalized interview link.
Step 5: Record and Share
Record a video of the working model, demonstrating the IVR call, the button press, and the link being sent.
Share the video via OneDrive or Google Drive.
Additional Information
Twilio Console: Use the Twilio Console to view logs and monitor the status of your calls.
Error Handling: If you encounter issues, check the ngrok dashboard (usually at http://127.0.0.1:4040) for detailed request logs.