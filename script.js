function togglemode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")

    img.setAttribute("alt", "Imagem de perfil 2")

  } else {
    img.setAttribute("src", "./assets/avatar.png")

    img.setAttribute("alt", "Icone de perfil")

  }
}
