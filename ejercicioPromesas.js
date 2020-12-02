window.addEventListener("load", () => {
    document.getElementById("form").addEventListener("submit", manejarEventosSubmit, false);
}, false);

function manejarEventosSubmit(event){
    event.preventDefault();
    pedirUsuarios()
    .then( (usuarios) => {
        usuarios.forEach(usuario => {
            console.log(usuario.id + ":" + usuario.name);
        });
        console.log(usuarios);
    })
    .catch( (dato) => {
        console.log(dato);
    });

}
/**
 * Crear petición
 */
function pedirUsuarios(){
    return new Promise(
        (resolve, reject) => {
            let request = new XMLHttpRequest;
            request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
            request.send();
            request.addEventListener("load", () => {
                if(request.status === 200){
                    resolve(JSON.parse(request.responseText));
                }else{
                    reject(request.status);
                }
            }, false);
        }
    );
}