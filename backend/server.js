const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/prices', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Не вдалося отримати дані' });
    }
});

app.listen(5000, () => console.log('Сервер запущено на порту 5000'));
