// Arrays of first and last names
const firstNames = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Henry"];
const lastNames = ["Johnson", "Smith", "Brown", "Miller", "Davis", "Garcia", "Lee", "Walker"];

// Function to generate a random name
export function generateRandomName() {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

const greetings = ["Hello", "Hi", "Hey", "Greetings"];
const actions = ["how are you?", "what's up?", "doing today?", "feeling?"];
const emotions = ["Happy", "Excited", "Sad", "Confused", "Surprised"];

// Function to generate a random message
export function generateRandomMessage() {
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
  return `${randomGreeting}! ${randomAction} I'm feeling ${randomEmotion}.`;
}
