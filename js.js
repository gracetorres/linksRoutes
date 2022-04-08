
function identificarActivoDos(array){

    for (let index = 0; index < array.length; index++) {
       if (array[index].className.includes("active")) {
           return index;
       }
    }
    return -1;

}


function identificarRutaDos(ruta, array){
    let posicion = -1;
    for (let index = 0; index < array.length; index++) {
       if (array[index].id == ruta) {
           return index;//0
       }
    }
    return posicion;
}







function navegarA(ruta){
    let contenidoHTML = "";
    const todo = document.querySelectorAll("#link-2 .font");

    const rutaActiva = identificarActivoDos(todo);
    if (rutaActiva >= 0) {
        todo[rutaActiva].classList.remove("active");
    }

    const rutaLink = identificarRutaDos(ruta,todo);
    if (rutaLink >= 0) {
        todo[rutaLink].classList.add("active")
    }


    if (ruta == "servicios") {
        contenidoHTML =  `<div> PAGINA DE SERVICIOS</div>`;
    }

    if (ruta == "acercaDe") {
        contenidoHTML = `<div>ACERCA DE</div>`;
    }


    if (ruta == "inicio") {
        contenidoHTML = `PAGINA DE INICIO 2`;
    }

    if (ruta == "confianza") {
        contenidoHTML = `PAGINA DE CONFIANZA`;
    }

    if (ruta == "competencias") {
        contenidoHTML = `PAGINA DE COMPETENCIAS`;
    }

    if (ruta == "contacto") {
        contenidoHTML = `PAGINA DE CONTACTO`;
    }

    const b = document.getElementById("dynamicTemplate");
    b.innerHTML = contenidoHTML;
}


const link = 
[
    {
        nombre: "Inicio",
        ruta: 'inicio',
        active: true
    },
    {
        nombre: "Servicios",
        ruta: 'servicios',
        active: false
    },
    {
        nombre: "Acerca de",
        ruta: 'acercaDe',
        active: false
    },
    {
        nombre: "Confianza",
        ruta: 'confianza',
        active: false,
    },
    {
        nombre: "Competencias",
        ruta: 'competencias',
        active: false
    },
    {
        nombre: "Contacto",
        ruta: 'contacto',
        active: false
    },
]

function cargar(){
    const linkRutas = document.getElementById("links");
    let html = "";
    for (let index = 0; index < link.length; index++) {
       if (link[index].active) {
          html+= ` <a class="font blue active"  onclick="navegarAV2('${link[index].ruta}')" href="javascript:void(0)">${link[index].nombre}</a>`
       }
       else{
        html+= ` <a class="font blue"  onclick="navegarAV2('${link[index].ruta}')" href="javascript:void(0)">${link[index].nombre}</a>`
       }
    }
    linkRutas.innerHTML = html;
}



function navegarAV2(ruta){
   const rutaActiva = identificarActivo();
   if (rutaActiva >= 0) {
       link[rutaActiva].active = false;
   }


   const rutaLink = identificarRuta(ruta);
   if (rutaLink >= 0) {
    link[rutaLink].active = true;
   }
   cargar();
   cargarHTML(ruta);
}

function cargarHTML(ruta){
    const contenido  = document.getElementById("dynamicTemplateDos");
    let html = "";

    // for (let index = 0; index < link.length; index++) {
    //    if ((link[index].ruta == ruta) && (link[index].active == true) ) {
    //        html+=
    //        `<div id="dynamicTemplate">
    //             PAGINA DE ${link[index].nombre}
    //         </div>`
    //    }
    // }
    if (ruta == "servicios") {
        html = servicioshtml;
    }
    contenido.innerHTML = html;

    if (ruta == "inicio") {
        html = inicioHTML;
    }
    contenido.innerHTML = html;

    if (ruta == "acercaDe") {
        html = acercadeHTML;
    }
    contenido.innerHTML = html;

    if (ruta == "confianza") {
        html = confianzaHTML;
    }
    contenido.innerHTML = html;

    if (ruta == "competencias") {
        html = competenciasHTML;
    }
    contenido.innerHTML = html;

    if (ruta == "contacto") {
        html = contactoHTML;
    }
    contenido.innerHTML = html;
}

