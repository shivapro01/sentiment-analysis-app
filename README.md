# Sentiment Analysis Application

This is a sentiment analysis application that analyzes the sentiment of text from a given URL. It uses the MeaningCloud Sentiment Analysis API to perform the sentiment analysis.

### Live Link - [Click Here](https://sentimentanalysis-sk.netlify.app/)

![Screenshot](https://github.com/shivapro01/sentiment-analysis-app/assets/119949395/402b2cd2-c1c2-4c1a-9bfb-cb94c83fb257)


## Features

- Enter a URL and submit to analyze the sentiment of the text from the webpage.
- The application displays the polarity, subjectivity, agreement, confidence, irony and some part of the text.
- The application provides different sentiment labels: Strong Positive, Positive, Neutral, Negative, Strong Negative, and Without Sentiment.
- The application uses Express.js as the server framework.
- The client-side code is written in JavaScript, HTML, and CSS.
- The application is responsive and mobile-friendly.

## Prerequisites

To run this application locally, you need to have the following:

- Node.js and NPM installed on your machine.
- A MeaningCloud API key. You can sign up for a free API key on the [MeaningCloud website](https://www.meaningcloud.com/developer/sentiment-analysis).

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/sentiment-analysis-app.git
   ```

2. Navigate to project directory

   `cd sentiment-analysis-app`

3. Install the dependencies :

   `npm install --legacy-peer-deps`

## Usage

1. Build the project :

   `npm run build-prod`

2. Start the server :
   `npm run start`
3. Open your web browser and visit `http://localhost:8080`
4. Enter any web url in the input field and click submit.
5. The results are displayed below.

## Configuration

Make a .env file in the root directory and enter in the following format
`API_KEY=your-api-key`

Note: No spaces and quotes should be present in the key.

## Dependencies

- express js
- MeaningCloud API key
- Node fetch
- dotenv

## License & Copyright

**© Udacity - Modified By Shiva Karka**
