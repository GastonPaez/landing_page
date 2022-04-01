(function(){
    const titleQuestion = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestion)

    titleQuestion.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            // pasa al hermano >h3 hacia >p
            let addPadding = question.parentElement.parentElement;
            // obtiene al padre y este a su padre


            addPadding.classList.toggle('questions__padding--add');
            // pone y saca la clase -> efecto de transicion
            question.children[0].classList.toggle('questions__arrow--rotate');
            // selecciona al hijo -> span y cambia su clase de a rotate para -> cambia los iconos efecto abrir y cerrar

            if(answer.clientHeight === 0){
                height = answer.scrollHeight; // alto minimo para que un elemento se muestre
            }

            answer.style.height = `${height}px`
             

        
        }
        )
    })
})();