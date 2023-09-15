// Função para validar o formulário
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault()
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value

  if (name && email) {
    alert(`Formulário enviado:\nNome: ${name}\nEmail: ${email}`)
  } else {
    alert("Por favor, preencha todos os campos.")
  }
})

// Função para navegar de volta no histórico
document.getElementById("navButton").addEventListener("click", function () {
  window.history.back()
})

// Função para obter a geolocalização do usuário
document.getElementById("geoButton").addEventListener("click", function () {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      alert(`Sua localização:\nLatitude: ${latitude}\nLongitude: ${longitude}`)
    })
  } else {
    alert("Geolocalização não está disponível no seu navegador.")
  }
})
