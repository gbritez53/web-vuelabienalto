import React from "react";
import HeaderPages from "../../../components/common/HeaderPages";
import ItemList from "../../../components/common/ItemList";
import ScrollToTopArrow from "../../../components/common/ScrollToTopArrow";
import { pensando } from "../../../config/constantes";
import { WhatsappButton } from "../../../components/common/Buttons";
import { Helmet } from "react-helmet";

export default function PNL() {
  return (
    <div>
      <Helmet>
        <title>Diplomado en PNL | Vuelabienalto</title>
        <meta
          name="description"
          content="Domina la PNL y aprende técnicas increibles de la mano del director de Vuelabienalto - Diego Martínez"
        />
      </Helmet>
      <ScrollToTopArrow />
      <HeaderPages
        title="Diplomado de Programación Neuro Lingüística"
        image="https://cdn2.hubspot.net/hubfs/3304491/iStock-497487570.jpg"
      />

      <div className="pt-24">
        <div className="w-32 md:w-48 mx-auto">
          <img src={pensando} alt="imagen" className="h-full w-full" />
        </div>
        <h2 className="text-center text-2xl md:text-3xl font-bold mx-4">
          Quizás te estés preguntando ¿Para qué me sirve la PNL?
        </h2>
        <div className="my-4 mx-6 sm:mx-8 md:mx-32 ">
          <p>
            La{" "}
            <span className="font-semibold text-blue-800">
              Programación Neuro Lingüística
            </span>{" "}
            es una herramienta que, si es bien desarrollada, mejora la vida
            laboral y las relaciones interpersonales.
          </p>
          <p className="my-1">
            Te ayuda a desprogramar las conductas y estados de ánimo limitantes.
            Aprenderás a responder de forma positiva ante los estímulos que nos
            generan emociones negativas.
          </p>
          <p className="my-1">
            Te permite a desenvolverse en favor de tus objetivos.
          </p>
          <p>
            Utilizarás la comunicación trasladando tus pensamientos positivos a
            tu lenguaje verbal y corporal. Estimularás tu creatividad y la
            motivación para lograr tus objetivos personales de forma eficaz y
            sin sufrir ante las situaciones conflictivas
          </p>

          <p className="mt-2 mb-4">
            Para aprender como algunas personas sobresalen en un campo y como
            enseñar esos patrones a otros. El proceso de aprender como una
            persona hace algo de manera excelente y enseñar esos patrones se
            conoce con el nombre de modelado.
          </p>
        </div>

        <section className="mt-12 relative">
          <div className="skew-up-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 dark-ocean pt-24 px-6">
            <div className="text-white text-lg md:text-xl mx-4 my-8">
              <p className="break-words">
                Con este diplomado aprenderás a responder de forma positiva ante
                los estímulos generados por emociones negativas. Podrás
                desenvolverte en favor de tus objetivos. Te brindará los
                conocimientos de la comunicación para trasladar los pensamientos
                positivos al lenguaje verbal y corporal.
              </p>
              <p className="pt-4 break-words">
                Habilita la estimulación de la creatividad y la motivación para
                lograr los objetivos personales de manera eficaz.
              </p>
            </div>
            <div className="flex justify-center items-center mx-2 sm:mx-8 mt-12 mb-20 md:mt-0">
              <div className="text-white sm:text-lg md:text-xl mx-4">
                <h2
                  className="font-rubik font-black text-4xl md:text-6xl mb-2"
                  style={{ textShadow: "black 0.1em 0.1em 0.2em" }}
                >
                  ¿Qué lograrás?
                </h2>
                <ItemList num="1" content="Conocer que es lo que quieres." />
                <ItemList
                  num="2"
                  content="Accionar hacia los objetivos.
"
                />
                <ItemList
                  num="3"
                  content="Agudeza sensorial para reconocer lo que estamos obteniendo.
            "
                />
                <ItemList
                  num="4"
                  content="Ser flexible, cambiar hasta obtener el resultado deseado.
            "
                />
              </div>
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
                10 meses, 2 encuentros mensuales
              </p>
              <p>Horario: De 18:00 a 22:00 Hs</p>

              <p>Cuota Mensual: $3500 + IVA $4235</p>
              <p className="break-words">
                Certificación Internacional: 100 U$D (Pagar 30 días antes de la
                finalización)
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col py-4">
            <WhatsappButton title="Consultas" />
            {/* <PaymentsMethodButton title="Inscripción" clases="pt-1" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
