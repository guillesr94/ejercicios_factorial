let resultado=1;
let factorial=10;
let contador=0
while(contador<factorial){
    resultado+=contador*resultado
    contador++;
    if(contador==factorial){
        console.log(resultado)
        break;
    }
}