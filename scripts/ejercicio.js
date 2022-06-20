let ejecutarCodigo = () => {
  let elemento = document.getElementById("titulo1")
  elemento.textContent = "Álbum de fotos"

  let arreglo = document.getElementsByClassName("text-muted")
  elemento = arreglo.item(1)
  elemento.innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span >'
  let a2 = document.getElementsByTagName("p")
  a2[2].setAttribute("class", "d-none")
};

ejecutarCodigo();

const imagenesLista = [
  {
    src: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    alt: 'camino'
  },
  {
    src: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    alt: 'energia'
  },
  {
    src: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    alt: 'papá'
  },
  {
    src: "https://images.unsplash.com/photo-1653896775515-ae85244f58a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "camara"
  },
  {
    src: "https://images.unsplash.com/photo-1653865507270-731da1afface?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "sofa"
  },
  {
    src: "https://images.unsplash.com/photo-1653883094445-9a53d0e9ac2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "cueva"
  },
  {
    src: "https://images.unsplash.com/photo-1653908836785-b519864cca16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "techo"
  },
  {
    src: "https://images.unsplash.com/photo-1653919523364-1e7e221d2917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "moto"
  },
  {
    src: "https://images.unsplash.com/photo-1653917215257-40db75a62dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "montaña"
  }
]

let cards = document.querySelectorAll(".card")

cards.forEach((card, i) => {

  const svg = card.querySelector("svg")
  const img = document.createElement("img")

  img.setAttribute("src", imagenesLista[i].src)
  img.setAttribute("alt", imagenesLista[i].alt)
  
  svg.parentNode.replaceChild(img, svg)
  
})