import React from "react";
import HeaderPages from "../../../components/common/HeaderPages";
import ItemList from "../../../components/common/ItemList";
import FamiliarConstTopic from "./FamiliarConstTopic";
import Titulo from "../../../components/common/Titulo";
import {
  ConstFamiliaresPage,
  Conflicto,
  Conflicto2,
} from "../../../config/constantes";
import { WhatsappButton } from "../../../components/common/Buttons";
import { AiFillStar } from "react-icons/ai";

export default function FamiliarConst() {
  return (
    <>
      <HeaderPages
        title="Diplomado de Constelaciones Familiares"
        image={ConstFamiliaresPage}
      />
      <h2
        className="text-black font-rubik font-black text-4xl text-center md:text-4xl mx-8 mt-32 "
        style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
      >
        ¿Que son las Constelaciones Familiares?
      </h2>

      <section className="relative mt-4">
        <div className="skew-up-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 dark-ocean py-24 px-6">
          <div className="text-white text-lg flex items-center">
            <p>
              Las{" "}
              <span className="font-semibold text-primary">
                Constelaciones Familiares
              </span>{" "}
              nos permiten observar cómo se relaciona y se comporta el sistema
              familiar alrededor de un conflicto. En función del lugar que
              ocupan las personas implicadas se detecta cuáles son las
              alteraciones o desórdenes dentro del sistema familiar en cuestión.
            </p>
          </div>
          <div className="flex flex-col items-center mt-12 sm:flex-row sm:justify-around sm:mt-8">
            <img
              className="mx-12 md:mx-0 w-9/12 sm:w-2/5 md:w-48 lg:w-64 object-cover border-8 transform -rotate-2 md:mb-0 mb-12"
              src={Conflicto}
              alt="Conflictos Familiares"
            />
            <img
              className="mx-12 md:mx-0 w-9/12 sm:w-2/5 md:w-48 lg:w-64 object-cover border-8 transform -rotate-4"
              src={Conflicto2}
              alt="Problemas de Familia"
            />
          </div>
        </div>
        <div className="skew-bottom-12"></div>
      </section>

      <div className="mx-8 md:mx-20 py-12 text-lg flex flex-col justify-center">
        <p className="pt-2">
          El diplomado busca formar expertos con recursos en competencias
          sistemáticas, científicas, filosóficas y espirituales, que permita la
          comprensión y abordaje en los casos a resolver como futuros
          consteladores de familia. Es una oportunidad para descubrir nuevas
          maneras de relacionarte con tu familia (pareja, hijos, hermanos, etc.)
          y comprender cómo los vínculos y relaciones pueden ser sanos y
          funcionales con orden y amor.
        </p>
        <p className="pt-2">
          Formación avalada por la Confederación Mundial de Coaches
          Profesionales, Asociación Latinoamericana de Coaches, Fundación
          Universitaria Regional de Rio Tercero.
        </p>
      </div>

      <div className="mx-8 md:mx-24">
        <Titulo titulo="Contenido Temático" clases="mb-12 w-full md:w-1/2" />
        <FamiliarConstTopic />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 mx-8 text-white">
        <div>
          <h2
            className="text-black font-rubik font-black text-4xl my-6"
            style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
          >
            ¿Qué Lograrás?
          </h2>
          <ItemList
            num="1"
            content="Reconocer el valor de las constelaciones familiares."
          />
          <ItemList
            num="2"
            content="Respetar el rol que cumple cada sujeto dentro de una familia. "
          />
          <ItemList
            num="3"
            content="Utilizar técnicas que promuevan competencias significativas."
          />
          <ItemList
            num="4"
            content="Construir espacios que propicien constelaciones."
          />
          <ItemList
            num="5"
            content="Aprenderás cómo se constituye nuestra percepción, cómo determina nuestras reacciones emocionales y qué podemos hacer para cambiarla."
            clase="text-sm md:text-lg"
          />
          <ItemList
            num="6"
            content="Descubrirás la influencia que ejerce nuestro mapa mental y nuestras creencias en las experiencias que vivimos."
            clase="text-sm md:text-lg"
          />
        </div>

        <div className="flex items-center flex-col">
          <h2
            className="text-black font-rubik font-black text-4xl mx-8 mt-6 mb-2"
            style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
          >
            Contáctanos
          </h2>
          <div className="flex justify-center items-center mb-2">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-black text-xl md:text-2xl font-bold italic">
                Alcance la Diplomatura:
              </h2>
              <div className="flex items-baseline">
                <AiFillStar className="text-primary" />{" "}
                <p className="text-gray-700 sm:text-lg">
                  Diplomado en Constelador/a Familiar
                </p>{" "}
                <AiFillStar className="text-primary" />
              </div>
              <h3 className="text-black text-xl md:text-2xl font-bold italic">
                Duración:
              </h3>
              <p className="text-gray-700 sm:text-lg font-medium ">
                9 meses, 1 encuentro intensivo por mes
              </p>
            </div>
          </div>
          <WhatsappButton title="Consultas" />
        </div>
      </div>
    </>
  );
}
