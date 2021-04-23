import ChatMessage from "../models/ChatMessage";
import ChatRoom from "../models/ChatRoom";
import PrivateUser from '../models/PrivateUser';
import PublicUser from '../models/PublicUser';

export const USERS = [
    new PublicUser(1, 'CBS Surf', 'cbs@surf.com', 'password', 'https://images.squarespace-cdn.com/content/v1/5ac621c3a9e0286371486130/1583852107583-R46KVCQNC1JI9BZ402SQ/ke17ZwdGBToddI8pDm48kDtTx1LlPk5SBKUcWqeR7ZJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHL5HH9wretojISqrQuMTHEbaDbh9TdKFrlV9FpoejYgHXwRKnkxJsTvdk5FIL-keU/111_logo.+new.jpg?format=1000w', '', true),
    new PublicUser(2, 'CBS Feminist Society', 'cbs@feminist.com', 'password', 'https://images.squarespace-cdn.com/content/5ac621c3a9e0286371486130/1533580616892-VMYBZPR6G00SSZT2273C/32_logo.png?content-type=image%2Fpng', '', true),
    new PublicUser(3, 'CBS Students', 'cbs@students.com', 'password', 'https://cache.nichehuset.dk/annoncer/jobannoncer/images/annoncoerer/logoer/4059/3853.png', '', true),
]

export const CHATMESSAGES = [
    new ChatMessage(1, 1, new Date(2021, 1, 1, 20, 10, 1), 'Hello Adam, how can I help you?', 'QrOmMzhRkZTmXFWzrSqUEcaUUrO2', 3, true),
    new ChatMessage(2, 1, new Date(), 'Hey to you too! I need some info regarding surfing.', 3, 'QrOmMzhRkZTmXFWzrSqUEcaUUrO2', false),
    new ChatMessage(3, 2, new Date(2021, 1, 1, 20, 10, 1), 'Get in touch!.', 4,3, false),
    new ChatMessage(4, 3, new Date(), 'Ready for a poker night.', 4, 3, false),
    new ChatMessage(5, 4, new Date(), 'Hey do you have today\'s lecture?', 5, 4, true)
];

// The ID of the chatroom = The ChatID of the chatmessages

export const CHATROOMS = [
    new ChatRoom(1, new Date(2021, 0, 1, 2, 0, 0), 'CBS Surf', 'https://images.squarespace-cdn.com/content/v1/5ac621c3a9e0286371486130/1583852107583-R46KVCQNC1JI9BZ402SQ/ke17ZwdGBToddI8pDm48kDtTx1LlPk5SBKUcWqeR7ZJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHL5HH9wretojISqrQuMTHEbaDbh9TdKFrlV9FpoejYgHXwRKnkxJsTvdk5FIL-keU/111_logo.+new.jpg?format=1000w', CHATMESSAGES, true),
    new ChatRoom(2, new Date(2021, 0, 1, 2, 0, 0), 'Name 1', 'https://images.squarespace-cdn.com/content/v1/5ac621c3a9e0286371486130/1583852107583-R46KVCQNC1JI9BZ402SQ/ke17ZwdGBToddI8pDm48kDtTx1LlPk5SBKUcWqeR7ZJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHL5HH9wretojISqrQuMTHEbaDbh9TdKFrlV9FpoejYgHXwRKnkxJsTvdk5FIL-keU/111_logo.+new.jpg?format=1000w', CHATMESSAGES, true),
    new ChatRoom(3, new Date(2021, 0, 1, 2, 2, 0), 'Name 2', 'https://images.squarespace-cdn.com/content/v1/5ac621c3a9e0286371486130/1583852107583-R46KVCQNC1JI9BZ402SQ/ke17ZwdGBToddI8pDm48kDtTx1LlPk5SBKUcWqeR7ZJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHL5HH9wretojISqrQuMTHEbaDbh9TdKFrlV9FpoejYgHXwRKnkxJsTvdk5FIL-keU/111_logo.+new.jpg?format=1000w', CHATMESSAGES, true),
    new ChatRoom(4, new Date(2021, 0, 1, 2, 2, 0), 'Name 3', 'https://images.squarespace-cdn.com/content/v1/5ac621c3a9e0286371486130/1583852107583-R46KVCQNC1JI9BZ402SQ/ke17ZwdGBToddI8pDm48kDtTx1LlPk5SBKUcWqeR7ZJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHL5HH9wretojISqrQuMTHEbaDbh9TdKFrlV9FpoejYgHXwRKnkxJsTvdk5FIL-keU/111_logo.+new.jpg?format=1000w', CHATMESSAGES, false)
]