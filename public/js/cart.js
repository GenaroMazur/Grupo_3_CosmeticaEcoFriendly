function removeItem(index) {
    if (carrito.length > 1) {
        carrito.splice(index, 1);
        products.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        document.getElementById(`row${index}`).remove();
    } else {
        localStorage.removeItem("carrito");
        products = [];
        setCarritoVacio();
    }
    document.querySelector(".subtotal-sin-env").innerText = `$ ${calcularTotal(
        products
    )}`;
    document.querySelector(".precio-final").innerText = `$ ${calcularTotal(
        products
    )}`;
}

function setCarritoVacio() {
    cartRows.innerHTML = `
    <tr>     
        <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes productos en el carrito</div></td>
    </tr>            
    `;
}
function vaciarCarrito() {
    localStorage.removeItem("carrito");
}

function calcularTotal(products) {
    return products.reduce(
        (acum, product) => (acum += product.price * product.quantity),
        0
    );
}

let cartRows = document.querySelector(".cartRows");
let products = [];

if (localStorage.carrito && localStorage.carrito != "[]") {
    carrito = JSON.parse(localStorage.carrito);
    carrito.forEach((item, index) => {
        fetch(`/api/products/${item.id}`)
            .then((res) => res.json())
            .then((product) => {
                if (product) {
                    cartRows.innerHTML += `
                <tr class="td"id="row${index}">
                <td class="td-name">${product.nameProduct}</td>
                <td class="td">$ ${product.price}</td>
                <td class="td"><button type="button" id="botonMenos">-</button>${item.quantity}<button type="button" id="botonMas">+</button></td>
                <td class="td">$ ${parseFloat(
                        product.price * item.quantity,
                        2
                    ).toFixed(2)}</td>
                  <td><button class="btn btn-danger btn-sm" onclick=removeItem(${index})><i class="fas fa-trash"></i></button></td>
              </tr>            
              `;
                    products.push({
                        productId: product.id,
                        nameProduct: product.nameProduct,
                        price: product.price,
                        quantity: item.quantity,
                    });
                } else {
                    carrito.splice(index, 1);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                }
            })
            .then(() => {
                document.querySelector(".subtotal-sin-env").innerText = `$ ${calcularTotal(
                    products
                )}`;
                document.querySelector(".precio-final").innerText = `$ ${calcularTotal(
                    products
                )}`;
            });
    });
} else {
    setCarritoVacio();
}

let botonPagar = document.querySelector('.boton-pagar');

botonPagar.addEventListener('click', (e) => {
    if (localStorage.carrito && localStorage.carrito != "[]") {
        redirection();
    } else {
        e.preventDefault();
    }
});

function redirection() {
    location.href = '/';
    vaciarCarrito();
}