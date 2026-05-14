const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos del cliente
app.use(express.static(path.join(__dirname, '../Client')));

// Datos mock del servidor
const mockData = [
    { id: 1, users: '230', posts: '5000', comments: '1500' },
    { id: 2, users: '230', posts: '5000', comments: '1500' }
];

// Rutas de API
app.get('/api/dashboard', (req, res) => {
    res.json(mockData);
});

app.get('/api/dashboard/:id', (req, res) => {
    const item = mockData.find(d => d.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).json({ error: 'Not found' });
    }
    res.json(item);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Running server at http://localhost:${PORT}`);
});
