import React from "react";
import HeaderPages from "../../../components/common/HeaderPages";
import { CoachingPage, coaches2020, lideres } from "../../../config/constantes";
import ItemList from "../../../components/common/ItemList";
import { AiFillStar } from "react-icons/ai";
import {
  WhatsappButton,
  PaymentsMethodButton,
} from "../../../components/common/Buttons";
import ScrollToTopArrow from "../../../components/common/ScrollToTopArrow";

export default function CoachingOntologico() {
  return (
    <>
      <ScrollToTopArrow />
      <HeaderPages
        title="Coaching Ontológico Profesional"
        image={CoachingPage}
      />
      <div className="mx-8 md:mx-20 py-12 text-lg mt-32 flex flex-col justify-center">
        <p>
          La carrera de{" "}
          <span className="font-semibold text-blue-800">
            Coaching Ontológico Profesional
          </span>{" "}
          brinda a sus estudiantes una formación orientada en cubrir aquellas
          necesidades importantes para las personas.
        </p>
        <p className="pt-2">
          Ofrece recursos, herramientas, técnicas y habilidades para que, a
          través de las charlas de acompañamiento, cursos, talleres y sesiones
          individuales o grupales, puedan desarrollar resultados concretos
          medibles y rápidos, aprendiendo en acción, creando la{" "}
          <span className="font-semibold text-blue-800">
            transformación personal
          </span>
          , para luego poder asistir a otros en sus transformaciones personales.
          Ayuda a reconocer las necesidades en cuanto al aprovechamiento del
          tiempo para lograr un equilibrio entre todas las áreas/disciplinas de
          la vida.
        </p>
        <h2
          className="font-rubik font-black text-xl  pt-2"
          style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
        >
          La duración es de dos años.
        </h2>
      </div>
      <section className="relative mt-4">
        <div className="skew-up-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 dark-ocean pt-24 px-6">
          <div className="text-white sm:text-lg md:text-xl mx-4 pt-12">
            <h2
              className="font-rubik font-black text-4xl md:text-6xl"
              style={{ textShadow: "black 0.1em 0.1em 0.2em" }}
            >
              Primer año
            </h2>
            <p>
              Se lleva a cabo la formación teórica articulado con el proceso
              personal de cada estudiante. Con certificación intermedia:
            </p>
            <div className="flex items-baseline w-full">
              <AiFillStar className="text-primary mr-2 md:flex hidden" />
              <p className="text-center lg:w-auto lg:text-left pt-2 font-semibold">
                Diplomado en Liderazgo Transformacional
              </p>
              <AiFillStar className="text-primary ml-2 md:flex hidden" />
            </div>
          </div>
          <div className="flex justify-center items-center mx-2 sm:mx-4 md:mt-16 mt-8">
            <img
              src={lideres}
              alt="equipo2019"
              className="w-full md:w-3/4 border-8 transform -rotate-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 dark-ocean pb-32 px-6">
          <div className="text-white sm:text-lg md:text-xl mx-4 md:pt-20">
            <h2
              className="font-rubik font-black text-4xl md:text-6xl"
              style={{ textShadow: "black 0.1em 0.1em 0.2em" }}
            >
              Segundo año
            </h2>
            <p>
              Se profundiza en la teoría y práctica de coaching profesional con
              el proceso de certificación. Con certificación en:
            </p>
            <div className="flex items-baseline w-full py-2">
              <div className="md:flex hidden">
                <AiFillStar className="text-primary" />
                <AiFillStar className="text-primary" />
                <AiFillStar className="text-primary" />
              </div>
              <p className="pt-2 mx-2 md:text-center font-semibold">
                Coach Ontológico Profesional{" "}
              </p>
              <div className="md:flex hidden">
                <AiFillStar className="text-primary" />
                <AiFillStar className="text-primary" />
                <AiFillStar className="text-primary" />
              </div>
            </div>
            <p>
              Formación avalada por la Asociación Latinoamérica de Coaches,
              Confederación Mundial de Coaches Profesionales, Fundación
              Universitaria Regional de Rio Tercero, The Society of
              Neuro-Linguistic Programming.
            </p>
          </div>
          <div className="flex justify-center items-center mx-2 sm:mx-4 mt-12 md:mt-0">
            <img
              src={coaches2020}
              alt="equipo2019"
              className="w-full md:w-3/4 border-8 transform -rotate-3"
            />
          </div>
        </div>
        <div className="skew-bottom-12"></div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 mx-8 text-white">
        <div>
          <h2
            className="text-black font-rubik font-black text-4xl md:text-5xl my-6"
            style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
          >
            ¿Qué Lograrás?
          </h2>
          <ItemList num="1" content="Conocer que es lo se quiere." />
          <ItemList num="2" content="Accionar hacia los objetivos." />
          <ItemList
            num="3"
            content="Agudeza sensorial para reconocer lo que estamos obteniendo."
          />
          <ItemList
            num="4"
            content="Ser flexible, cambiar hasta obtener el resultado deseado."
          />
        </div>

        <div className="flex items-center flex-col">
          <h2
            className="text-black font-rubik font-black text-4xl md:text-5xl mx-8 mt-6"
            style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
          >
            Contáctanos
          </h2>
          <WhatsappButton title="Consultas" />
          <PaymentsMethodButton
            title="1° Año: Liderazgo Transformacional"
            enlace="https://mpago.la/2pvCKXL"
          />
          <PaymentsMethodButton
            title="2° Año: Coaching Ontológico Profesional"
            enlace="https://mpago.la/2mTZtYt"
          />
        </div>
      </div>
    </>
  );
}
