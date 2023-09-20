document.addEventListener("DOMContentLoaded", function () {
    const messageHistory = document.getElementById("message-history");
    const userMessageInput = document.getElementById("user-message");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        // Obtenha a mensagem do usuário
        const userMessage = userMessageInput.value.trim();

        if (userMessage === "") {
            return;
        }

        // Adicione a mensagem do usuário ao histórico
        appendMessage("Você: " + userMessage, "user");

        // Verifique se a mensagem é "ping" e responda com "pong" (apenas um teste para verificar se o chatbot está respondendo)
        if (userMessage.toLowerCase() === "ping") {
            setTimeout(function () {
                appendMessage("Chatbot: Pong", "chatbot");
            }, 1000); // Simulando uma resposta do chatbot após 1 segundo
        }

        // Limpe a caixa de entrada do usuário
        userMessageInput.value = "";
    });

    function appendMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");

        // Crie a imagem do ícone com base no remetente
        const icon = document.createElement("img");
        icon.classList.add("message-icon");
        if (sender === "user") {
            icon.src = "img/you.png";
            icon.alt = "Você";
        } else if (sender === "chatbot") {
            icon.src = "img/alice.png";
            icon.alt = "  Chatbot";
        }

        // Crie um elemento para o texto da mensagem
        const textElement = document.createElement("span");
        textElement.textContent = message;

        // Adicione o ícone e o texto da mensagem ao elemento da mensagem
        messageElement.appendChild(icon);
        messageElement.appendChild(textElement);

        messageHistory.appendChild(messageElement);

        // Role para a parte inferior do histórico de mensagens
        messageHistory.scrollTop = messageHistory.scrollHeight;
    }
});
