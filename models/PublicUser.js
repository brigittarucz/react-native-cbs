class PublicUser {
    constructor(id, name, email, password, image, title, chatNotification, chats) {
        this.id = id;
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
