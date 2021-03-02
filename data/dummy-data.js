import ChatMessage from "../models/ChatMessage";
import ChatRoom from "../models/ChatRoom";
import PrivateUser from '../models/PrivateUser';
import PublicUser from '../models/PublicUser';

export const PUBLICUSERS = [
    new PublicUser(1, 'CBS Surf', 'cbs@surf.com', 'password', 'https://images.squarespace-cdn.com/content/v1/5ac621c3a9e0286371486130/1583852107583-R46KVCQNC1JI9BZ402SQ/ke17ZwdGBToddI8pDm48kDtTx1LlPk5SBKUcWqeR7ZJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHL5HH9wretojISqrQuMTHEbaDbh9TdKFrlV9FpoejYgHXwRKnkxJsTvdk5FIL-keU/111_logo.+new.jpg?format=1000w', '', true),
    new PublicUser(2, 'CBS Feminist Society', 'cbs@feminist.com', 'password', 'https://images.squarespace-cdn.com/content/5ac621c3a9e0286371486130/1533580616892-VMYBZPR6G00SSZT2273C/32_logo.png?content-type=image%2Fpng', '', true),
    new PublicUser(3, 'CBS Students', 'cbs@students.com', 'password', 'https://cache.nichehuset.dk/annoncer/jobannoncer/images/annoncoerer/logoer/4059/3853.png', '', true),
]

export const PRIVATEUSERS = [
    new PrivateUser(1, 'Adam', 'adam@yahoo.com', 'password', 'https://images.generated.photos/BsgWr1rGJd2JxZtJ9D2B927ZWjJoaTizNyah7uP8L8M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA5NDQ4NTEu/cG5n.png', 'MSc Medicine', true, [PUBLICUSERS[0]]),
    new PrivateUser(2, 'Cho', 'cho@yahoo.com', 'password', 'https://images.generated.photos/n3fNdBQ5v0_Pkb7bXdo0hRoEalwAIvdtsUaqod1hm-Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4MzY1NjQuanBn.jpg', 'MSc Physics', true, [])
]

export const CHATMESSAGES = [
    new ChatMessage(1, 1, new Date(2021, 1, 1, 20, 10, 1), 'Hello Adam, how can I help you?', PUBLICUSERS[0], PRIVATEUSERS[0], true),
    new ChatMessage(2, 1, new Date(), 'Hey to you too! I need some info regarding surfing.', PRIVATEUSERS[0], PUBLICUSERS[0], false),
    new ChatMessage(3, 2, new Date(2021, 1, 1, 20, 10, 1), 'Get in touch!.', PRIVATEUSERS[0], PUBLICUSERS[2], false),
    new ChatMessage(4, 3, new Date(), 'Ready for a poker night.', PRIVATEUSERS[0], PUBLICUSERS[2], false),
    new ChatMessage(5, 4, new Date(), 'Hey do you have today\'s lecture?', PRIVATEUSERS[1], PRIVATEUSERS[0], true)
];

// The ID of the chatroom = The ChatID of the chatmessages

export const CHATROOMS = [
    new ChatRoom(1, new Date(2021, 0, 1, 2, 0, 0), [PUBLICUSERS[0], PRIVATEUSERS[0]], [PUBLICUSERS[0], PRIVATEUSERS[0]], CHATMESSAGES, true),
    new ChatRoom(2, new Date(2021, 0, 1, 2, 0, 0), [PUBLICUSERS[1], PRIVATEUSERS[0]], [PUBLICUSERS[1], PRIVATEUSERS[0]], CHATMESSAGES, true),
    new ChatRoom(3, new Date(2021, 0, 1, 2, 2, 0), [PUBLICUSERS[2], PRIVATEUSERS[0]], [PUBLICUSERS[2], PRIVATEUSERS[0]], CHATMESSAGES, true),
    new ChatRoom(4, new Date(2021, 0, 1, 2, 2, 0), [PRIVATEUSERS[1], PRIVATEUSERS[1]], [PRIVATEUSERS[1], PRIVATEUSERS[0]], CHATMESSAGES, false)
]