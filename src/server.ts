import express from 'express';

const app = express();

const PORT = 3000;

app.get('/hora',function(req, res) {
  res.send('agora sao 19h47');
})

app.listen(PORT,() => {console.log(`servidor rodando na porta = ${PORT}`,)})