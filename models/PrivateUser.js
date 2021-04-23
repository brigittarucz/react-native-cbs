class PrivateUser {
    constructor(id, name, email, password, image, title, chatNotification, additionalPublicIdentity) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.image = image;
        this.title = title;
        this.chatNotification = chatNotification;
        // 0 / 1 / 2 / 3
        this.additionalPublicIdentity = additionalPublicIdentity;
    }
}

export default PrivateUser;
