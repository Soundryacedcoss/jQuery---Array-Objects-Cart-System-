var cart = [];

    var products = [
      { id: 101, name: "Basket Ball", image:'<img src="images/football.png">' , price: 150,quantity:0},
      { id: 102, name: "Football", image: '<img src="images/tennis.png">', price: 120 ,quantity:0},
      { id: 103, name: "Soccer", image: '<img src="images/basketball.png">', price: 110 ,quantity:0},
      { id: 104, name: "Table Tennis", image: '<img src="images/table-tennis.png">', price: 130 ,quantity:0},
      { id: 105, name: "Tennis", image: '<img src="images/soccer.png">', price: 100 ,quantity:0},
    ];
$(document).ready(function(){
    $(".add-to-cart").click(function(e){
        // products[i].quantity+=1;
        var value_div=e.target.getAttribute("value")
        for(var i=0;i<products.length;i++){
            if(value_div==products[i].id){
                products[i].quantity+=1;
                    cart[i]=products[i];
                    display();
                
            }
            // else if(value_div==products[i].id){
            //     console.log(products[i].id)
            //         cart[i]=products[i];
            //         display();
                
            // }
        }
    })
})


function display(){
    
    
    var table ='<table border="1px"><tr><th></th><th>Name</th><th>image</th><th>price</th><th>Quantity</th><th>Delete</th></tr>'
    cart.forEach(element => {
        table+='<tr><td>'+
            element.id+
            '</td><td>'+
            element.name+
            '</td><td>'+
            element.image+
            '</td><td>'+
            element.price+
            '</td><td>'+
            '<button onclick="increse_quantity(\''+element.id+'\')">+</button>'+
            +element.quantity+
            '<button onclick="decrese_quantity(\''+element.id+'\')">-</button>'+
            '</td><td>'+
            '<a href="#" onclick="delete_product(\''+element.id+'\')">delete</a>'+
            '</td></tr>'
          
              
    });
    table+='</table>'
    document.getElementById("p1").innerHTML=table; 
}

function increse_quantity(val){
  for(i=0;i<cart.length;i++){
    if(val==products[i].id){
    products[i].quantity+=1;
    display();
    }
}
}
function decrese_quantity(val){
    for(i=0;i<cart.length;i++){
        if(val==products[i].id && products[i].quantity>1){
            products[i].quantity-=1;
             display();
         }
         else if(products[i].quantity<1){
            cart.splice(i,1);
            display();
         }
  }
}
function delete_product(val){
    console.log(cart)
    console.log(val)
      for(let i=0;i<cart.length;i++){
        if(val==cart[i].id){
            alert("Are you sure??")
            cart.splice(i,1);  
                
        }
      }
      display();
}