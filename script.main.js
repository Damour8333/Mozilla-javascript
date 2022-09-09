let myHeading =document.querySelector('h1');
console.log(myHeading);
myHeading.textContent ='Hello,World!' 
let myParagraphe=document.querySelector('p');
console.log(myParagraphe);
myParagraphe.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deleniti expedita blanditiis? Est iste sit temporibus dignissimos nulla voluptate at facilis quo repellat. Rerum, sequi dicta. Soluta ullam minus itaque earum dolore quidem ipsum voluptatem eius in nihil modi possimus maxime architecto, assumenda placeat omnis perspiciatis aliquid a quae minima incidunt? Nihil praesentium ullam quae repudiandae possimus quia quas voluptates assumenda dolore, voluptatibus ea labore architecto qui non dolor consequatur neque molestias animi quos ducimus laudantium deserunt, mollitia, numquam tempore? Consectetur nesciunt recusandae necessitatibus delectus at est illum commodi, sequi sint tempore eaque, tempora iste iusto cupiditate quod quisquam rerum vitae molestiae quos ducimus reiciendis. Eum dicta ea inventore reiciendis.'
myHeading.textContent ='Hello, World !';



let iceCream = 'chocolat';
if (iceCream === 'chocolat'){
    alert("J'adore la glace au chocolat !");
    
}else{
    alert("Ooooh, mais j'aurais préféré au chocolat ");
}


function multiply(num1,num2){
    let result=num1*num2;
    return result;
}
multiply(5,2);
console.log(multiply(5,10));
console.log(multiply(7,2));
console.log(multiply(4,10));




const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Nombre de clics : ${event.detail}`;
});


let myImage = document.querySelector('img');
