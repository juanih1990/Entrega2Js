let productos = [
    {
        codigo: 300,
        producto: "JUEGO DE MESA Y SILLAS",
        cantidad: 5,
        precio: 5000,
        rubro: "HOGAR",
        borrado: false
    },
    {
        codigo: 299,
        producto: "NOTEBOOK",
        cantidad: 8,
        precio: 300000,
        rubro: "ELECTRONICA",
        borrado: false
    },
    {
        codigo: 298,
        producto: "PANTALON JEAN",
        cantidad: 2,
        precio: 3000,
        rubro: "MODA",
        borrado: false
    },
    {
        codigo: 420,
        producto: "TABLET",
        cantidad: 10,
        precio: 15000,
        rubro: "ELECTRONICA",
        borrado: false
    }
]
let salir=false  //inicializo una variable para salir del menu

/*Nota: la propiedad del objeto borrado = false la cree por que me gusta trabajar de esa forma. cambiandola por true si fue borrada. para el dia de mañana cuando trabaje
con base de datos, hacer lo Mismo y si alguien borra algo sin querer siempre poder recuperar esa informacion */


/* En el sistema el dueño tiene que poder:
   1: Cargar un producto.
   2: Mostrar productos cargados
   3: Buscar un producto en particular.
   4: Filtrar productos. (por precio, por rubro)
   5: Eliminar un producto.  
   6: Salir del menu
*/  
function rubros(){
    let rubro = Number(prompt("Ingrese el rubro: \n1: Hogar \n2: Electronica \n3: Moda \n0: Salir sin realizar cambios"))    
                    if(rubro === 1){
                          rubro= "HOGAR"
                    }else if(rubro === 2){
                          rubro="ELECTRONICA"
                    }else if(rubro === 3){
                          rubro= "MODA"
                    }
                    else{
                        alert("El rubro ingresado no corresponde a ninguno con los trabajados por la empresa, por fabor vuelva a intentar cargarlo")
                    }    
                    if(rubro === "HOGAR" || rubro === "ELECTRONICA" || rubro === "MODA"){
                        return rubro
                    }    
                    
}
 function cargarProducto(codigo){
        if(productos.find((producto)=> producto.codigo == codigo) && productos.find((producto)=> producto.borrado == false)){ //veo si el codigo u id existe
               //si el producto existe le sumo uno a la cantidad
                let position = productos.findIndex((index)  => index.codigo == codigo)   // si existe busco su indice en el array
                let newcant = Number(prompt("Tiene " + productos[position].cantidad + " de " + productos[position].producto + " en existencia. \n Ingrese la cantidad que desea agregar")) 
                productos[position].cantidad = productos[position].cantidad + newcant  // dado el indice en el array le sumo la cantidad que deseo del producto q ya estaba en existencia
        }
        else{
                //si no existe lo creo, para esto debo pedirle mas datos
                let salir = false
                let name = prompt("Ingrese el nombre del producto que desea cargar")
                let precio = Number(prompt("Ingrese el precio del producto " + name.toUpperCase()))
                let cantidad = Number(prompt("Ingrese la cantidad a agregar "))
                let rubro = rubros()
                if(rubro === "HOGAR" || rubro === "ELECTRONICA" || rubro === "MODA"){
                    productos.push({        //Lo cargo al sistema, ahora tengo un nuevo producto
                        codigo: codigo,
                        producto: name.toUpperCase(),
                        cantidad: cantidad,
                        precio: precio,
                        rubro: rubro.toUpperCase(),     
                        borrado: false                  
                    }) 
                    alert("producto cargado con exito ")
                }                      
        }
 }  
 function listarProductos(){
        for (const producto of productos) {   
            if(producto != undefined && producto.borrado === false){
                alert(producto.producto.toUpperCase() + "\n" + " ---------\n" + "CODIGO: " + producto.codigo + "\nPRODUCTO: " + producto.producto + "\nCANTIDAD: " + producto.cantidad + "\nPRECIO: " + producto.precio + "\nRubro: " + producto.rubro )
            }
       }

       if(productos.length === 0){
          alert("No tiene productos en stock")
       }
 }
 function buscarProducto(codigo){
    if(productos.find((producto)=> producto.codigo == codigo)){
        let position = productos.findIndex((index)  => index.codigo == codigo)  
        alert(productos[position].producto.toUpperCase() + "\n" + " ---------\n" + "CODIGO: " + productos[position].codigo + "\nPRODUCTO: " + productos[position].producto + "\nCANTIDAD: " + productos[position].cantidad + "\nPRECIO: " + productos[position].precio + "\nRubro: " + productos[position].rubro )
    }
 }
 function filtrarProductos(filtro){
    if(filtro === 1){
        let rubro = rubros()
        const filtrado = productos.filter((producto) =>
            producto.rubro == rubro)
            for (const filtra of filtrado) {
               if(filtra.borrado === false){
                alert(filtra.producto.toUpperCase() + "\n" + " ---------\n" + "CODIGO: " + filtra.codigo + "\nPRODUCTO: " + filtra.producto + "\nCANTIDAD: " + filtra.cantidad + "\nPRECIO: " + filtra.precio + "\nRubro: " + filtra.rubro )      
               } 
            }
            
    }
    else if(filtro ===2){ //ordena de menor a mayor
        productos.sort((a,b)=>{
            if(a.precio < b.precio){
               return -1
            }
            if(a.precio > b.precio){
               return 1
            }
            return 0
          })
          for (const filtra of productos) {
            alert(filtra.producto.toUpperCase() + "\n" + " ---------\n" + "CODIGO: " + filtra.codigo + "\nPRODUCTO: " + filtra.producto + "\nCANTIDAD: " + filtra.cantidad + "\nPRECIO: " + filtra.precio + "\nRubro: " + filtra.rubro )
        }
    }
    else if(filtro ===3){ //ordena de menor a mayor
        productos.sort((a,b)=>{
            if(a.precio > b.precio){
               return -1
            }
            if(a.precio < b.precio){
               return 1
            }
            return 0
          })
          for (const filtra of productos) {
            alert(filtra.producto.toUpperCase() + "\n" + " ---------\n" + "CODIGO: " + filtra.codigo + "\nPRODUCTO: " + filtra.producto + "\nCANTIDAD: " + filtra.cantidad + "\nPRECIO: " + filtra.precio + "\nRubro: " + filtra.rubro )
        }
    }
    else if(filtro === 0 ){
        return
    }
    else{
        alert("Error: el numero ingresado no pertenece al menu de opciones")
    }
      
 }
 function eliminarProducto(codigos){
    if(productos.find((producto)=> producto.codigo == codigos)){
        let position = productos.findIndex((index)  => index.codigo == codigos)  
        productos[position].borrado = true
    }
 }
 function menu(){
    //Vamos a mostrar un menu que permita introducir esas opciones
    do{
        let opciones = Number(prompt("Hola, Bienvenido al sistema 'Mi tiendita' ingrese:\n1: Para cargar un producto\n2: Para listar los productos cargados \n3: Para buscar producto \n4: Para filtrar productos \n5: Para eliminar un producto del stock\n6: para salir del sistema."))
        if(opciones=== 1 ){
            let cod = Number(prompt("Ingrese el codigo del producto"))
            cargarProducto(cod)
        }
        else if(opciones=== 2){
            listarProductos()
        }
        else if(opciones=== 3){
            let buscarCod = Number(prompt("Ingrese el codigo del producto a buscar: \n(si no lo recurda puede listar los productos para buscar su codigo)"))
            buscarProducto(buscarCod)
        }
        else if(opciones=== 4){
            let filtro = Number(prompt("1: Filtrar por rubro \n2: Ordenar por Menor precio \n3: Ordenar por Mayor precio   \n0: Volver"))
            filtrarProductos(filtro)
        }
        else if(opciones === 5){
            let buscarCod = Number(prompt("Ingrese el codigo del producto a Borrar: \n(si no lo recurda puede listar los productos para buscar su codigo)"))
            eliminarProducto(buscarCod)
        }
        else if(opciones === 6){
            salir = true
        }
        else{
           alert("Error: ingrese un numero del menu de opciones.")
        }
    }while(salir != true)
 }
 menu()
