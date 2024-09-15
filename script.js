const getCharacters = async () => {
    const name = document.getElementById('name').value.toLocaleLowerCase()
    const results = document.getElementById('results')
    const urlApi =`http://localhost:4000/characters/${name}`

    try{
     const response = await fetch(urlApi)
     const data = await response.json()
     const template = `
     ${data.map(character =>{
       const {name, status, species,gender, image, origin} = character
       return `<li>
       <img src=${image} alt=${name}
       <h2>${name}</h2>
       <p>status: ${status}</p>
       <p>species: ${species}</p>
       <p> gender: ${gender}</p>
       <p>origin: ${origin}</p>
       </li>`
     }).join("")}
     
     `
      results.innerHTML = template

    } catch{
        console.log("personaje no encontrado")
        results.innerHTML ="Personaje no encontrado "
    }

   
}

getCharacters()