// Load the OpenAI API key and set up a client
const openai_api_key = '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';
const openai = require('openai')({apiKey: openai_api_key});

// Load the astrology API key and set up a client
const astrology_api_key = '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';
const astrology = require('astrology')({apiKey: astrology_api_key});

// Get a reference to the chat box and the input box
const chat_box = document.getElementById('chat-box');
const input_box = document.getElementById('input-box');

// Add a listener to the send button
document.getElementById('send-button').addEventListener('click', async () => {
  // Get the user's input message
  const message = document.getElementById('user-input').value;

  // Send the user's message to the chat box
  const user_message = document.createElement('div');
  user_message.innerHTML = `You: ${message}`;
  chat_box.appendChild(user_message);

  // Clear the user's input box
  document.getElementById('user-input').value = '';

  // Use OpenAI to generate a response to the user's message
  const response = await openai.completions.create({
    engine: 'davinci',
    prompt: `Astrological prediction for ${message}:`,
    maxTokens: 64,
    n: 1,
    stop: '\n'
  });

  // Send the AI's response to the chat box
  const ai_message = document.createElement('div');
  ai_message.innerHTML = `Astro AI: ${response.choices[0].text}`;
  chat_box.appendChild(ai_message);

  // Use the astrology API to get the user's horoscope
  const horoscope = await astrology.getHoroscope({
    date: new Date(),
    latitude: 37.7749,
    longitude: -122.4194
  });

  // Send the user's horoscope to the chat box
  const horoscope_message = document.createElement('div');
  horoscope_message.innerHTML = `Your horoscope for today: ${horoscope.description}`;
  chat_box.appendChild(horoscope_message);
});
