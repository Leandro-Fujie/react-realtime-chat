const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:5173', // Sem a barra no final
        methods: ['GET', 'POST'], // Métodos permitidos
        allowedHeaders: ['Content-Type'], // Cabeçalhos permitidos
        credentials: true // Se necessário
    }
}); //controle de requisições

const PORT = 3001

io.on('connection', socket => {
    console.log('usuário conectado', socket.id);

    socket.on('disconnect', reason => {
        console.log('Usuário desconectado', socket.id)
    })

    socket.on('set_username', username => {
        socket.data.username = username
        console.log(socket.data.username);
    })

    socket.on('message', text => {
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username
        })
    })
})

server.listen(PORT, () => console.log('Server running...'))