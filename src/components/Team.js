import React from "react";

import TeamCard from "./TeamCard";
import Titulo from "./common/Titulo";
import {
  Claudio,
  Yani,
  Gloria,
  Vivian,
  Ariel,
  Pedro,
  Marisol,
  Maria,
  Beatriz,
  Daniel,
} from "../config/constantes";

export default function Team() {
  //img, name, cargo, description, facebook, instagram
  return (
    <>
      <div>
        <Titulo
          clases="w-full md:w-1/2 mt-24"
          titulo="Coaches de Vuelabienalto"
        />
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mx-5 md:mx-12 lg:mx-16 my-8 break-normal">
          <TeamCard
            img={Ariel}
            name="Ariel Cabral"
            cargo="Coach Ontológico Profesional"
            description={["Post título en “Coaching Organizacional.”"]}
            facebook="https://www.facebook.com/hectorariel.cabral"
            instagram="https://www.instagram.com/hectorarielcabral/"
          />

          <TeamCard
            img={Claudio}
            name="Claudio Español"
            cargo="Coach Ontológico Profesional"
            description={[
              "Conferencista Internacional.",
              "Director de Soñaré Adolescentes Latinoamérica.",
              "Especialista en liderazgo y trabajo con jóvenes y adolescentes.",
            ]}
            facebook="https://www.facebook.com/Claudioenargentina"
            instagram="https://www.instagram.com/claudioespaoficial/"
          />

          <TeamCard
            img={Yani}
            name="Yanina Martínez"
            cargo="Coach Ontológico Profesional"
            description={[
              "Técnica en RRHH, especialista en Selección y Reclutamiento.",
              "POST TÍTULO EN COACHING ORGANIZACIONAL (ECOA) 2020.",
            ]}
            facebook="https://www.facebook.com/yanina.martinez.338211"
            instagram="https://www.instagram.com/yanimartinezoficial/"
          />

          <TeamCard
            img={Gloria}
            name="Gloria Sawaguchii"
            cargo="Coach Ontológico Profesional"
            description={[
              "Masoterapeuta.",
              "Instructora de la lengua Japonesa.",
            ]}
            facebook="https://www.facebook.com/gloriamitsue.sawaguchi"
            instagram=""
          />

          <TeamCard
            img={Vivian}
            name="Vivian Margall"
            cargo="Coach Ontológico Profesional"
            description={[
              "Masoterapeuta.",
              "Capacitadora en distintas áreas de Estética y Belleza.",
            ]}
            facebook="https://www.facebook.com/vivian.margall"
            instagram="https://www.instagram.com/vivianmargall/"
          />

          <TeamCard
            img={Pedro}
            name="Pedro Valenzuela"
            cargo="Coach Ontológico Profesional"
            description={[]}
            facebook="https://www.facebook.com/papache22"
            instagram="https://www.instagram.com/pedrovalenzuela65/"
          />
        </div>
        <Titulo
          clases="w-full md:w-1/2 mt-24"
          titulo="Equipo de Comunicación"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mx-5 md:mx-12 lg:mx-16 my-8 break-normal">
          <TeamCard
            img={Marisol}
            name="Tania Marisol Riquelme"
            cargo="Líder Transformacional"
            description={[]}
            facebook="https://www.facebook.com/TaniaMarisolPR"
            instagram="https://www.instagram.com/marisolriquelmeok/"
          />
        </div>
        <Titulo
          clases="w-full md:w-1/2 mt-24"
          titulo="Facilitadores de Vuelabienalto"
        />
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mx-5 md:mx-12 lg:mx-16 py-8 break-normal">
          <TeamCard
            p3={true}
            img={Maria}
            name="María del Carmen Aguirre"
            cargo="Esp. en Comunicación No Verbal"
            description={[
              "Abogada. Escribana",
              "Locutora Nacional",
              "Conferencista",
            ]}
            facebook="https://www.facebook.com/mariadelcarmen.aguirre.7"
            instagram="https://www.instagram.com/mariaaguirre_ok/"
          />

          <TeamCard
            img={Beatriz}
            name="Beatríz Ruiz"
            cargo="Consteladora Familiar"
            description={["Coach de Vida", "Consteladora Familiar"]}
            facebook="https://www.facebook.com/BeatrizRuizCoaching"
            instagram="https://www.instagram.com/beatrizruizcoach/"
          />

          <TeamCard
            img={Daniel}
            name="Daniel Suárez"
            cargo="Máster en Inteligenia Emocional"
            description={[]}
            facebook="https://www.facebook.com/danielopinemos"
            instagram=""
          />
        </div>
      </div>
    </>
  );
}
