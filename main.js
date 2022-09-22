
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
        resultado.innerHTML = 'preencha,no mínimo,um campo'
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
    if(media<60&&media>=20)return[msg[1]];
    if(media<20)return[msg[2]];
}