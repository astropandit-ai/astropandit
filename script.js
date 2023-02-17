const dialogflow = require('dialogflow');
const projectId = 'astropandit-fkww'; // Replace with your own project ID
const sessionId = 'astropandit-fkww'; // Replace with a unique session ID
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);
