const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function() {
  const message = inputField.value;
  inputField.value = '';
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US'
      }
    }
  };
  sessionClient.detectIntent(request)
    .then(responses => {
      const result = responses[0].queryResult;
      console.log(result.fulfillmentText);
      // Display the response in the chat bot interface
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
});
