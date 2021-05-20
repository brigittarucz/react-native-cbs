class PrivateUser {
    id: string;
    name: string;
    email: string;
    password: undefined;
    image: string;
    title: string;
    chatNotification: boolean;
    additionalPublicIdentity: number | [];

    constructor(id: string, name: string, email: string, password: undefined, image: string, title: string, chatNotification: boolean, additionalPublicIdentity: number | []) {
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
