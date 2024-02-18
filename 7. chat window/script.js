const chatMessagesBox = document.getElementsByClassName("chat-list")[0];
const chatInput = document.getElementsByClassName("chat-input")[0];
const button = document.getElementsByClassName("send-button")[0];

function createMessageFromTemplate(
  text,
  name = "vlad the impaler",
  avatar = "user.svg"
) {
  const template = `
    <div class="message-container chat-message">
      <img src="${avatar}" class="icon">
      <div class="text-container">
        <span class="message">${text}</span>
        <span class="name">${name}</span>
      </div>
    </div>
  `;

  const messageContainer = document.createElement("div");
  messageContainer.innerHTML = template;

  return messageContainer;
}

function addChatMessage() {
  if (chatInput.value.trim() === "") {
    return;
  }
  const chatMessage = createMessageFromTemplate(chatInput.value);
  chatMessagesBox.appendChild(chatMessage);
  chatMessage.scrollIntoView();
  chatInput.value = "";
}

function onEnter(event) {
  if (event.key === "Enter") {
    addChatMessage();
  }
}

chatInput.addEventListener("keypress", onEnter);
button.addEventListener("click", addChatMessage);
