const url = "http://localhost:6700";

export function latestNews(){
    console.log("Inside the action-latest")
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
    .then((res) => res.json())    
   
    return{
        type:'GET_LATEST',
        payload: output
    }
}

export function articleNews(){
    console.log("Inside the action - article")
    const output = fetch(`${url}/articles?_start=3&_end=10`,{method:'GET'})
    .then((res) => res.json())

    return{
        type:'GET_ARTICLES',
        payload: output
    }
}


