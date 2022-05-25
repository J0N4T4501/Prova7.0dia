


export function somar(a,b){
    return  a +b;
}

export function dobro(a){
    return  a*2;
}

export function media(a,b,c){
    return(a+b+c)/3;
}

export function temp(a){     
    let x = a >= 37;   
    return x;
}

export function tabuada(a){

}

export function corsimcornao(cor){
    let a = cor == "amarelo" || cor == "azul" || cor == "vermelho";
    return a;
}

export function ingresso(inteira,meia,dia,nacionalidade){

    if(nacionalidade.toUpperCase()=='brasileiro'){
        return(inteira+meia)*5
    }
    
    else if(dia.toUpperCase()=='quarta'){
        return(meia+inteira) *14.25;
    }

    else
    return(inteira*28.5) + (meia * 14.25);

   
}

export function freqCaracter(texto, caracter){
 let qtd = 0;
 for(let letra of texto ){
     if(letra==caracter)
     qtd++
 }   
 return qtd; 
}

export function maiorNumero(numeros){
    let a = -1;
    for ( let item of numeros)
    {
        if(item > a)
        {
            a = item;
        }
    }

    return a;
}







