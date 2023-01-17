window.onload = (event) => {

    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
  
      const search = document.querySelector('input[type="text"]').value
  
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then((response) => {
        // console.log(response)
      return response.json()
      }).then((json) => {
        console.log(json, 'this was successful')
        document.querySelector('#name').innerText = json.name
        document.querySelector('#type').innerText = json.types 
        document.querySelector('#ability').innerText = json.ability
      },
      (err) => {
        console.log(err, 'this was an error')
      })
  
    })
  
    
  
  }