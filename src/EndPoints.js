
import  {dobro,somar,media,temp, corsimcornao, ingresso, freqCaracter, tabuada, maiorNumero,semaforo, diasDaSemana, fatorial, contarPar} from './Services.js'

import { Router } from 'express'
const server = Router();



server.get('/ping', (req,resp) =>{
    resp.send('pong');
})

server.get('/dobro/:numero' ,(req,resp)=>{
    const numero = Number(req.params.numero);
    const d = dobro(numero)
    

    resp.send({
        dobro: d
    }); 

})

server.get('/somar', (req,resp) => {
    
    let {a,b} =req.body;

    const d = somar(a,b)
    resp.send({
        soma:d
    });
})

server.post('/somar', (req,resp)=> {
    try{
        const{valores:{a,b}} = req.body


    const d = somar(a,b)
    resp.send({
        soma:d
    })
} catch(err){
    resp.status(404).send({
        erro: err.message
    })

}
})

server.post('/temp',(req,resp)=>{
    const a = req.body;

    const d = temp (a);
    resp.send({
        temp:d
    })
})

server.get('/temp/:numero' ,(req,resp)=>{
    const numero = Number(req.params.numero);
    const d = temp(numero)

    resp.send({
        temp: d
    }); 

})

server.post('/media', (req,resp)=>{
    const {a, b, c} = req.body;
    
    const x = media(a, b, c);
    resp.send({
        media: x
    });
})
server.get('/dia2/corsimcornao/:cor', (req,resp)=>{
     const cor = req.params.cor;
     const x = corsimcornao(cor);

     resp.send({
         corsimcornao: x
     });

})
server.post('/dia2/ingresso', (req,resp)=>{
    const {inteira,meia,dia,nacionalidade} = req.body;
    const total = ingresso( inteira,meia,dia,nacionalidade);

    resp.send({
        total: total
    });
})

server.get('/dia2/freqCaracter/:texto/:caracter', (req,resp) =>{
    const{texto, caracter} = req.params;
  
    const freq = freqCaracter(texto, caracter);

    resp.send({
        freq: freq
    });
})

server.post('/tabuada', (req,resp) =>{
    const numero = req.body;
    const x = tabuada(numero);

    resp.send({
        tabuada: x
    });
})

server.post('/dia2/maiorNumero/', (req,resp) =>{
    const numeros = req.body;
    const x = maiorNumero(numeros);

    resp.send({
        maiorNumero: x
    })
})

server.get('/semaforo/:cor' , ( req , resp ) => {

    const {cor} = req.params;
    const d = semaforo(cor)

    resp.send({
        semaforo:d
    })
    

});

server.get('/diasDaSemana/:dia' , (req, resp)=>{
      const {dia} = req.params;

      const c = diasDaSemana(dia)

      resp.send({
          diasDaSemana:c
      })


});

server.post('/fatorial' , (req,resp)=>{
    
    let  num =  Number(req.body.num)

    const res = (fatorial(num));
    resp.send({
        fat:res
    })

})

server.post('/contarPar' , (req,resp)=>{
     let n = Number( req.body.n)
     const res = (contarPar(n));

     resp.send({
         contarPar:res
     })
})







export default server;