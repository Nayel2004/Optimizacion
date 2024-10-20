const productosEnCarrito=JSON.parse(localStorage.getItem("productos-en-carrito")),contendorCarritoVacio=document.querySelector(".carrito-vacio"),contenedorCarritoProductos=document.querySelector(".carrito-productos"),contenedorCarritoAcciones=document.querySelector(".carrito-acciones"),contenedorCarritoComprado=document.querySelector(".carrito-comprado");let botonesEliminar=document.querySelectorAll(".carrito-producto-eliminar");const botonVaciar=document.querySelector(".carrito-acciones-vaciar"),contenedorTotal=document.querySelector(".carrito-acciones-total"),botonComprar=document.querySelector(".carrito-acciones-comprar"),botonesCategorias=document.querySelectorAll(".boton-menu");function cargarProductosCarrito(){productosEnCarrito&&0<productosEnCarrito.length?(contendorCarritoVacio.classList.add("disabled"),contenedorCarritoProductos.classList.remove("disabled"),contenedorCarritoAcciones.classList.remove("disabled"),contenedorCarritoComprado.classList.add("disabled"),contenedorCarritoProductos.innerHTML="",productosEnCarrito.forEach(a=>{const b=document.createElement("div");b.classList.add("carrito-producto"),b.innerHTML=`
            <img class="carrito-producto-imagen" src="${a.imagen}" alt=${a.titulo}"">
                        <div class="carrito-producto-titulo">
                            <small>Titulo</small>
                            <h3>${a.titulo}</h3>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small>Cantidad</small>
                            <p>${a.cantidad}</p>
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>$${a.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>$${a.precio*a.cantidad}</p>
                        </div>
                        <button class="carrito-producto-eliminar" id="${a.id}"><i class="bi bi-trash-fill"></i></button>                 
        
        `,contenedorCarritoProductos.append(b)})):(contendorCarritoVacio.classList.remove("disabled"),contenedorCarritoProductos.classList.add("disabled"),contenedorCarritoAcciones.classList.add("disabled"),contenedorCarritoComprado.classList.add("disabled")),actualizarBotonesEliminar(),actualizartotal()}cargarProductosCarrito();function actualizarBotonesEliminar(){botonesEliminar=document.querySelectorAll(".carrito-producto-eliminar"),botonesEliminar.forEach(a=>{a.addEventListener("click",eliminardelCarrito)})}function eliminardelCarrito(a){const b=a.currentTarget.id,c=productosEnCarrito.find(a=>a.id===b);productosEnCarrito.splice(c,1),cargarProductosCarrito(),localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito))}botonVaciar.addEventListener("click",vaciarCarrito);function vaciarCarrito(){productosEnCarrito.length=0,localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito)),cargarProductosCarrito()}function actualizartotal(){const a=productosEnCarrito.reduce((a,b)=>a+b.precio*b.cantidad,0);contenedorTotal.innerText=`${"Total: $ "+a}`}botonComprar.addEventListener("click",comprarCarrito);function comprarCarrito(){productosEnCarrito.length=0,localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito)),contendorCarritoVacio.classList.add("disabled"),contenedorCarritoProductos.classList.add("disabled"),contenedorCarritoAcciones.classList.add("disabled"),contenedorCarritoComprado.classList.remove("disabled")}