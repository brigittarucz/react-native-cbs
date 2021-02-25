class ChatMessage {
    constructor(id, chatId, createdDate, message, user, read) {
        this.id = id;
        this.chatId = chatId;
        this.createdDate = createdDate;
        this.message = message;
        this.user = user;
        this.read = read;
    }
}

export default ChatMessage;