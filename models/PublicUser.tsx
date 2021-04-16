class PublicUser {
    name: string;
    email: string;
    password: string;
    image: string;
    title: string;
    chatNotification: boolean;
    chats: []

    constructor(private id: string, name: string, email: string, password: string, image: string, title: string, chatNotification: boolean, chats: []) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.image = image;
        this.title = title;
        this.chatNotification = chatNotification;
        this.chats = chats;
    }
}

export default PublicUser;
