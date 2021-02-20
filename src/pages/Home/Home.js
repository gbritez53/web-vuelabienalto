import React from "react";
import Hero from "../../components/Hero";
import VideoHome from "../../components/VideoHome";
import { Helmet } from "react-helmet";
import { Team2019, LogoALC, LogoCMC, FURRT } from "../../config/constantes";
import ScrollToTopArrow from "../../components/common/ScrollToTopArrow";

export default function Home() {
  return (
    <div className="w-screen bg-gray-200">
      <Helmet>
        <title>Inicio | Vuelabienalto</title>
        <meta
          name="description"
          content="Vuelabienalto es una escuela de coaching que nació, como un emprendimiento en agosto del 2017, todo comenzó con el sueño de Diego Javier Martínez quien reunió a personas dispuestas a cambiar su vida, a finales de 2018, se recibe la primera promoción de coaches ontológicos profesionales de Vuelabienalto."
        />
      </Helmet>
      <ScrollToTopArrow />
      <Hero />
      <div className="flex flex-col justify-center mx-8 ">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mt-12 text-center">
            ¿Quienes Somos?
          </h2>
        </div>
        <div>
          <p className="mx-4 md:mx-24 my-4 text-lg break-words">
            Vuelabienalto es una escuela de coaching que nació, como un
            emprendimiento en agosto del 2017, todo comenzó con el sueño de
            Diego Javier Martínez quien reunió a personas dispuestas a cambiar
            su vida, a finales de 2018, se recibe la primera promoción de
            coaches ontológicos profesionales de Vuelabienalto.{" "}
          </p>
        </div>
        <VideoHome />
      </div>
      <section className="relative mt-12">
        <div className="skew-up-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 dark-ocean pt-24 px-6">
          <div className="text-white sm:text-lg md:text-xl mx-4">
            <h2
              className="font-rubik font-black text-4xl md:text-6xl"
              style={{ textShadow: "black 0.1em 0.1em 0.2em" }}
            >
              En 2019
            </h2>
            <p>
              Creamos el equipo y relanzamos la carrera de coaching en Posadas,
              Leandro N. Alem y CABA (Zona Norte), además de los Diplomados en
              PNL, Comunicación Efectiva y Oratoria y cursos cortos, capacitamos
              a la comunidad con talleres gratuitos.{" "}
            </p>
            <p className="pt-2">
              Fuimos a las iglesias, a las escuelas, a asociaciones y dimos
              inicio a Vuelabienalto Solidario organizando agasajos para los
              niños de merenderos y hogares, distribuimos donaciones e
              intervenimos en comedores y hogares de la ciudad.
            </p>
          </div>
          <div className="flex justify-center items-center mx-2 sm:mx-8 mt-12 md:mt-0">
            <img
              src={Team2019}
              alt="equipo2019"
              className="w-full md:w-2/3 border-8 transform -rotate-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 dark-ocean pb-32 px-6">
          <div className="text-white sm:text-lg md:text-xl mx-8 py-24 text-center flex flex-col items-center">
            <p className="pt-2">Cerramos este año con</p>
            <div className=" bg-primary text-darkblue rounded-lg py-2 px-8 my-4">
              <p className="font-rubik text-2xl md:text-3xl font-semibold">
                100 estudiantes
              </p>
            </div>
            <p>
              Además de duplicar los egresados, agregamos más propuestas de
              formación e intervenimos en organizaciones.
            </p>
          </div>
          <div className="text-white sm:text-lg md:text-xl mx-4 md:pt-20">
            <h2
              className="font-rubik font-black text-4xl md:text-6xl"
              style={{ textShadow: "black 0.1em 0.1em 0.2em" }}
            >
              En 2020
            </h2>
            <p>
              Iniciamos con un gran proyecto de formación agrandamos el equipo,
              y se nos presentó un gran desafío{" "}
              <span className="font-semibold">¡Inició la pandemia!</span> Y nos
              reinventamos, lanzamos la escuela online en marzo del 2020 y para
              el mes de julio, en pleno apogeo de la medida sanitaria llegamos a
              los
            </p>
            <div className="flex justify-center">
              <div className=" bg-darkblue text-primary rounded-lg py-2 px-8 my-4">
                <p className="font-rubik text-2xl md:text-3xl font-semibold">
                  200 estudiantes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skew-bottom-12"></div>
      </section>

      <div className="flex flex-col justify-center mx-6 md:mx-24 py-12 md:py-24">
        <div className="sm:text-lg md:text-xl">
          <h2
            className="font-rubik font-black text-3xl md:text-4xl"
            style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
          >
            Como Líderes
          </h2>
          <p className="break-words">
            Nos propusimos en generar un impacto aún mas grande en nuestra
            comunidad, por lo que formamos a nuestros equipos en el conocimiento
            de la disciplina y en lo emocional, apuntamos a desarrollar líderes
            creativos e innovadores que inspiren e impacten en la comunidad.
          </p>
          <p className="break-words pt-2">
            Hoy capacitamos de forma gratuita a nuestros seguidores de lunes a
            viernes a las 6pm (arg) y buscamos impactar en las organizaciones
            para que todos tengamos la oportunidad de reinventarnos ante la
            crisis. Nuestros valores están orientados en la solidaridad y el
            amor, por lo que nos definimos como una oportunidad para todos.
          </p>
          <p className="break-words pt-2">
            Extendemos la invitación a todo aquel que quiera salir de su zona de
            confort y crecer, desde Vuelabienalto estamos comprometidos con el
            desarrollo personal.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-6 md:mx-24 py-12 md:py-24">
        <h2
          className="font-rubik font-black text-3xl md:text-4xl text-center"
          style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
        >
          Nuestros Avales nos Certifican
        </h2>
        <div className="flex md:flex-row flex-col items-center justify-between mt-12">
          <img
            src={LogoALC}
            alt="Asociación Latinoamericana de Coaches"
            className="w-3/4 sm:w-1/2 md:w-2/6 object-contain mt-4"
          />
          <img
            src={LogoCMC}
            alt="Confederación Mundial de Coaches"
            className="w-48 md:w-64 
            md:mr-10 object-contain mt-4"
          />
          <img
            src={FURRT}
            alt="Logo FURRT"
            className="w-24 md:w-32 object-contain mt-4"
          />
        </div>
      </div>
    </div>
  );
}
