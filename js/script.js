// 1. collegamento file html e script;
console.log('js ok');

// 3. riempio gli elementi tramite js;

const mybox = document.getElementById('mybox');
for(let i=0; i<50; i++){
    const myNewDiv = document.createElement('div');
    myNewDiv.classList.add('myNewDiv');
    myNewDiv.textContent = Div i + 1;
    mybox.appendChild(myNewDiv);
}