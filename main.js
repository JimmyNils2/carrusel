addEventListener("DOMContentLoaded", () =>{
    const imagenes = ["/assets/img1.jpg","/assets/img2.jpg",
                    "/assets/img3. jpg","/assets/img4.jpg",
                    "/assets/img5.jpg","/assets/img6.jpg",
                    "/assets/img7.jpg"];

    let i = 1;
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const progressBar = document.querySelector(".progress-bar");
    const divIndicadores = document.querySelector(".indicadores");

    let procentaje_base = 100/imagenes.length;
    let procentaje_actual = procentaje_base;

    //Crea etiquetas HTML
    for(let index = 0; index < imagenes.length; index++){
        
        //Crea las estiquetas, agrega clases y adjunta
        const div = document.createElement("div");
        div.classList.add('circles');
        div.id = index;
        divIndicadores.appendChild(div);
    }

    //Modifica barra progreso
    progressBar.style.width = `${procentaje_base}%`;
    
    // Ruta de la imagen
    img1.src = imagenes[0];

    //Toma los circulos y resalta el primero
    const circulos = document.querySelectorAll(".circles");
    circulos[0].classList.add("resaltado");


    const slidehow = () =>{
        //Toma la siguiente imagen
        img2.src = imagenes[i];
        
        //Busca el index de la imagen y para ubicar el circulo correspondiente
        const currentCircle = Array.from(circulos).find(elemento => elemento.id== i);

        //busca el circulo anterior y le quita el resaltado
        Array.from(circulos).forEach(circle => circle.classList.remove("resaltado"));

        //Resalta el circulo actual
        currentCircle.classList.add("resaltado");
        
        //Aplica la clase a la imagene 2
        img2.classList.add("active");

        //Mueve el index
        i++
        
        //Mueve el progreso
        procentaje_actual += procentaje_base;

        //Mueve la barra de progreso
        progressBar.style.width = `${procentaje_actual}%`;

        
        //Verifica si llegamos a la ultima imagen
        if (i == imagenes.length){
            i = 0;
            procentaje_actual = procentaje_base - procentaje_base;
        }

        setTimeout(()=>{
            img1.src = img2.src;
            img2.classList.remove("active");
        }, 1000);

    }

    setInterval(slidehow,4000);
});