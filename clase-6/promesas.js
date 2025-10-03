function ejemploPromesa(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5){
                resolve("¡Éxito!");
            }else{
                reject(new Error("¡Error!"));
            }
        }, 3000);
    });
}

ejemploPromesa().then((data) =>{    
    console.log(data);
}).catch((error) => {
  console.log(error);  
})
.finally(() =>{
    console.log("Promesa finalizada");
})