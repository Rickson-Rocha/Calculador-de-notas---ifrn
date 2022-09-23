
const calcular =  document.querySelector('#calcular')
function principal (){
    const primeiro_bm = document.querySelector('#primeiro_bm')
    const segundo_bm = document.querySelector('#segundo_bm')
    const resultado = document.querySelector('#resultado')
    if(primeiro_bm.value !='' && segundo_bm.value!=''){
       const calculo = media(primeiro_bm.value,segundo_bm.value)
       resultado.innerHTML =`RESULTADO:<br>
       Situação:${situacao(calculo)} <br> Média: ${calculo}` 
    }else{
        resultado.innerHTML = 'preencha os campos acima para efetuar o calculo'
    }
}
calcular.addEventListener('click',principal);

function media(n1,n2){
    const calc = (n1*2 +n2*3)/5

    return calc
}
function situacao(media){
    const msg =['Aprovado','Prova final','Reprovado']
    if(media>=60)return[msg[0]];
    if(media<60 && media>=20)return[msg[1]];
    if(media<20)return[msg[2]];
}
function mfd1(md,naf){
   const calculo = (md+naf)/2
   return calculo;
}
function  mdf2(naf,n2){
    const calculo = (2*naf + 3*n2)/5
    return calculo
}
function mdf3(n1,naf){
    const calculo = (2*n1 +3*naf)/5
    return calculo
}