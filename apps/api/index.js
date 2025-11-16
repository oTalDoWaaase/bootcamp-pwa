const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/hello', (req, res) => {
  res.json({ ok: true, msg: 'Hello Bootcamp!' });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
