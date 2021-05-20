interface ChatMessageInterface {
    id: string;
    chatId: string;
    createdDate: number;
    message: string;
    userFrom: string;
    userTo: string | false;
    read: boolean;
}

export type { ChatMessageInterface };

class ChatMessage implements ChatMessageInterface {
    id: string;
    chatId: string;
    createdDate: number;
    message: string;
    userFrom: string;
    userTo: string | false;
    read: boolean;

    constructor(id: string, chatId: string, createdDate: number, message: string, userFrom: string, userTo: string | false, read: boolean ) {
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