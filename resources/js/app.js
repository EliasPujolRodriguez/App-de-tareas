const d = document,
    w = window

export function listaTareas(inputTarea, btnAgregarTarea, panelMostrarTareas, panelMostrarTareasTerminadas) {
    const $inputTarea = d.getElementById(inputTarea),
        $btnAgregar = d.getElementById(btnAgregarTarea)
    let tarea, contador = 0;

    const agregar = () => {

        const $panelMostrarTarea = d.getElementById(panelMostrarTareas)
        tarea = $inputTarea.value

        const $panelMostrarTareaTerminada = d.getElementById(panelMostrarTareasTerminadas)


        const $lista = d.createElement("li")

        $lista.innerText = tarea

        const $botones = d.createElement("div")
        $botones.classList.add("buttons")


        const $btnEliminar = d.createElement("button")
        $btnEliminar.setAttribute('class', 'borrar');
        $btnEliminar.innerHTML = `<i class="fas fa-trash"></i> Eliminar`


        const $btnCompleto = d.createElement("button")
        $btnCompleto.classList.add("completo")
        $btnCompleto.innerHTML = `<i class="fas fa-check-circle"></i> Completo`

        const $contador = d.getElementById("contador")



        $botones.appendChild($btnEliminar)
        $botones.appendChild($btnCompleto)
        $lista.appendChild($botones)
        $panelMostrarTarea.insertBefore($lista, $panelMostrarTarea.childNodes[0])

        //contador de lista de tareas pendientes
        contador = 0
        $contador.innerHTML = `Existen un total de ${$panelMostrarTarea.childElementCount + contador} tareas pendientes`


        d.addEventListener("click", e => {
            if (e.target === $btnEliminar) {
                w.confirm("¿Deseas eliminar esta tarea?")
                $panelMostrarTarea.removeChild($panelMostrarTarea.childNodes[0])
            }


            if (e.target === $btnCompleto) {
                let clon = $panelMostrarTarea.childNodes[0].cloneNode(true);
                $panelMostrarTareaTerminada.insertBefore(clon, $panelMostrarTarea[0])
                $panelMostrarTarea.removeChild($panelMostrarTarea.childNodes[0])

               
            }

            //validacion del contador en caso de eliminar o de asignar una tarea como completa
            if (e.target === $btnEliminar || e.target === $btnCompleto) {
                $contador.innerHTML = `Existen un total de ${$panelMostrarTarea.childElementCount - contador} tareas pendientes`
            }
        });

    }



    //manejador de eventos add event listener

    d.addEventListener("click", e => {
        if (e.target === $btnAgregar) {

            e.preventDefault()
            if ($inputTarea.value !== "") {
                agregar()
                alert("Se ha registrado la tarea exitosamente")
                $inputTarea.value = ""
            } else {
                alert("no haz ingresado ningún valor")
            }
        }

    })




}

