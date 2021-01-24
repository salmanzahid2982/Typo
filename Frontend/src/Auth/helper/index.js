//var localpath="http://localhost:8000/api/"
var Herokupath="api/"

export const signUp=user=>{
    //console.log(user);
    return fetch(`${Herokupath}/signup`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
    },
        body:JSON.stringify(user)
    })
    .then(response=>{return response.json()
    })
    .catch(err=>{console.log(err)})
}