import React from "react";
import HeaderPages from "../../../components/common/HeaderPages";
import ItemList from "../../../components/common/ItemList";
import { masoterapia, massage, spa } from "../../../config/constantes";
import { WhatsappButton } from "../../../components/common/Buttons";
import { AiFillStar } from "react-icons/ai";

export default function Masoterapia() {
  return (
    <>
      <HeaderPages title="Diplomado en Masoterapia" image={masoterapia} />
      <h2
        className="text-black font-rubik font-black text-4xl text-center md:text-4xl mx-8 mt-32 mb-10"
        style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
      >
        ¿Que es la Masoterapia?
      </h2>
      <div className="font-rale text-lg mx-12">
        <p className="pt-2">
          La <span className="text-blue-700 font-semibold">Masoterapia</span> se
          puede definir como el uso de distintas técnicas de masaje con fines
          terapéuticos, esto es, para el tratamiento de enfermedades y lesiones:
          en este caso, es una técnica integrada dentro de la fisioterapia.
        </p>
        <h2 className="font-semibold italic ">
          Esta capacitación está orientada a todo público interesado en la
          práctica de la terapia de masajes.{" "}
        </h2>
      </div>

      <section className="relative mt-4">
        <div className="skew-up-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 dark-ocean pt-16 px-6">
          <div className="text-white sm:text-lg md:text-xl mx-4 pt-12 pb-20">
            <div className="flex justify-center pb-6">
              <img className="animate-bounce w-32" src={massage} alt="masaje" />
              <img
                className="animate-bounce w-32"
                style={{ animationDelay: "0.8s" }}
                src={spa}
                alt="spa"
              />
            </div>
            <p className="break-words">
              Al adquirir el conocimiento y las distintas técnicas del masaje,
              se habilita la posibilidad de tener un propio proyecto de montaje
              de gabinete, con consideradas instalaciones de ambiente y las
              herramientas de trabajo necesarias. Aportando así, un servicio
              eficaz y beneficioso al cliente receptor; ofreciendo un tiempo de
              relajación y bienestar. Con el fin de lograr un masajista
              profesional, ofreciendo un servicio de bienestar física, mental y
              anímica.
            </p>
          </div>
          <div className="text-white pt-4 pb-8 md:pb-0">
            <h2
              className="font-rubik font-black text-4xl md:text-6xl mb-2"
              style={{ textShadow: "black 0.1em 0.1em 0.2em" }}
            >
              ¿Qué lograrás?
            </h2>
            <ItemList
              num="1"
              content="Hacer uso de los diversos tipos de masajes (Relajante, Descontracturante, Linfodrenaje y Circulatorio), de manera adecuada y con resultados óptimos en el cliente."
            />
            <ItemList
              num="2"
              content="Obtener conocimientos necesarios del cuerpo humano y la practicidad que ofrece las diversas técnicas de masajes."
            />
          </div>
        </div>
        <div className="skew-bottom-12"></div>
      </section>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6
         w-full"
      >
        <div className=" h-48 flex justify-center items-center">
          <div className="py-6  flex flex-col items-center text-center">
            <p className="text-gray-700 text-2xl font-semibold ">
              Alcance la Diplomatura:
            </p>
            <div className="flex items-baseline">
              <AiFillStar className="text-primary" />{" "}
              <p className="text-black sm:text-lg">Masajista Profesional</p>{" "}
              <AiFillStar className="text-primary" />
            </div>
            <p className="text-gray-700 text-2xl font-semibold ">
              Duración 9 meses
            </p>
            <p>1 nivel por trimestre (6 clases por trimestre)</p>

            <p>
              <span className="text-gray-700 text-lg font-semibold ">
                Cuota:
              </span>{" "}
              $
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col py-4">
          <WhatsappButton title="Consultas" />
          {/* <PaymentsMethodButton title="Inscripción" clases="pt-1" /> */}
        </div>
      </div>
    </>
  );
}
