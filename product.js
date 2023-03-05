window.onload=function(){
    alert("warning")
    var vewier = JSON.parse(localStorage.getItem("product"));
    var atdataLS = document.getElementById("showimg");


    
    var array = []
    for (var i = 0; i < vewier.length; i++) {
        array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1><span>${vewier[i].deatls}</span><p>${vewier[i].price}</p><button onclick='addToCart(${JSON.stringify(vewier[i])})'>Add to cart</button></div>`

    }

    atdataLS.innerHTML = array
    
}
function addToCart(pro){
    var products = JSON.stringify(pro);
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    var currentUser = JSON.parse(localStorage.getItem("userEmail"));
    if(currentUser){
        var allUser = [];
        for(var i=0; i<dataFromLS.length;i++){
            if(dataFromLS[i].email===currentUser["current-user-email"]){
                var newObj = dataFromLS[i];
                newObj["cartProducts"] = newObj["cartproducts"] || [];
                newObj["cartProducts"].push(JSON.parse(products));
                allUser.push(newObj)
            }else{
                allUser.push(dataFromLS[i])
            }
        }
        localStorage.setItem("userData",JSON.stringify(allUser));
        alert("product added to cart")
    }else{
        alert("login first to add products add to cart")
    }
}