function identificarRuta(ruta){
    let posicion = -1;
    for (let index = 0; index < link.length; index++) {
       if (link[index].ruta == ruta) {
           return index;//0
       }
    }
    return posicion;
}

function identificarActivo(){
    let posicion = -1;
    for (let index = 0; index < link.length; index++) {
        if (link[index].active) {
            return index;
        }
    }
    return posicion;
}

function funcionesIniciales(){
    cargar();
    volverPaso1();
}

function volverPaso1() {
    quitarActive();

    const conten2 = document.getElementById("conten-2");
    conten2.classList.add('d-none');


    const conten3 = document.getElementById("conten-3");
    conten3.classList.add('d-none');

    // mostrar
    const conten1 = document.getElementById("conten-1");
    conten1.classList.remove('d-none');

    // add class active
    const link1 = document.getElementById("paso1");
    link1.classList.add('active');
}

function nextPasoDos(){
   // Quitar y ocultar lo que esta activo
   quitarActive();

    const conten1 = document.getElementById("conten-1");
    conten1.classList.add('d-none');


    // mostrar
    const content = document.getElementById("conten-2");
    content.classList.remove('d-none');

    // add class active
    const link = document.getElementById("paso2");
    link.classList.add('active');

}

function quitarActive(){
    const nodos = document.querySelectorAll("#pasos-julio a");

    const posicionLinkActivo = buscarPosicionLinkActivo(nodos);
    if(posicionLinkActivo >= 0){
        nodos[posicionLinkActivo].classList.remove("active");
    }
}


function buscarPosicionLinkActivo(lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if(element.className.includes("active")){
            return index;
        }
    }
    return -1;
}

function nextPasoTres(){
    quitarActive();

    const conten1 = document.getElementById("conten-1");
    conten1.classList.add('d-none');


    const conten2 = document.getElementById("conten-2");
    conten2.classList.add('d-none');

    // mostrar
    const conten3 = document.getElementById("conten-3");
    conten3.classList.remove('d-none');

    // add class active
    const link3 = document.getElementById("paso3");
    link3.classList.add('active');
}

function volverPaso2(){
    quitarActive();

    const conten3 = document.getElementById("conten-3");
    conten3.classList.add('d-none');


    const conten1 = document.getElementById("conten-1");
    conten1.classList.add('d-none');

    // mostrar
    const conten2 = document.getElementById("conten-2");
    conten2.classList.remove('d-none');

    // add class active
    const link2 = document.getElementById("paso2");
    link2.classList.add('active');
}

function navegarTres(ruta){

    // if (ruta == "paso1") {
    //     volverPaso1()
    // }


    // if (ruta == "paso2") {
    //     volverPaso2()
    // }


    
    // if (ruta == "paso3") {
    //     nextPasoTres()
    // }


    // let contenidoNuevo = "";

    const pasos = document.querySelectorAll("#link-3 .blue");
    if (ruta == "paso3") {
        // quitar active
        const pasoActivado = identificarPasoActivado(pasos);
        if (pasoActivado >= 0) {
            pasos[pasoActivado].classList.remove("active");
        }
        // añadir active
        const pasoLink = activarPaso(ruta,pasos);
        if (pasoLink >= 0) {
            pasos[pasoLink].classList.add("active")
        }
        document.getElementById("conten-1").classList.add("d-none")
        document.getElementById("conten-2").classList.add("d-none")
        document.getElementById("conten-3").classList.remove("d-none")
    }

    if (ruta == "paso2") {
        // quitar active
        const pasoActivado = identificarPasoActivado(pasos);
        if (pasoActivado >= 0) {
            pasos[pasoActivado].classList.remove("active");
        }
        // añadir active
        const pasoLink = activarPaso(ruta,pasos);
        if (pasoLink >= 0) {
            pasos[pasoLink].classList.add("active")
        }
        document.getElementById("conten-1").classList.add("d-none")
        document.getElementById("conten-2").classList.remove("d-none")
        document.getElementById("conten-3").classList.add("d-none")
    }

    if (ruta == "paso1") {
        // quitar active
        const pasoActivado = identificarPasoActivado(pasos);
        if (pasoActivado >= 0) {
            pasos[pasoActivado].classList.remove("active");
        }
        // añadir active
        const pasoLink = activarPaso(ruta,pasos);
        if (pasoLink >= 0) {
            pasos[pasoLink].classList.add("active")
        }
        document.getElementById("conten-1").classList.remove("d-none")
        document.getElementById("conten-2").classList.add("d-none")
        document.getElementById("conten-3").classList.add("d-none")
    }
   


    // const pasoLink = activarPasoTres(rut,pasos);
    // if (pasoLink >= 0) {
    //     pasos[pasoLink].classList.add("active")
    //     pasos[pasoLink].classList.add("d-block")
        
    // }
    

}

