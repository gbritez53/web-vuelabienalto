import React from "react";
import CourseCard from "../../../components/CourseCard";
import HeaderPages from "../../../components/common/HeaderPages";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ScrollToTopArrow from "../../../components/common/ScrollToTopArrow";

import {
  PNL,
  ConstFamiliares,
  Coaching,
  Oratoria,
  masoterapia,
  Proximamente,
} from "../../../config/constantes";

function CoursesList() {
  return (
    <div className="bg-gray-200 w-full">
      <Helmet>
        <title>Vuelabienalto | Diplomados y Cursos</title>
        <meta
          name="description"
          content="Aquí encontrarás la Carrera de Coaching Ontológico Profesional y todos nuestros diplomados y cursos que tenemos para ti."
        />
      </Helmet>
      <ScrollToTopArrow />
      <HeaderPages
        title="Cursos"
        subtitle="Conoce Nuestras Carreras, Diplomados y Cursos"
        image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />

      <div className="bg-darkblue text-primary text-center rounded-lg mt-24 w-56 mx-auto">
        <h2 className="font-rubik text-2xl md:text-3xl font-semibold py-2 px-8">
          Carreras
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 py-12 mx-10 md:mx-24">
        <Link to="cursos/coaching">
          <CourseCard
            img={Coaching}
            title="Coaching Ontológico"
            alt="coaching ontológico profesional"
            description={[
              "La carrera de Coaching Ontológico profesional brinda a sus estudiantes una formación orientada en cubrir aquellas necesidades importantes para las personas",
              "",
            ]}
          />
        </Link>

        <CourseCard
          img={Proximamente}
          title="Coaching Organizacional"
          alt="coaching Organizacional"
          disabled="true"
          description={[
            "¿Qué es el Coaching Organizacional?",
            "Proximamente en Vuelabienalto, No te pierdas esta carrera cuando se lance! vuelabienalto 2021",
          ]}
        />

        <CourseCard
          img={Proximamente}
          title="Coaching Educativo"
          alt="coaching Educativo"
          disabled="true"
          description={[
            "¿Qué es el Coaching Educativo?",
            "Proximamente en Vuelabienalto, No te pierdas esta carrera cuando se lance! vuelabienalto 2021",
          ]}
        />
      </div>

      <div className="bg-darkblue text-primary text-center rounded-lg  w-56 mx-auto ">
        <h2 className="font-rubik text-2xl md:text-3xl font-semibold py-2 px-8">
          Diplomados
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 py-12 mx-10 md:mx-24">
        <Link to="cursos/pnl">
          <CourseCard
            img="https://cdn2.hubspot.net/hubfs/3304491/iStock-497487570.jpg"
            title="Programación Neuro Lingüística"
            alt="PNL"
            description={[
              "Quizás te estás preguntando ¿Para qué me sirve la PNL?",
              "La Programación Neuro Lingüística es una herramienta...",
            ]}
          />
        </Link>

        <Link to="/cursos/constelaciones-familiares">
          <CourseCard
            img={ConstFamiliares}
            title="Constelaciones Familiares"
            alt="Constelaciones Familiares"
            description={[
              "¿Qué son las Constelaciones Familiares?",
              "Formar un profesional con herramientas teóricas, prácticas...",
            ]}
          />
        </Link>

        <Link to="/cursos/comunicacion-efectiva">
          <CourseCard
            img={Oratoria}
            title="Comunicación Efectiva y Oratoria"
            alt="Comunicación efectiva y oratoria"
            description={[
              "Todas las personas nos comunicamos diariamente de distintas maneras y en distintas situaciones.",
            ]}
          />
        </Link>

        <Link to="/">
          <CourseCard
            img={PNL}
            title="Inteligenica Emocional"
            alt="Inteligencia Emocional"
            description={[
              "¿Qué es la Inteligencia Emocional?",
              "La Inteligencia Emocional nos permite tomar conciencia de nuestras emociones",
              "comprender los sentimientos de ...",
            ]}
          />
        </Link>

        <Link to="/cursos/masoterapia">
          <CourseCard
            img={masoterapia}
            title="Masoterapia"
            alt="Masoterapia"
            description={[
              "¿Qué es la Masoterapia?",
              "Formar un profesional con herramientas teóricas, prácticas, pedagógicas...",
            ]}
          />
        </Link>
      </div>
    </div>
  );
}

export default CoursesList;
