// Add your code here
function submitData(name, email){
    let userInfo = {name: name, email: email} 
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
        }
return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            let idText = document.createTextNode(object.id)
            let p = document.createElement('p')
            p.append(idText)
            const script = document.querySelector("body")
            script.append(p)
        })
        .catch(function(error){
            let text = document.createTextNode(error.message)
            let pg = document.createElement('p')
            pg.append(text)
            const script = document.querySelector("body")
            script.append(pg)
        })
}