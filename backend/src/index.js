const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');


const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack10:omnistack@cluster0-tqvpe.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(routes);
// Metodos HTTP: GET, POST, PUT , DELETE

// Tipos de parametros:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração, remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB(não-relacional)



server.listen(3333);