import React from 'react';
import DownloadButton from '../components/pure/downloadButton';

const file = "http://localhost:3000/images/interferencia/interferencia_featured.jpg";
const filetext = "Download CV ";

const Bio = () => {
  return (
    
    

    <section className='container text-left px-0 overflow-hidden'>
      
      <div className='about-header row align-items-center'>
        <h1>Bio & CV</h1>
        
      </div>

      <div className='about-body row align-items-center pt-4'>

        <div className="bio ">
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>
              Jorge Sánchez Dabaliña is a visual artist and designer based in Valencia, Spain. Jorge is pursuing his masters in multimedia & visual arts at the Politechnic University of Valencia. He is currently a researcher investigating new imaginaries for self-generative and live performed video, with an emphasys in modular programming enviroments and outdated video hardware.
            
            </li>
            
          </ul>
          <ul  className='list-group mb-4'><li className='list-group-item px-4'><div><DownloadButton fileUrl={file} fileText={filetext}/> </div></li></ul>
          

          
        </div>

        <div className="studies">
          <h3>Studies</h3>
          <ul className='list-group mb-4'>

            <li className='list-group-item px-4'>
              PhD student in the Art: Production and Research programme (Universitat Politècnica de València - 2022 - present)
            </li>
            <li className='list-group-item px-4'>
              Master's Degree in Visual Arts and Multimedia (Universitat Politècnica de València, 2020 - 2022)              </li>
            <li className='list-group-item px-4'>
              Degree in Design and Creative Technologies (Universitat Politècnica de València, 2016 - 2020)

            </li>
            <li className='list-group-item px-4'>
              Course S3D201x: Spatial and 3D Sound (UPValenciaX, Universitat Politècnica de València via edX, 2023)
            </li>
          </ul>
        </div>

        <div className="Grants">
          <h3>Grants</h3>
          <ul className='list-group mb-4'>

            <li className='list-group-item px-4'>
              “1.1 grados”, award-winning project in the call for #CMCVaCasa Cultura Online 2023 (Consorci de Museus de la Comunitat Valenciana, 2023)              </li>
            <li className='list-group-item px-4'>
              “Intra-señales”, project awarded in the call for Artistic and Cultural Residencies 2022 (Ajuntament de València, 2023)
            </li>
            <li className='list-group-item px-4'>
              Honourable mention in the Master's Final Project (Master's Degree in Visual Arts and Multimedia, 2022)
            </li>
            <li className='list-group-item px-4'>
              “1.1 grados”, project awarded in the call for Artistic and Cultural Residencies 2021 (Ajuntament de València, 2022)              </li>
            <li className='list-group-item px-4'> Members of the “Laboratorio de Luz” research group (Universitat Politècnica de València, 2022 - present)</li>
            <li className='list-group-item px-4'>Members of the “Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico” research project (Universitat Politècnica de València, 2022 - present)</li>
          </ul>
        </div>

        <div className="performances">
          <h3>Performances</h3>
          <ul className='list-group mb-4'>




            <li className='list-group-item px-4'>
              Realisation of the Live A/V “Tiempo profundo”, at the “Sonology Conference” (Conservatori Superior de Música “Joaquín Rodrigo” de València, 2023), in the “CampD.lab” (Port de Sagunt, 2022), in the “Seminario Sónico” of the Universidad de Alicante (Secadero - Las Cigarreras, 2022), in the conference “Landscape and Sustainability: Listening to Diversity” (Matadero - Madrid, 2022), at the “Volumens 2022 Festival” (La Fábrica de Hielo - València, 2022), at the “LASERTALK Leonardo ‘Futuros pasados ACTS en Valencia’” (Veles e Vents - València, 2022) and at the “International Short Film Festival” (Radiocity - València, 2022)
            </li>

            <li className='list-group-item px-4'>
              Realisation of the open show “Laboratorio de fantasmas”, together with the research project "Argos", within the festival “Dansa València” (Teatre Rialto - València, 2022)
            </li>

            <li className='list-group-item px-4'>
              Realisation of the Live A/V “NoInput”, together with the collective PDP-11, in the conference “LASERTalk Leonardo ‘Interpretando code and life. Art and Science of Bio-IA’ (Centre del Carme Cultura Contemporània - València, 2022) and in the festival “Live Performers Meeting 2022” (Nuovo Cinema Aquila - Rome, 2022)
            </li>

            <li className='list-group-item px-4'>
              Realisation of the Live A/V “Invisible / Inaudible”, together with the research project “Argos”, in the “Sonic Seminar” of the Universidad de Alicante (Secadero, Las Cigarreras - Alicante, 2022) and in the congress “Paisaje y sostenibilidad: Listening to diversity” (Matadero - Madrid, 2022)
            </li>

            <li className='list-group-item px-4'>
              Realisation of the Live A/V “Ecos”, together with the research project “Argos”,  in the “V International Congress on Visual Arts Research ANIAV 2022” (Universitat Politècnica de Valencia, 2022)
            </li>

            <li className='list-group-item px-4'>
              Production of the Live A/V “1.1 grados”, within the “Residencies for Artistic Creation 2021” (Ajuntament de València, 2022)
            </li >

            <li className='list-group-item px-4'>
              Production of the Live A/V “Hin und Zurück”, together with Sergio Lecuona, on the “Export by VOlumens” stage at the “Love To Rock” festival (Veles e Vents - València, 2021)
            </li>

            <li className='list-group-item px-4'>
              Live visuals, together with Irene Sánchez, in the performance “The room above” by the sound artist Luca Forcucci, as part of “Live_Panoramas EXP” in the international exhibition “PANORAMA_EXP de PANORAMAS 2021” (Sala Josep Renau - Universitat Politècnica de València, 2021)
            </li>




          </ul>
        </div>

        <div className="exhibitions">
          <h3>Exhibitions</h3>
          <ul className='list-group mb-4'>

            <li className='list-group-item px-4'>
              Exhibition and performance of the research project “Argos” under the title “PROY. ARGOS EXP.1” at the Exhibition Hall of the Faculty of Fine Arts (Universidad de Málaga, 2022)
            </li>

            <li className='list-group-item px-4'>
              Exhibition and production of the audiovisual show “1.1 grados” at the Youth stand of the València City Hall in “ExpoJove” (Feria Valencia, 2022), in the exhibition of the presentation of the Artistic and Cultural Residencies 2021 of Ajuntament de València (Espai Jove VLC, 2022) and at “Expociència 2022” (Parc Científic de la Universitat de València - Valencia, 2022)
            </li>

            <li className='list-group-item px-4'>
              Premiere and continuous projection during the month of August of the work “Exploración entrelazada” and during October of the work “Transcurrir” in the Fachada Media of Etopia Centro de Arte y Tecnología (Zaragoza, 2021)
            </li>

            <li className='list-group-item px-4'>
              Premiere of the work "Presa", made together with Irene Sánchez, in the international exhibition “PANORAMA_EXP de PANORAMAS 2021” (Sala Josep Renau - UPV, 2021) and exhibition in the conference "Landscape and Sustainability: Listening to Diversity" (Matadero - Madrid, 2022) and in the “LASERTALK Leonardo ‘Futuros pasados ACTS en Valencia’” (Veles e Vents - València, 2022)
            </li>

            <li className='list-group-item px-4'>
              Premiere of the work “Del otro lado” and “Percepcions” in “Short PAM!21” (La Filmoteca, 2021)
            </li>



          </ul>

        </div>
      </div>

    </section>
  );
}

export default Bio;
