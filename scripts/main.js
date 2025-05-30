document.addEventListener("DOMContentLoaded", () => {

  // ========================= GET ELEMENTS ========================
  
  // seleccionar elementos de idioma
  const idioma = document.querySelectorAll(".idioma");
  
  // seleccionar elementos de contacto
  const datos = document.querySelectorAll(".contacto");

  // seleccionar links a behance
  const behance = document.querySelectorAll(".link-behance");

  // seleccionar elementos de índice
  const index = document.querySelector("#índice");
  const iList = document.querySelector("#índice-lista");
  const filtros = document.querySelectorAll(".index-button");

  // seleccionar elementos de índice de secciones
  const secciones = document.querySelectorAll(".section-button");
  const analógicaBTN = document.getElementById("ANALÓGICA-button");
  const vectorialBTN = document.getElementById("VECTORIAL-button");

  // seleccionar proyectos
  const proyectos = document.querySelectorAll(".proyecto");

  // seleccionar flechas
  const IBullet1 = document.getElementById("i-bullet_1");
  const IBullet2 = document.getElementById("i-bullet_2");
  const bullets = document.querySelectorAll(".arrow > .bullet");
  const secFlechas = document.querySelectorAll(".P_estandar_largo > .grid-container > .proyecto-IMG");

  // seleccionar secciones
  const Inicio = document.getElementById("s1-1-bienvenida");
  const Analógica = document.getElementById("s2-1-portada");
  const Vectorial = document.getElementById("s3-1-portada");
  const seccionProyectos = document.getElementById("s2-2-proyectos");

  // seleccionar elementos de Liliana Mateo
  const LilianaMateo = document.getElementById("LilianaMateo");
  const referenceSM = document.getElementById("SM_PH"); // Referencia de posición para sección Sobre-Mí
  const referenceHi = document.getElementById("Hi_PH"); // Referencia de posición para página de bienvenida


  // ==================== HOVER & CLICK EFFECTS ====================

  // definir función para alternar entre hover, active y unactive
  const toggleStyles = (elementos) => {
    elementos.forEach(elemento => {
      elemento.addEventListener("mouseenter", () => {
        if (!elemento.classList.contains("active")) {
        elemento.classList.replace("unactive", "hover");
        };
      });
      elemento.addEventListener("mouseleave", () => {
        if (!elemento.classList.contains("active")) {
        elemento.classList.replace("hover", "unactive");
        };
      });
      elemento.addEventListener("click", () => {
        if (!elemento.classList.contains("active")) {
          elementos.forEach(e => {
            e.classList.remove("active", "hover");
            e.classList.add("unactive");
          });
          elemento.classList.replace("unactive", "active");
        } else {
          elemento.classList.replace("active", "unactive");
        };
      });
    });
  };

  // ---------------------- idioma ----------------------

  // alternar entre hover, active y unactive
  toggleStyles(idioma);

  // ----------------------- contacto ----------------------

  // copiar datos al portapapeles
  // y cambiar su estilo al hacer click
  datos.forEach(dato => {
    
    dato.addEventListener("click", () => {
      dato.style.color = "var(--black)";
      dato.style.fontWeight = "normal";
      dato.style.borderLeft = "1.8px solid var(--black)";
        setTimeout(() => {
          dato.style.color = "";
          dato.style.fontWeight = "";
          dato.style.borderLeft = "";
        }, 300);
        const texto = dato.getAttribute("data-copy");
        navigator.clipboard.writeText(texto);
    });
  });
  
  // -------------------- links a behance ------------------------

  toggleStyles(behance);
  behance.forEach(link => {
    link.addEventListener("click", () => {
      setTimeout(() => {link.classList.replace("active", "unactive")}, 10);
    });
  });

  // ------------------------ navegación -------------------------

  // desplegar índice mobile
  IBullet1.addEventListener("click", () => {
    index.style.insetInline = '0px';
    IBullet1.style.opacity = '0';
    idioma.forEach(element => {
      element.style.color = "var(--white)";
    });
  });

  IBullet2.addEventListener("click", () => {
    index.style.insetInline = '';
    IBullet1.style.opacity = '100';
    idioma.forEach(element => {
      element.style.color = "";
    });
  });

  // filtrar proyectos al hacer click
  filtros.forEach(filtro => {
    filtro.addEventListener("click", () => {
      if (filtro.classList.contains("active")) {
        proyectos.forEach(proyecto => {
          proyecto.style.display = "";
        });
        Analógica.style.display = "";
        Vectorial.style.display = "";
      } else {
        const categoría = filtro.getAttribute("data-category");
        proyectos.forEach(proyecto => {
          const tags = proyecto.getAttribute("data-tags").split(" ");
          if (tags.includes(categoría)) {
            proyecto.style.display = "";
          } else {
            proyecto.style.display = "none";
          };
        });
        Analógica.style.display = "none";
        Vectorial.style.display = "none";
      };

      // scroll automático al inicio de la sección proyectos
      setTimeout(() => {
        seccionProyectos.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });}, 10);
    });
  });

  // alternar entre hover, active y unactive
  toggleStyles(filtros);

  analógicaBTN.addEventListener("click", () => {
    setTimeout(() => {
      Analógica.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 10);
  });

  vectorialBTN.addEventListener("click", () => {
    setTimeout(() => {
      Vectorial.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 10);
  });
  
  toggleStyles(secciones);

  LilianaMateo.addEventListener("click", () => {
    setTimeout(() => {
      Inicio.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 10);
  });

  // ------------------------ flechas ------------------------

  // slides Proyectos Destacados
  bullets.forEach(bullet => {
    const slide = bullet.closest(".P_slide");
    bullet.addEventListener("click", () => {
      if (slide.classList.contains("PS_principal")) {
        const nextSlide = slide.nextElementSibling;
        nextSlide.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else if (slide.classList.contains("PS_secundario")) {
        const nextSlide = slide.previousElementSibling;
        nextSlide.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      };
    });
  });

  secFlechas.forEach(flecha => {
    flecha.addEventListener("click", () => {
      const proyecto = flecha.parentElement;
      const ancho = proyecto.scrollWidth;
      const visible = proyecto.clientWidth;
      const posicionActual = proyecto.scrollLeft;
      const nuevaPosicion = posicionActual + visible;
      if ((visible + posicionActual) < (ancho - 1)) {
        proyecto.scrollTo({
          left: nuevaPosicion,
          behavior: "smooth",
        });
      } else {
        proyecto.scrollTo({
          left: -nuevaPosicion,
          behavior: "smooth",
        });
      };
    });
  });
  
  // ================== SCROLL Y RESIZE EFFECTS =======================

  // definir funciones para conseguir variables de Liliana Mateo
  const getScrollSM = () => {
    const SMRect = referenceSM.getBoundingClientRect();
    return {
      top: SMRect.top,
      bottom: SMRect.bottom,
    };    
  };

  const getScrollHi = () => {
    const HiRect = referenceHi.getBoundingClientRect();
    return {
      bottom: HiRect.bottom,
    };  
  };


  // FUNCIÓN DE INTERACCIONES
  function elementosflotantes () {
    
    let vh = window.innerHeight/100; // definir unidad de altura de pantalla

    // conseguir variables de elementos
    const ScrollSM = getScrollSM();
    const ScrollHi = getScrollHi();
  
      
    if (ScrollSM.top < 32) {
      LilianaMateo.classList = "LM-header";
      LilianaMateo.style.bottom = "";
      iList.classList = "I-fijado";
    }
    else if (ScrollSM.top < 50*vh) {
      LilianaMateo.classList = "LM-titular";
      LilianaMateo.style.bottom = 100*vh - ScrollSM.bottom + "px";
      iList.classList = "I-fijado";
    }
    else if (ScrollHi.bottom < 40*vh){
      LilianaMateo.classList = "LM-fijado";
      LilianaMateo.style.bottom = "";
      iList.classList = "I-fijado";
    }
    else {
      LilianaMateo.classList = "LM-inicial";
      LilianaMateo.style.bottom = "";
      iList.classList = "I-inicial";
    }
  };

  // desatar las interacciones al scrollear o cambiar el tamaño de la pantalla
  window.addEventListener("scroll", () => {
    elementosflotantes();
    
    if (Vectorial.getClientRects().top < 0) {
      vectorialBTN.classList.replace("unactive", "active");
      analógicaBTN.classList.replace("active", "unactive");
    } else {
      vectorialBTN.classList.replace("active", "unactive");
      analógicaBTN.classList.replace("unactive", "active");
    };
  });
  window.addEventListener("resize", elementosflotantes);

});
