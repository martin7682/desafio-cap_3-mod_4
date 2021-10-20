const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {}
  const listaEl = document.querySelector(".lista");
  const lisEls = listaEl.querySelectorAll("li");
    
  setTimeout(()=>{
    for(let el of lisEls){
      el.remove();
    }
  }, 3400);

  setTimeout(()=>{
    for(let item of cosasQueAprendimos){
      const newLiEl = document.createElement("li");
      newLiEl.textContent = item.tema;
      const clasesAgregadas = item.class || "item"
      newLiEl.classList.add(clasesAgregadas);
     
      listaEl.appendChild(newLiEl);
    }
  }, 3000);

main();
