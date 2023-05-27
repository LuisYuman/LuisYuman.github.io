document.addEventListener("DOMContentLoaded", function() {
    const agregarCarritoButtons = document.querySelectorAll(".agregarCarrito");
    const vaciarCarritoButton = document.getElementById("vaciarCarrito");
    const comprarButton = document.getElementById("comprar");
    const itemsList = document.getElementById("items");
    const totalParagraph = document.getElementById("total");
    let total = 0;
  
    agregarCarritoButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        const item = event.target.parentNode;
        const nombre = item.getElementsByTagName("span")[0].innerText;
        const precio = parseFloat(item.getElementsByTagName("span")[1].innerText.substring(1));
        agregarItemCarrito(nombre, precio);
        actualizarTotal(precio);
      });
    });
  
    vaciarCarritoButton.addEventListener("click", function() {
      vaciarCarrito();
    });
  
    comprarButton.addEventListener("click", function() {
      comprar();
    });
  
    function agregarItemCarrito(nombre, precio) {
      const li = document.createElement("li");
      li.innerText = `${nombre}: $${precio}`;
      itemsList.appendChild(li);
    }
  
    function actualizarTotal(precio) {
      total += precio;
      totalParagraph.innerText = `Total: $${total.toFixed(2)}`;
    }
  
    function vaciarCarrito() {
      itemsList.innerHTML = "";
      total = 0;
      totalParagraph.innerText = "Total: $0";
    }
  
    function comprar() {
      if (total > 0) {
        alert(`¡Gracias por tu compra! El total a pagar es: $${total.toFixed(2)}`);
        vaciarCarrito();
      } else {
        alert("El carrito está vacío. Por favor, agrega productos antes de comprar.");
      }
    }
  });
  