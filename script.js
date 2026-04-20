const btnGuardar = document.getElementById("btnGuardar");
const contenedor = document.getElementById("contenedor");
const contador = document.getElementById("contador");

btnGuardar.addEventListener("click", function () {

    const imagen = document.getElementById("imagen").value;
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const cupon = document.getElementById("cupon").value.trim().toUpperCase();

    // VALIDACIONES
    if (!imagen || !titulo || !descripcion || isNaN(valor)) {
        alert("Por favor completa todos los campos correctamente");
        return;
    }

    let precioFinal = valor;

    // CUPÓN
    if (cupon === "DESC50") {
        precioFinal = valor * 0.5;
    }

    // CREAR TARJETA
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${imagen}" alt="producto">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        <p><strong>Precio:</strong> $${precioFinal.toFixed(2)}</p>
        <button>Eliminar</button>
    `;

    // BOTÓN ELIMINAR
    card.querySelector("button").addEventListener("click", function () {
        contenedor.removeChild(card);
        actualizarContador();
    });

    contenedor.appendChild(card);

    actualizarContador();

    // LIMPIAR CAMPOS
    document.getElementById("imagen").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("cupon").value = "";
});

// CONTADOR
function actualizarContador() {
    const total = contenedor.children.length;
    contador.textContent = total + " productos";
}
