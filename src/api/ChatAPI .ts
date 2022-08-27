import { HTTPTransport } from "../services/HTTPTransport";
// import BaseAPI ;

const chatAPIInstance = new HTTPTransport();

// export class ChatAPI extends BaseAPI {
//     create() {
//         // Здесь уже не нужно писать полный путь /api/v1/chats/
//         return chatAPIInstance.post('/', { title: 'string' });
//     }

//     request() {
//         // Здесь уже не нужно писать полный путь /api/v1/chats/
//         return chatAPIInstance.get('/full');
//     }
// }