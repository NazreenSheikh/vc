import { io } from 'socket.io-client'

export default () => {
    const options = {
        'force new connections': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket']
    }

    return io(import.meta.env.VITE_SOCKET_SERVER_URL, options)
}
