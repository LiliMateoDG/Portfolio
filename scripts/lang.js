document.addEventListener("DOMContentLoaded", () => {
    const Hola = document.getElementById("Hi");
    const bienvenido = document.getElementById("bienvenida-portada-txt");

    const tags = document.querySelectorAll(".paratexto_2");

    const dest = {
        ESP: {
            Hola: `
            <h4>¡Hola! Soy</h4>
            <h5>Hi! I'm</h5>
            `,
            bienvenido: `
            <h4>Bienvenido a mi</h4>
            <h5>Welcome to my</h5>
            `,
        },
        ENG: {
            Hola: `
            <h4>Hi! I'm</h4>
            <h5>¡Hola! Soy</h5>
            `,
            bienvenido: `
            <h4>Welcome to my</h4>
            <h5>Bienvenido a mi</h5>
            `,
        },
    };

    const textos = {
        ESP: {
            index: {
                tipo: "Tipografía",
                ilus: "Ilustración",
                iden: "Identidad",
                exp: "Experimental",
            },
            dg: "Diseñadora Gráfica",
            sm: [
                "Tipografia, dibujo, espacialidad y experimentación.",
                "Mis diseños y mis procesos no se encasillan en un solo área. Te invito a conocer mi trabajo.",
            ],
            analog: [
                "En gran parte de mis diseños siguen presentes las técnicas tradicionales de trabajo gráfico.",
                "Considero que con ellas pueden alcanzarse resultados únicos y personales, con una expresividad diferente a la de las herramientas digitales modernas.",
            ],
            vec: [
                "Las herramientas digitales me permiten un trabajo más meticuloso.",
                "En estos diseños resalta la atención al detalle, el ajuste y la construcción de sistemas.",
            ],

            mamanchi: "Propuesta de afiche para el cortometraje documental «Mamanchi», dirigido por Robert Verástegui en 2021.",
            tortugas: "Búsqueda de diferentes lenguajes gráficos trabajando sobre un mismo sujeto. Experimentación con diferentes técnicas de ilustración e impresiones artesanal.",
            escrachos: "En los tiempos modernos todos somos fotógrafos. Como lado B de esos retratos perfectamente pulidos y retocados que publicamos en redes, tenemos también esas capturas que escondemos y guardamos entre amigos y familiares. Esos momentos desprolijos pero honestos que guardamos de recuerdo con cariño, como chiste interno. Estos dibujos son reinterpretaciones de algunos de esos escraches.",
            bit1: "Acuarela, lápiz y marcador sobre cartón blanco",
            bit2: "Marcador POSCA y acrílico sobre fibrofácil",
            manifiesto: [
                "En 1924 André Bretón publicó el Primer Manifiesto Surrealista, en Francia. En 1992, la editorial Argonauta presentó la primera traducción al español de ese escrito, redactada por Aldo Pelegrini y titulada Manifiestos del Surrealismo.",
                "Esta es una edición artesanal realizada a partir de extractos de dicha traducción.",
            ],
            manifiestoSec: [
                "Intervenciones realizadas a mano con bisturí",
                "Plaqueta de 80 páginas, formato cerrado A5",
                "Encuadernación en papel misionero 150gr",
                "Interior: Splendorgel 90gr, Ygrid rojo 90gr",
                "Intervenciones realizadas a mano con bisturí",
            ],
            haha: [
                "Yasunari Kawabata publicó en 1968 una recopilación de cuentos titulada «Historias en la palma de la mano» («Enohira no Shōsetsu», en el japonés original).",
                "«Madre» («Haha») es uno de los incluidos en esa selección, presentado en este proyecto en formato de libro no-convencional.",
            ],
            hahaSEC: [
                "Encuadernación no convencional, impresión chorro de tinta sobre tela para lienzo",
                "Interior: Tiziano brina 160gr, Elle Erre blanco 220gr, y Obra 150gr",
            ],
            folioscopio: "Microfibra sobre papel escaneado y digitalizado",
            anima: "Tinta china sobre papel acuarela, escaneada y digitalizada",
            AEM: "Corto mudo desarrollado a partir del título asignado «Algo está mutando». Se realizó un trabajo de investigación sobre la relación entre el sonido y la imagen, y se exploró la posibilidad de crear una pieza audiovisual sin sonido.",
            AEMsec: [
                "Primer esquicio a partir del cual se siguió desarrollando la idea",
                "Improvisación con téctina de stop-motion",
            ],
            serie: [
                "Siete composiciones abstractas.",
                "Un estudio sobre el ritmo, la pregnancia, y los niveles compositivos. Experimentación con materialidad.",
            ],
            busquedas: "Un vistazo al contenido de mis bitácoras",
            NG: "Campaña social de concientización sobre las niñeces en condición de adoptabilidad, inspirada en el colectivo detrás del #AdoptáNiñesGrandes en redes sociales.",
            NGsec: [
                "Diseño social",
                "Sistema de identidad gráfico basado en tipografía",
            ],
            laboratorio:"Propuesta de re-diseño para este lanzamiento de la revista digital Anfibia.",
            NM: "Sistema de identidad para centro cultural inspirado en el colectivo Identidad Marrón.",
            diseñarse: "Afiche ilustrado a dos tintas para impresión en serigrafía.",
            LT: "Afiche infográfico realizado a partir del estudio «Ellas alimentan al mundo, tierra para las que trabajan», publicado en 2021 por LatFem y We Effect.",
            
            Editorial: "Editorial",
            Afiche: "Afiche",
            Identidad: "Sistema de identidad",
            Lettering: "Lettering",
            Ilustración: "Ilustración",
            Animación: "Animación",
            Experimental: "Experimental",
            Web: "Web",
            Información: "Diseño de información",
        },
        ENG: {
            index: {
                tipo: "Typography",
                ilus: "Illustration",
                iden: "Identity",
                exp: "Experimental",
            },
            dg: "Graphic Designer",
            sm: [
                "Typography, drawing, spatiality, and experimentation.",
                "My designs and creative processes don’t fit into just one box. I invite you to explore my work.",
            ],
            analog: [
                "Many of my designs still incorporate traditional graphic techniques.",
                "I believe they can achieve unique and personal results, with a kind of expressiveness that differs from modern digital tools.",
            ],
            vec: [
                "Digital tools allow me to work more meticulously.",
                "These designs highlight attention to detail, precision, and the construction of systems.",
            ],
            mamanchi: "Poster proposal for the short documentary Mamanchi, directed by Robert Verástegui in 2021.",
            tortugas: "An exploration of different graphic languages using a single subject. Experimentation with various illustration techniques and handmade prints.",
            escrachos: "In modern times, we are all photographers. As a B-side to those polished, retouched portraits we post on social media, we also have those snapshots we hide and share only with close friends and family—messy but honest moments we treasure like inside jokes. These drawings are reinterpretations of some of those candid shots.",
            bit1: "Watercolor, pencil, and marker on white cardboard",
            bit2: "POSCA marker and acrylic on MDF board",
            manifiesto: [
                "In 1924, André Breton published the First Surrealist Manifesto in France. In 1992, the publisher Argonauta released the first Spanish translation, written by Aldo Pellegrini and titled Surrealist Manifestos.",
                "This is a handcrafted edition based on excerpts from that translation.",
            ],
            manifiestoSec: [
                "Editorial system based on cut-outs and die-cuts.",
                "80-page booklet, closed A5 format",
                "Binding: 150gsm kraft-like paper",
                "Interior: 90gsm Splendorgel, 90gsm Ygrid Red",
                "Handmade interventions using a scalpel",
            ],
            haha: [
                "YIn 1968, Yasunari Kawabata published a short story collection titled Palm-of-the-Hand Stories (Enohira no Shōsetsu, in the original Japanese).",
                "Mother (Haha) is one of the stories included in that selection, presented in this project in a non-conventional book format.",
            ],
            hahaSEC: [
                "Unconventional binding, inkjet printing on canvas fabric",
                "Interior: Tiziano Brina 160gsm, Elle Erre White 220gsm, and Obra 150gsm",
            ],
            folioscopio: "Micron pen on scanned and digitized paper",
            anima: "India ink on watercolor paper, scanned and digitized",
            AEM: "Silent short film developed from the assigned title “Something is mutating.”",
            AEMsec: [
                "Initial draft that sparked the further development of the idea",
                "Improvisation using stop-motion technique",
            ],
            serie: [
                "Seven abstract compositions.",
                "A study on rhythm, visual impact, and compositional levels. Material experimentation.",
            ],
            busquedas: "A glimpse into the content of my sketchbooks",
            NG: "Social awareness campaign about children in adoptability situations, inspired by the collective behind #AdoptáNiñosGrandes on social media.",
            NGsec: [
                "Social Design",
                "Visual identity system based on typography",
            ],
            laboratorio:"Redesign proposal for Revista Anfibia's digital launch.",
            NM: "Visual identity system for a cultural center inspired by the collective Identidad Marrón.",
            diseñarse: "Two-color illustrated poster for screen printing.",
            LT: "Infographic poster based on the study They Feed the World: Land for the Women Who Work It, published in 2021 by LatFem and We Effect.",
        
            Editorial: "Editorial",
            Afiche: "Poster",
            Identidad: "Visual identity system",
            Lettering: "Lettering",
            Ilustración: "Illustration",
            Animación: "Animation",
            Experimental: "Experimental",
            Web: "Web",
            Información: "Information Design",
        },
    };

    const parrafosDinamicos = (container, textosArray) => {
        const tag = container.firstElementChild.tagName;
        const className = container.firstElementChild.className;
        container.innerHTML = ""; // Limpiar contenido previo
        textosArray.forEach(texto => {
            const el = document.createElement(tag);
            if (className) el.classList.add(className);
            el.textContent = texto;
            container.appendChild(el);
        });
    };

    const traducir = (lang) => {
        Hola.innerHTML = dest[lang].Hola;
        bienvenido.innerHTML = dest[lang].bienvenido;

        // traducir índice
        document.getElementById("index-tipo").textContent = textos[lang].index.tipo;
        document.getElementById("index-ilus").textContent = textos[lang].index.ilus;
        document.getElementById("index-iden").textContent = textos[lang].index.iden;
        document.getElementById("index-exp").textContent = textos[lang].index.exp;

        // traducir sobre mí
        document.getElementById("dg").textContent = textos[lang].dg;

        const smtext = document.getElementById("sobremí-descripción-txt");
        parrafosDinamicos(smtext, textos[lang].sm);

        // traducir analogica
        const analogtext = document.getElementById("analógica-txt");
        parrafosDinamicos(analogtext, textos[lang].analog, textos[lang].analog);

        // traducir vectorial
        const vectext = document.getElementById("vectorial-txt");
        parrafosDinamicos(vectext, textos[lang].vec, textos[lang].vec);

        // traducir proyectos
        document.getElementById("txt-mamanchi").textContent = textos[lang].mamanchi;
        document.getElementById("txt-tortugas").textContent = textos[lang].tortugas;
        document.getElementById("txt-escrachos").textContent = textos[lang].escrachos;
        document.getElementById("txt-bit1").textContent = textos[lang].bit1;
        document.getElementById("txt-bit2").textContent = textos[lang].bit2;

        const manifiestotext = document.getElementById("txt-manifiesto");
        parrafosDinamicos(manifiestotext, textos[lang].manifiesto);
        const manifiestossec = document.getElementById("txt-sec-manifiesto");
        parrafosDinamicos(manifiestossec, textos[lang].manifiestoSec);
        
        const hatext = document.getElementById("txt-haha");
        parrafosDinamicos(hatext, textos[lang].haha, textos[lang].haha);
        const hasec = document.getElementById("txt-sec-HAHA");
        parrafosDinamicos(hasec, textos[lang].hahaSEC);

        document.getElementById("txt-folioscopio").textContent = textos[lang].folioscopio;
        document.getElementById("txt-anima").textContent = textos[lang].anima;
        document.getElementById("txt-AEM").textContent = textos[lang].AEM;

        const AEMsec = document.getElementById("txt-sec-AEM");
        parrafosDinamicos(AEMsec, textos[lang].AEMsec);

        const serietext = document.getElementById("txt-serie");
        parrafosDinamicos(serietext, textos[lang].serie, textos[lang].serie);

        document.getElementById("txt-busquedas").textContent = textos[lang].busquedas;
        document.getElementById("txt-NG").textContent = textos[lang].NG;
        const NGsec = document.getElementById("txt-sec-NG");
        parrafosDinamicos(NGsec, textos[lang].NGsec);

        document.getElementById("txt-NM").textContent = textos[lang].NM;
        document.getElementById("txt-laboratorio").textContent = textos[lang].laboratorio;
        document.getElementById("txt-diseñarse").textContent = textos[lang].diseñarse;
        document.getElementById("txt-LT").textContent = textos[lang].LT;
    
        // traducir tags

        tags.forEach((tag) => {
            const t = tag.getAttribute("data-tag");
            if (t !== null) {tag.textContent = textos[lang][t];};
        });
    
    };

    document.getElementById("ENG").addEventListener("click", () => traducir("ENG"));
    document.getElementById("ESP").addEventListener("click", () => traducir("ESP"));
});