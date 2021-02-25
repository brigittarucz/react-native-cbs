import Chat from "../screens/Chat";

class ChatRoom {
    constructor(id, createdDate, name, image, chatMessages) {
        this.id = id;
        this.createdDate = createdDate;
        this.name = name;
        this.image = image;
        this.chatMessages = chatMessages.filter(message => message.chatId === id);
        this.lastMessage = this.chatMessages[this.chatMessages.length-1].message;
        this.lastMessageDate = this.chatMessages[this.chatMessages.length-1].createdDate;
    }
}

export default ChatRoom;