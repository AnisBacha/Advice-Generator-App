
const adviceID = document.querySelector(".main__adviceId");
const adviceQuote = document.querySelector(".main__advice");
const button = document.querySelector(".main__btn");




button.addEventListener("click", (event) =>{
    event.preventDefault();
    showAdvice();
});


const adviceGenerator = async() => {
    const advice = await fetch("https://api.adviceslip.com/advice");
    const jsonAdvice = await advice.json();
    return jsonAdvice;
};
const showAdvice = async() =>{
    const data = await adviceGenerator();
    
    adviceQuote.textContent = data.slip.advice;
    adviceID.textContent = data.slip.id;
};