function identificarPasoActivado(steps){
    for (let index = 0; index < steps.length; index++) {
      if (steps[index].className.includes("active")){
        return index;
      }
    }
}

function activarPaso(rut,steps){
    for (let index = 0; index < steps.length; index++) {
        if (steps[index].id == rut) {
            return index;
        }
    }
     return posicion;
}


const servicioshtml = `
    <section id="comp-kq5dfsef" class="_3d64y">
        <div id="bgLayers_comp-kq5dfsef" data-hook="bgLayers" class="_3wnIc">
            <div data-testid="colorUnderlay" class="_3KzuS _3SQN-">
            </div>
            <div id="bgMedia_comp-kq5dfsef" class="_2GUhU">
            </div>
        </div>
        <div data-testid="columns" class="_1uldx">
            <div id="comp-kq5dfseh1" class="_1vNJf">
                <div id="bgLayers_comp-kq5dfseh1" data-hook="bgLayers" class="_3wnIc">
                    <div data-testid="colorUnderlay" class="_3KzuS _3SQN-">
                    </div>
                    <div id="bgMedia_comp-kq5dfseh1" class="_2GUhU">
                    </div>
                </div>
                <div data-mesh-id="comp-kq5dfseh1inlineContent" data-testid="inline-content" class="">
                    <div data-mesh-id="comp-kq5dfseh1inlineContent-gridContainer" data-testid="mesh-container-content">
                        <div id="comp-kzp08841" class="XUUsC" title="">
                            <div data-testid="linkElement" class="xQ_iF">
                            </div>
                        </div>
                        <div id="comp-kq5dfseu2" class="_2Hij5" data-testid="richTextElement" style="visibility: inherit;" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done">
                            <h3 class="font_6" style="font-size:28px; line-height:normal; text-align:center;">
                                <span style="font-family:wfont_166e89_4574f075898543ea99a49b8a698941f1,wf_4574f075898543ea99a49b8a6,orig_qanelas_soft_semibold;">
                                    <span style="font-size:28px;"><span style="letter-spacing:normal;">Somos expertos en guiarte en el diseño de la empresa digital
                                    </span>
                                </span>
                            </h3>
                        </div>
                        <div id="comp-kq5dfsew1" class="_2Hij5" data-testid="richTextElement" style="visibility: inherit;" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done">
                            <p class="font_8" style="line-height:1.5em; text-align:center; font-size:18px;">
                                <span>
                                    <span style="letter-spacing:normal;">Vivir una experiencia única para transformar tu negocio en un ecosistema digital.
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const inicioHTML = `PAGINA DE INICIO 2`;
const acercadeHTML = `PAGINA DE ACERCA DE 2`;
const confianzaHTML = `PAGINA DE CONFIANZA 2`;
const competenciasHTML = `PAGINA DE COMPETENCIA 2`;
const contactoHTML = `PAGINA DE CONTACTO 2`;