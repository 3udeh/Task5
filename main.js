const products = [
    "1 car" , 
    "2 bag" , 
    "3 laptop", 
    "4 mouse"  ,
    "5 Headphones",
    "6 monitor" ,
    "7 USB" , 
    "8 Charger" ,
    "9 Chair" , 
    "10 Keyboard" ,
    "11 Smartphone Stand",
    "12 Webcam"
];
const productList = document.getElementById("productList");

for (let i = 0; i < products.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = products[i];
    productList.appendChild(listItem);
  }
