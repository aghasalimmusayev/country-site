import BASE_URL from "./url.js";

let data = []
let getData = async function(){
    try {
        let response = await fetch(BASE_URL) 
        if(!response.ok){
            throw new Error("API-da problem var")
        }
        data = await response.json();
        return data;
    }
    catch{
        console.error(`error message: ${error}`)
    }
}

export default getData;