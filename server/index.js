const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')))
app.get('/docs/privacy-policy', (req, res) => res.sendFile('/workspace/Modern_ux_website/server/public/privacy.html'))
app.get('/docs/terms-and-conditions', (req, res) => res.sendFile('/workspace/Modern_ux_website/public/terms.html'))
app.listen(3001)