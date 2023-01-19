window.onload = (event) => {

    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
  
      const search = document.querySelector('input[type="text"]').value
  
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then((response) => {
        // console.log(response)
      return response.json()
      }).then((json) => {
        console.log(json, 'this was sucessful')
          
          document.querySelector('#name').innerText = json.name
          document.querySelector('#types').innerText = json.types[0].type.name
          document.querySelector('#abilities').innerText = json.abilities[0].ability.name
          document.querySelector('#abilities2').innerText = json.abilities[1].ability.name
          // document.querySelector('#sprites').innerHTML = json.sprites.front_default
        
        
         
         
        
      },
      (err) => {
        console.log(err, 'this was an error')
      })

    })}