class ChatRoom {
    constructor(id, createdDate, name, image, chatMessages, isPublicChat) {
        this.id = id;
        this.createdDate = createdDate;
        this.name = name.map(privateUser => ({
                id: privateUser.id,
                name: privateUser.name
            }));
        this.image = image.map(privateUser => ({
                id: privateUser.id,
                image: privateUser.image
            }));
        this.chatMessages = chatMessages.filter(message => message.chatId === id);
        this.isPublicChat = isPublicChat;
        this.lastMessage = this.chatMessages[this.chatMessages.length-1].message;
        this.lastMessageDate = this.chatMessages[this.chatMessages.length-1].createdDate;
    }
}

export default ChatRoom;