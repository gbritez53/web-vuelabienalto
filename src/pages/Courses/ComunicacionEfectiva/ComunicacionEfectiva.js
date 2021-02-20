import React from "react";
import HeaderPages from "../../../components/common/HeaderPages";
import { Oratoria, Talk, science, chat } from "../../../config/constantes";
import ItemList from "../../../components/common/ItemList";
import { WhatsappButton } from "../../../components/common/Buttons";

export default function ComunicacionEfectiva() {
  return (
    <>
      <HeaderPages
        title="Diplomado En Comunicación Efectiva y Oratoria"
        image={Oratoria}
      />
      <h2
        className="text-black font-rubik font-black text-4xl text-center md:text-4xl mx-8 mt-32 mb-8"
        style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
      >
        Comunicación Efectiva
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8">
        <div>
          <p>
            Todas las personas nos comunicamos diariamente de distintas maneras
            y en distintas situaciones. Pero no todos logramos hacerlo
            exitosamente. Incluso muchos profesionales que son grandes
            especialistas en sus disciplinas, cuando no logran transmitir
            convincentemente sus conocimientos pierden valiosas oportunidades.
          </p>
          <p className="pt-2">
            En otros casos, hablar en público se puede convertir en una
            experiencia difícil y frustrante para muchas personas. Pero lo
            cierto es que, a través de estrategias argumentativas es posible
            dominar y perfeccionar el arte de hablar correctamente frente a un
            auditorio.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className="h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg"
            style={{ width: "19rem" }}
          >
            <img className="w-full object-cover" src={Talk} alt="dialogo" />
          </div>
        </div>
      </div>
      <section className="relative mt-4">
        <div className="skew-up-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 dark-ocean pt-16 px-6">
          <div className="text-white sm:text-lg md:text-xl mx-4 py-12">
            <div className="flex justify-center mb-8">
              <img
                className="animate-bounce w-32 mr-3"
                src={science}
                alt="ciencia"
              />
              <img
                className="animate-bounce w-32"
                style={{ animationDelay: "0.8s" }}
                src={chat}
                alt="comunicacion"
              />
            </div>
            <p>
              La ciencia de la comunicación nos enseña que no alcanza con tener
              algo para decir, es imprescindible buscar la mejor forma de
              expresar nuestras ideas para lograr comunicarnos exitosamente, y
              alcanzar los objetivos que nos proponemos en la vida. Porque no
              sólo importa qué decir, sino cómo decirlo. Por eso, este diplomado
              optimiza la perspectiva interdisciplinaria en los ámbitos
              personales, familiares, laborales, afectuosos, sociales,
              espirituales y comunicacionales.
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
              content="Manejo del lenguaje – las emociones – la corporalidad."
            />
            <ItemList
              num="2"
              content="Profundizar los niveles de la comunicación.
"
            />
            <ItemList
              num="3"
              content="AgAprender los sistemas representacionales. 
            "
            />
            <ItemList
              num="4"
              content="Conocer aprendizajes en las emociones del orador.
            "
            />
            <ItemList
              num="5"
              content="rticular el lenguaje no verbal y el ordenamiento de la información.
            "
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
              Duración 9 meses
            </p>
            <p>
              <span className="text-gray-700 text-lg font-semibold ">
                Modalidad:
              </span>{" "}
              Online - vía Zoom
            </p>

            <p>
              <span className="text-gray-700 text-lg font-semibold ">
                Cuota:
              </span>{" "}
              $2.500 (primeros 4 meses) + IVA $3.025
            </p>
            <p>$3.000 + IVA $3.630</p>
            <p className="break-words">
              <span className="text-gray-700 text-lg font-semibold ">
                Certificación:
              </span>{" "}
              100 dólares (cotización del día en que se abona) a pagarse con un
              mes de anticipación.
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
