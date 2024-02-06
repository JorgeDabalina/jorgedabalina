import { SECTION, MEDIA_TYPE } from './models/project.enum.js';




export const pagesData = [

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO TEST
  //----------------------------------------------------------------------------------------------------------------
  { // 0
    id: 0,
    category: SECTION.TEST,
    navTitle: 'Test',
    pathNav: '/projects/test',
    title: 'Test: The Test Project',
    details: {
      media: 'test-media',
      year: '0000',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: 'https://picsum.photos/200/300',
      alt: 'Test image',
    },
    description: [
      {
        text: 'Test description',
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: 'https://picsum.photos/200/300',
        alt: 'Test image',
      },
    ],
  },
  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 1
  //----------------------------------------------------------------------------------------------------------------  
  {
    id: 1,
    category: SECTION.PROYECTOS,
    navTitle: 'Negroponte',
    pathNav: '/projects/Negroponte',
    title: 'Negroponte',
    details: {
      media: 'A/V',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/negroponte/negroponte_featured.jpg',
      alt: ''
    },
    description: [
      {
        language: 'es',
        value:
          `NEGROPONTE es un proyecto audiovisual, cuyo objetivo es profundizar en las relaciones fundamentales entre música e imagen.
          Este proyecto es el resultado práctico de esta investigación: https://riunet.upv.es/handle/10251/149880`
      },
      {
        language: 'en',
        value:
          `NEGROPONTE is an audiovisual project with the objective of exploring the root relations between music and image
          This project is the practical result of this research: https://riunet.upv.es/handle/10251/149880`
      },
    ],
    media: [
      
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: "BlqZmdY4-NQ?si=BozOVlQhx9Qssidf",
        alt: ''
      },{
        type: MEDIA_TYPE.SPOTIFY,
        src: 'https://open.spotify.com/embed/album/4lFfj4We5ctZG9IzqRVxzA?utm_source=generator',
        alt: ''
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 2
  //----------------------------------------------------------------------------------------------------------------  
  {
    id: 2,
    category: SECTION.PROYECTOS,
    navTitle: 'Exploracion entrelazada',
    pathNav: '/projects/exploracionEntrelazada',
    title: 'Exploracion entrelazada',
    details: {
      media: 'Video',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/entrelazada/entrelazada_featured.jpg',
      alt: ''
    },
    description: [
      {
        language: 'en',
        value: '"Exploración Entrelazada" is not only a tribute to past video sampling technologies but also a reflection on the creative process and its unpredictable nature. By adopting an approach that welcomes errors and serendipitous discoveries, the work draws on these incidents to enrich its visual and conceptual language. This methodological approach reflects adaptability and openness, highlighting the inherent beauty in imperfection and experimentation. Projected onto the facade of a building in Zaragoza, the piece benefits from a low-resolution support that, far from being a limitation, amplifies the expressive possibilities of the project, freeing it from conventional resolution constraints and allowing an unprecedented exploration in form and content.'
      },
      {
        language: 'es',
        value: '"Exploración Entrelazada" no solo es un homenaje a las tecnologías de muestreo de video del pasado, sino también una reflexión sobre el proceso creativo y su naturaleza impredecible. Adoptando un enfoque que acoge errores y descubrimientos fortuitos, la obra se nutre de estas incidencias para enriquecer su lenguaje visual y conceptual. Este enfoque metodológico refleja una adaptabilidad y apertura que resalta la belleza inherente en la imperfección y la experimentación. Proyectada en la fachada de un edificio en Zaragoza, la pieza se beneficia de un soporte de baja resolución que, lejos de ser una limitación, amplifica las posibilidades expresivas del proyecto, liberándolo de las restricciones convencionales de resolución y permitiendo una exploración sin precedentes en la forma y el contenido.'
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: "kSesEkcWuhw?si=BPeoIFJxXldAjV8A",
        alt: ''
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/entrelazada/entrelazada_1.jpg',
        alt: ''
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 3
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 3,
    category: SECTION.PROYECTOS,
    navTitle: 'Del otro lado',
    pathNav: '/projects/delotrolado',
    title: 'Del otro lado',
    details: {
      media: 'Video',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.YOUTUBE,
      src: "6ZEjyrW1N_I?si=q6NtNM-CQEhf0TFz",
      alt: ''
    },
    description: [
      {
        language: 'es',
        value: `Jorge Dabaliña, Del otro lado.
        Cortometraje experimental. Duración: 5'45".
        Premiado en Short PAM!21” en La Filmoteca, Valencia`
      },
      {
        language: 'en',
        value: `Jorge Dabaliña, Del otro lado.
        Experimental short film. Duration: 5'45".
        Premiered in Short PAM!21” in La Filmoteca, Valencia`
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/delotrolado/delotrolado_featured.jpg',
        alt: ''
      },
      {
        type: MEDIA_TYPE.TEXT,
        texts: [
          {
            language: 'es',
            value: `La calle puede ser observada a través del cristal de una ventana, de modo que sus ruidos nos lleguen amortiguados, los movimientos se vuelvan fantasmales y toda ella, pese a la transparencia del vidrio rígido y frío, aparezca como un ser latente, «del otro lado». 
(Kandinsky, 1926)`
          },
          {
            language: 'en',
            value: `The street can be observed through the window pane, which diminishes its sounds so that its movements become phantom-like. The street itself, as seen through the transparent ,yet hard and firm, pane seems set apart, existing and pulsating as if «beyond».
(Kandinsky, 1926)`
          }


        ],
      },
      
    ],
  },



  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 4
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 4,
    category: SECTION.PROYECTOS,
    navTitle: 'Materia eléctrica',
    pathNav: '/projects/materiaelectrica',
    title: 'Materia eléctrica',
    details: {
      media: 'Instalación',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: "/images/interferencia_featured.jpg",
      alt: ''
    },
    description: [
      {
        language: 'es',
        value: "PAM!"
      },
      {
        language: 'en',
        value: "POAM!"
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: "/images/interferencia_1.jpg",
        alt: ''
      },
    ],
  },



  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 5
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 5,
    category: SECTION.PROYECTOS,
    navTitle: '1.1 Grados',
    pathNav: '/projects/1.1grados',
    title: '1.1 Grados',
    details: {
      media: 'Proyecto',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/grados/grados_featured.jpg',
      alt: ''
    },
    description: [
      {
        language: 'en',
        value: 'Inspired by the seminal research of the physicist Pablo Jarillo-Herrero on graphene, a substance noted for its hexagonal lattice, this artistic inquiry delves into the revolutionary potential of superimposing two graphene layers at a "magic angle" of 1.1 degrees. This precise orientation modifies the physical characteristics of graphene, laying the groundwork for our artistic exploration into the visual and auditory elements that this angle can unveil. \nFacilitated by the "Residencias artísticas y culturales para jóvenes 2021" program and the "Residencias de creación artística" grants from Acción Cultural of Ayuntamiento de València, "1.1 Grados" represents an intersection of art and science, probing the limits of perception and materiality through an innovative artistic approach.'
      },
      {
        language: 'es',
        value: 'Inspirado en la investigación pionera del físico Pablo Jarillo-Herrero sobre el grafeno, un material destacado por su patrón de rejilla hexagonal, esta indagación artística explora el potencial transformador de superponer dos capas de grafeno en un "ángulo mágico" de 1.1 grados. Esta orientación precisa modifica las propiedades físicas del grafeno, sentando las bases para nuestra exploración artística de los elementos visuales y sonoros que se pueden derivar de este fenómeno. \nFacilitado por el programa "Residencias artísticas y culturales para jóvenes 2021" y las ayudas a "Residencias de creación artística" de Acción Cultural del Ayuntamiento de València, "1.1 Grados" representa una convergencia de arte y ciencia, investigando los límites de la percepción y la materialidad a través de un enfoque artístico innovador.'
      },
    ],
    media: [

      {
        type: MEDIA_TYPE.CODE,
        codeText: `function createHexGrid(gs, w, m) {
          var r = ((w - margin) / (gs * 3 - 1));
          var hexW = sqrt(3) * r;
          var hexH = (2 * r);
          var rowAdd = 0;
          let start = createVector(
              (hexW / 2) * (gs - 1),
              (-hexH * 0.75) * (gs - 1)
          );
          for (let i = 0; i < (gs * 2) - 1; i++) {
              for (let y = 0; y < gs + rowAdd; y++) {
                  polygon(start.x - ((hexW) * y), start.y, r, m, 6);
              }
              if (i >= gs - 1) {
                  rowAdd -= 1;
                  start.x -= hexW / 2;
              } else {
                  rowAdd += 1;
                  start.x += hexW / 2;
              }
              start.y += hexH * 0.75;
          }
      }
      
      function polygon(x, y, r, m, n) {
          let a = TWO_PI / n;
          beginShape();
          vertex(x, y)
          r = r - m;
          for (let i = 0; i < TWO_PI; i += a) {
              let sx = x + sin(i) * r;
              let sy = y + cos(i) * r;
              vertex(sx, sy);
          }
          endShape();
      }`,
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/grados/patch.png',
        alt: ''
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/grados/grados_2.png',
        alt: ''
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/grados/grados_2.jpg',
        alt: ''
      },
    ],
  },

  { // 7
    id: 7,
    category: SECTION.PROYECTOS,
    navTitle: 'No-input',
    pathNav: '/projects/noinput',
    title: 'No-Input',
    details: {
      media: 'A/V Performance',
      year: '2022',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: "/images/interferencia_featured.jpg",
      alt: ''
    },
    description: [
      {
        language: 'es',
        value: "No input"
      },
      {
        language: 'en',
        value: "No input"
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: "/images/interferencia_1.jpg",
        alt: ''
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 7
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 7,
    category: SECTION.PROYECTOS,
    navTitle: 'Tiempo Profundo',
    pathNav: '/projects/tiempoprofundo',
    title: 'Tiempo Profundo',
    details: {
      media: 'A/V Performance',
      year: '2022',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: "/images/interferencia_featured.jpg",
      alt: ''
    },
    description: [
      {
        language: 'es',
        value: "Tiempo Profundo"
      },
      {
        language: 'en',
        value: "Tiempo profundo"
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: "/images/interferencia_1.jpg",
        alt: ''
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 8
  //----------------------------------------------------------------------------------------------------------------
  { // 8
    id: 8,
    category: SECTION.PROYECTOS,
    navTitle: 'Intraseñales',
    pathNav: '/projects/intrasignal',
    title: 'Intraseñales',
    details: {
      media: 'A/V Performance',
      year: '2023',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: "/images/interferencia_featured.jpg",
      alt: ''
    },
    description: [
      {
        language: 'es',
        value: "Interferencia emerge como un proyecto pionero en el cruce de la tecnología y el arte, buscando explorar las vastas posibilidades que se abren cuando estos dos mundos colisionan. A través de la creación de experiencias inmersivas, este proyecto se propone como un espacio de reflexión sobre cómo las nuevas tecnologías pueden alterar nuestra percepción de la realidad y fomentar nuevas formas de interacción humana. Con un enfoque en la innovación y la experimentación, Interferencia 1 invita a los participantes a sumergirse en un viaje sensorial único, donde la luz, el sonido y la interactividad se entrelazan para desafiar los límites de lo convencional y abrir caminos hacia nuevas dimensiones creativas."
      },
      {
        language: 'en',
        value: "Interference emerges as a pioneering project at the intersection of technology and art, seeking to explore the vast possibilities that open up when these two worlds collide. By creating immersive experiences, this project proposes itself as a space for reflection on how new technologies can alter our perception of reality and encourage new forms of human interaction. With a focus on innovation and experimentation, Interference 1 invites participants to immerse themselves in a unique sensory journey, where light, sound, and interactivity intertwine to challenge the boundaries of the conventional and pave the way to new creative dimensions."
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: "/images/interferencia_1.jpg",
        alt: ''
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 9
  //----------------------------------------------------------------------------------------------------------------

  {
    id: 9,
    category: SECTION.PROYECTOS,
    navTitle: 'Sistema nervioso Extendido',
    pathNav: '/projects/sne',
    title: 'Sistema nervioso Extendido #1 (Vista)',
    details: {
      media: 'Instalación',
      year: '2023',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: "/images/sne/sne_featured.jpg",
      alt: ''
    },
    description: [
      {
        language: 'es',
        value: "Sistema Nervioso Extendido #1 (Vista) es una inmersión profunda en el cruce entre el arte, la tecnología y la cultura de nuestro tiempo. Este proyecto desafía la predominancia actual de la imagen en movimiento en la era digital, abordando con seriedad y simplicidad cuestiones esenciales sobre la naturaleza y materialidad del audiovisual experimental. Exploramos el complejo laberinto de la obsolescencia de los soportes y las responsabilidades vinculadas a su preservación. Desde la 'arqueología de los media' hasta las nuevas narrativas poéticas, este proyecto nos conduce a una reevaluación de nuestras concepciones de archivo, apropiación y reedición en el panorama del arte contemporáneo."
      },
      {
        language: 'en',
        value: "Sistema Nervioso Extendido #1 (Vista) is a deep dive into the intersection of art, technology, and contemporary culture. This project challenges the current dominance of moving images in the digital age, addressing fundamental questions about the ontology and materiality of experimental audiovisuals. We explore the intricate maze of media obsolescence and the responsibilities tied to its preservation. From the 'archaeology of media' to new poetic narratives, this project guides us to reevaluate our notions of archive, appropriation, and re-edition within the landscape of contemporary art."
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: "/images/sne/sne_2.jpg",
        alt: ''
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: "/images/sne/sne_3.jpg",
        alt: ''
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 10
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 10,
    category: SECTION.PROYECTOS,
    navTitle: 'Interferencia',
    pathNav: '/projects/interferencia',
    title: 'Interferencia',
    details: {
      media: 'Instalación',
      year: '2023',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: "/images/interferencia/interferencia_featured.jpg",
      alt: ''
    },
    description: [
      {
        language: 'es',
        value: "Interferencia emerge como un proyecto pionero en el cruce de la tecnología y el arte, buscando explorar las vastas posibilidades que se abren cuando estos dos mundos colisionan. A través de la creación de experiencias inmersivas, este proyecto se propone como un espacio de reflexión sobre cómo las nuevas tecnologías pueden alterar nuestra percepción de la realidad y fomentar nuevas formas de interacción humana. Con un enfoque en la innovación y la experimentación, Interferencia 1 invita a los participantes a sumergirse en un viaje sensorial único, donde la luz, el sonido y la interactividad se entrelazan para desafiar los límites de lo convencional y abrir caminos hacia nuevas dimensiones creativas."
      },
      {
        language: 'en',
        value: "Interference emerges as a pioneering project at the intersection of technology and art, seeking to explore the vast possibilities that open up when these two worlds collide. By creating immersive experiences, this project proposes itself as a space for reflection on how new technologies can alter our perception of reality and encourage new forms of human interaction. With a focus on innovation and experimentation, Interference 1 invites participants to immerse themselves in a unique sensory journey, where light, sound, and interactivity intertwine to challenge the boundaries of the conventional and pave the way to new creative dimensions."
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: "/images/interferencia/interferencia_1.jpg",
        alt: ''
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: "/images/interferencia/interferencia_2.jpg",
        alt: ''
      },
    ],
  },



]

export default pagesData;

/**
 * PAGE_DATA
 * { 
 *  id: int, 
 *  category: SECTION, 
 *  navTitle: string, 
 *  pathNav: string, 
 *  title: string, 
 *  details: string, 
 *  featured: { MEDIA_TYPE }, 
 *  description [ { language: string, value: string } ], 
 *  media [ MEDIA_TYPE ] 
 * }
 */

/**
 * MEDIA_TYPE.IMAGE
 * { type: MEDIA_TYPE, src: string, alt: string }
 */

/**
 * MEDIA_TYPE.SOUNDCLOUD
 * { type: MEDIA_TYPE, url: string }
 */

