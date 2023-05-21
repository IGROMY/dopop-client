export const API_URL = "https://dopop-server.onrender.com"

export const fetchData = (url) =>{
    return new Promise((resolve, reject)=>{
        fetch(url)
            .then(response =>response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}
