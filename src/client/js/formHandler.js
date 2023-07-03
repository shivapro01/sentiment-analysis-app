function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  if (Client.checkUrl(formText)) {
    console.log("::: Form Submitted :::");
    postFormData("http://localhost:8082/api", { url: formText }).then(
      (data) => {
        document.getElementById(
          "polarity"
        ).innerHTML = `Polarity: ${checkPolarityScore(data.score_tag)}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `subjectivity: ${data.subjectivity.toUpperCase()}`;
        document.getElementById(
          "agreement"
        ).innerHTML = `Agreement: ${data.agreement.toUpperCase()}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `confidence: ${data.confidence}`;
        document.getElementById(
          "irony"
        ).innerHTML = `irony: ${data.irony.toUpperCase()}`;
      }
    );
  } else {
    alert("Please enter a valid URL");
  }
}

// Async POST
const postFormData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// function to check the polarity score
const checkPolarityScore = (score) => {
  let scoreValue;
  switch (score) {
    case "P+":
      scoreValue = "Strong Positive";
      break;
    case "P":
      scoreValue = "Positive";
      break;
    case "NEU":
      scoreValue = "Neutral";
      break;
    case "N":
      scoreValue = "Negative";
      break;
    case "N+":
      scoreValue = "Strong Negative";
      break;
    case "NONE":
      scoreValue = "Without Sentiment";
      break;
    default:
      scoreValue = "Error";
  }
  return scoreValue.toUpperCase();
};

export { handleSubmit, checkPolarityScore };
