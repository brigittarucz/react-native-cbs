import ChatMessage from "../models/ChatMessage";
import User from "../models/User";
import ChatRoom from "../models/ChatRoom";

export const USERS = [
    new User(1, 'CBS Surf', 'cbs@surf.com', 'password', 'https://images.squarespace-cdn.com/content/v1/5ac621c3a9e0286371486130/1583852107583-R46KVCQNC1JI9BZ402SQ/ke17ZwdGBToddI8pDm48kDtTx1LlPk5SBKUcWqeR7ZJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHL5HH9wretojISqrQuMTHEbaDbh9TdKFrlV9FpoejYgHXwRKnkxJsTvdk5FIL-keU/111_logo.+new.jpg?format=1000w', '', true),
    new User(2, 'CBS Feminist Society', 'cbs@feminist.com', 'password', 'https://images.squarespace-cdn.com/content/5ac621c3a9e0286371486130/1533580616892-VMYBZPR6G00SSZT2273C/32_logo.png?content-type=image%2Fpng', '', true),
    new User(3, 'CBS Students', 'cbs@students.com', 'password', 'https://cache.nichehuset.dk/annoncer/jobannoncer/images/annoncoerer/logoer/4059/3853.png', '', true),
    new User(4, 'Adam', 'adam@yahoo.com', 'password', 'https://images.generated.photos/BsgWr1rGJd2JxZtJ9D2B927ZWjJoaTizNyah7uP8L8M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA5NDQ4NTEu/cG5n.png', 'MSc Medicine', true)
];

export const CHATMESSAGES = [
    new ChatMessage(1, 1, new Date(2021, 1, 1, 20, 10, 1), 'Hello Adam, how can I help you?', USERS[0], true),
    new ChatMessage(2, 1, new Date(), 'Hey to you too! I need some info regarding surfing.', USERS[4], false),
    new ChatMessage(2, 2, new Date(2021, 1, 1, 20, 10, 1), 'Get in touch!.', USERS[4], false),
    new ChatMessage(2, 3, new Date(), 'Ready for a poker night.', USERS[4], false),
];

export const CHATROOMS = [
    new ChatRoom(1, new Date(2021, 0, 1, 2, 0, 0), 'CBS Surf', 'https://images.squarespace-cdn.com/content/v1/5ac621c3a9e0286371486130/1583852107583-R46KVCQNC1JI9BZ402SQ/ke17ZwdGBToddI8pDm48kDtTx1LlPk5SBKUcWqeR7ZJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHL5HH9wretojISqrQuMTHEbaDbh9TdKFrlV9FpoejYgHXwRKnkxJsTvdk5FIL-keU/111_logo.+new.jpg?format=1000w', CHATMESSAGES),
    new ChatRoom(2, new Date(2021, 0, 1, 2, 0, 0), 'CBS Students', 'https://images.squarespace-cdn.com/content/5ac621c3a9e0286371486130/1533580616892-VMYBZPR6G00SSZT2273C/32_logo.png?content-type=image%2Fpng', CHATMESSAGES),
    new ChatRoom(3, new Date(2021, 0, 1, 2, 2, 0), 'CBS Poker', 'https://cache.nichehuset.dk/annoncer/jobannoncer/images/annoncoerer/logoer/4059/3853.png', CHATMESSAGES)
]