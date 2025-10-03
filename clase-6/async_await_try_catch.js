import { ejemploPromesa } from "./promesas.js";

async function ejemploAsyncAwait() {
    try{
        const data = await ejemploPromesa();
        const data2 = await ejemploPromesa();
        const data3 = await ejemploPromesa();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

ejemploAsyncAwait()