var data=JSON.parse(localStorage.getItem("products"))||[];
console.log(data);
// document.getElementById("all_products").addEventListener("click",invent);
function invent(data){
    // console.log(data);
    data.forEach(function (el){
        // console.log(el);
    let row=document.createElement("div");
    row.setAttribute("class","row")
    let image=document.createElement("img");
    image.src=el.image;
    console.log(el.image);
    let p1=document.createElement("p");
    p1.innerText=el.type;
    let p2=document.createElement("p");
    p2.innerText=el.desc;  
    let p3=document.createElement("p");
    p3.innerText=el.price; 
    let btn=document.createElement("button") ;
    btn.innerText="remove";
    btn.addEventListener("click",function(ind){
    //     // function myfun(el,ind){
            data.splice(ind,1);
            localStorage.setItem("products",JSON.stringify(data));
            window.location.reload();
    });
    // myfun(ind)
    row.append(image,p1,p2,p3,btn);
    document.getElementById("all_products").append(row);
    })
}
invent(data)
 
