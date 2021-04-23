class PublicUser {
    name: string;
    email: string;
    password: string;
    image: string;
    title: string;
    chatNotification: boolean;

    constructor(private id: string, name: string, email: string, password: string, image: string, title: string, chatNotification: boolean) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.image = image;
        this.title = title;
        this.chatNotification = chatNotification;
    }
}

export default PublicUser;
