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
    } else if(i % 3 === 0){
        myNewDiv.textContent = 'Fizz';
    } else if(i % 5 === 0){
        myNewDiv.textContent = 'Buzz'
    } else {
        myNewDiv.textContent = i;
    }

    mybox.appendChild(myNewDiv);
}