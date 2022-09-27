let menos = document.querySelectorAll("i.fa-solid.fa-minus");
let mas =  document.querySelectorAll("i.fa-solid.fa-plus");
let cantidad =  document.querySelectorAll("#numero");

mas.forEach((element,index)=>{
    cantidad[index].value=0

    mas[index].addEventListener("click",()=>{
        cantidad[index].value<100? cantidad[index].value++:"" ;
    }) 
    
    menos[index].addEventListener("click",()=>{
        cantidad[index].value>0? cantidad[index].value--:"" ;
    })
})

