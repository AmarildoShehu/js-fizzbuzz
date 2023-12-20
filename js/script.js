// 1. collegamento file html e script;
console.log('js ok');

// 3. riempio gli elementi tramite js;

const mybox = document.getElementById('mybox');
for(let i = 1; i <= 50; i++){
    const myNewDiv = document.createElement('div');
    myNewDiv.classList.add('myNewDiv');

    // 4. inserisco la formula per cambiare il nome ai div
    
    if( i % 3=== 0 && i % 5 === 0){
        myNewDiv.textContent = 'FizzBuzz';
        // 5. aggiungo classi per cambiarle il colore
        myNewDiv.classList.add('fizzbuzz');
    } else if(i % 3 === 0){
        myNewDiv.textContent = 'Fizz';
         // 5. aggiungo classi per cambiarle il colore
        myNewDiv.classList.add('fizz');
    } else if(i % 5 === 0){
        myNewDiv.textContent = 'Buzz'
         // 5. aggiungo classi per cambiarle il colore
        myNewDiv.classList.add('buzz');
    } else {
        myNewDiv.textContent = i;
    }

    mybox.appendChild(myNewDiv);
}