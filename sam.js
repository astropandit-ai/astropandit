const chatArea = document.getElementById('chat-area');
chatArea.innerHTML += '<div class="message user-message">' + message + '</div>';
chatArea.innerHTML += '<div class="message bot-message">' + result.fulfillmentText + '</div>';
