import express from 'express';

const app = express();
app.use(express.json())
const PORT = 3000;

// visivel no navegador é o método GET
app.get('/hora',function(req, res) {
  res.json({horaAtual:'agora sao 19h47'});
})
// POST

app.post('/soma', (request,response)=>{
  // const {val1,val2} = request.params
  // const {q1,q2} = request.query
  const {v1,v2} = request.body
  console.log(v1,v2)
  const somatorio = v1 + v2
  response.json({resultado:somatorio})


})
// PUT
app.put('')

// DELETE
app.delete('')

app.listen(PORT,() => {console.log(`servidor rodando na porta = ${PORT}`,)})

/**
 * https://www.skyscanner.com.br
 * /transporte
 * /passagens-aereas
 * /nat
 * /saoa
 * /230906
 * /230913
 * /?adultsv2=1&
 * cabinclass=economy
 * &childrenv2=
 * &inboundaltsenabled=false
 * &outboundaltsenabled=false
 * &preferdirects=false
 * &qp_prevScreen=HOMEPAGE
 * &ref=home
 * &rtn=1
 */