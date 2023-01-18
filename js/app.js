window.onload = (event) => {

    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
  
      const search = document.querySelector('input[type="text"]').value
  
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then((response) => {
        // console.log(response)
      return response.json()
      }).then((json) => {
        console.log(json, 'this was sucessful')
          
          doccument.querySelector('#name').innerText = json.Name
          doccument.querySelector('#types').innerText = json.Types
          doccument.querySelector('#abilities').innerText = json.abilities
        
      },
      (err) => {
        console.log(err, 'this was an error')
      })

    })}