class ChatMessage {
    constructor(id, chatId, createdDate, message, userFrom, userTo, read ) {
        this.id = id;
        this.chatId = chatId;
        this.createdDate = createdDate;
        this.message = message;
        this.userFrom = userFrom;
        this.userTo = userTo;
        this.read = read;
    }
}

export default ChatMessage;