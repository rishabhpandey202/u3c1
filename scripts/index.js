//store the products array in localstorage as "products"
var array= JSON.parse(localStorage.getItem("products"))|| [];
document.getElementById("add_product").addEventListener("click",formData)
function formData(event){
   event.preventDefault();
    console.log("inside")

    function obj(type,image,desc,price){
        this.type=type;
        this.image=image;
        this.desc=desc;
        this.price=price;
    }
    var type=document.getElementById("type").value;
    var price=document.getElementById("price").value;
    var image=document.getElementById("image").value;
    var desc=document.getElementById("desc").value;
    var getData= new obj(type,image,desc,price);
    
    array.push(getData);
    console.log(array);
    localStorage.setItem("products",JSON.stringify(array))
  

}
formData(event)