const form = document.querySelector('#formulario')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const primeiro_bm = document.querySelector('#1bms').value
    console.log(primeiro_bm)
    const segundo_bm = document.querySelector('#2bms').value
    const  prova_final = document.querySelector('#Pvbms').value
})

function GeraResultado(msg){
 const resultado = document.querySelector('#resultado')
 resultado.innerHTML = '';
 const p = criaParagrafo() 
}
function criaParagrafo(){
    const p = document.createElement('p')
   return p;
}