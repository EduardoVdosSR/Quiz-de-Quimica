const pergunta = document.querySelector(".pergunta")

const textoDaResposta1 = document.querySelector(".resposta-1")
const textoDaResposta2 = document.querySelector(".resposta-2")
const textoDaResposta3 = document.querySelector(".resposta-3")
const textoDaResposta4 = document.querySelector(".resposta-4")

textoDaResposta1.addEventListener('click', () => {
    if (textoDaResposta1.classList.contains('correta')) {
        textoDaResposta1.innerHTML = 'aba'
        textoDaResposta2.innerHTML = 'XXX'
        textoDaResposta3.innerHTML = 'XXX'
        textoDaResposta4.innerHTML = 'XXX'
    }else{
        alert('Errrrrrroooooouuuuu')
    }
})
textoDaResposta2.addEventListener('click', () => {
    if (textoDaResposta2.classList.contains('correta')) {
        textoDaResposta1.innerHTML = 'aba'
        textoDaResposta2.innerHTML = 'vas'
        textoDaResposta3.innerHTML = 'feg'
        textoDaResposta4.innerHTML = 'scr'
    }
})



// textoDaResposta2.addEventListener('click', ()=>{
//     textoDaResposta2.classList.add("correta")
// })
// cliqueNaResposta.forEach(clique => {
//     clique.addEventListener('click', () => {
//         if(textoDaResposta2.classList.contains("correta")){
//             textoDaResposta1.innerHTML = 'XXX'
//             textoDaResposta2.innerHTML = 'XXX'
//             textoDaResposta3.innerHTML = 'XXX'
//             textoDaResposta4.innerHTML = 'XXX'
//         }
//         else{
//             alert('Errrrrrroooooouuuuu')
//         }
//     })
// });

// textoDaResposta1.addEventListener('click', ()=>{
//     console.log('cliquou');
//     if(cliqueNaResposta.classList.contains('resposta-2') == true){
//         textoDaResposta1.innerHTML = '#'
//     }
// })

// textoDaResposta2.addEventListener('click', ()=>{
//     console.log('cliquou');
//     if(cliqueNaResposta.classList.contains('resposta-2') == true){
//         textoDaResposta2.innerHTML = '#'
//     }
// })

// textoDaResposta3.addEventListener('click', ()=>{
//     console.log('cliquou');
//     if(cliqueNaResposta.classList.contains('resposta-2') == true){
//         textoDaResposta3.innerHTML = '#'
//     }
// })

// textoDaResposta4.addEventListener('click', ()=>{
//     console.log('cliquou');
//     if(cliqueNaResposta.classList.contains('resposta-2') == true){
//         textoDaResposta4.innerHTML = 'Blicake'
//    }
// })