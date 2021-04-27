const getChatRooms = (chatrooms, userPublic, userPrivate) => {
    // Filter chatrooms by loggedInUerPrivate and loggedInUerPublic
    var loggedInUserChatRooms = chatrooms.filter(chatroom => (
        chatroom.name[0].id == userPublic.id ||
        chatroom.name[0].id == userPrivate.id ||
        chatroom.name[1].id == userPublic.id ||
        chatroom.name[1].id == userPrivate.id ?
        chatroom : false
    ));

    // Sanitize name and image by loggedInUerPrivate and loggedInUerPublic
    for (var chatroom of loggedInUserChatRooms) {
        if (chatroom.name[0].id == userPublic.id &&
            chatroom.name[1].id == userPrivate.id) {
            chatroom.name = chatroom.name[0].name;
            chatroom.image = chatroom.image[0].image;
        } else if (chatroom.name[1].id == userPublic.id &&
            chatroom.name[0].id == userPrivate.id) {
            chatroom.name = chatroom.name[1].name;
            chatroom.image = chatroom.image[1].image;
        } else {
            if (chatroom.name[0].id == userPublic.id ||
                chatroom.name[0].id == userPrivate.id) {
                chatroom.name = chatroom.name[1].name;
            } else {
                chatroom.name = chatroom.name[0].name;
            }

            if (chatroom.image[0].id == userPublic.id ||
                chatroom.image[0].id == userPrivate.id) {
                chatroom.image = chatroom.image[1].image;
            } else {
                chatroom.image = chatroom.image[0].image;
            }
        }
    }

    return loggedInUserChatRooms
}


const getUsers = async (token) => {
    const response = await fetch(
        "https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=" +
            token,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Could not get user");
    } else {
        var users = await response.json();
        return users;
    }
};


export {getChatRooms,
        getUsers}