import React from "react";
import { Link } from "react-router-dom";
import { error404 } from "../../config/constantes";
import { Helmet } from "react-helmet";

import "./Error404.css";

const Error404 = () => {
  return (
    <div className="gradient text-white min-h-screen flex items-center">
      <Helmet>
        <title>Página no encontrada | Error 404</title>
        <meta
          name="description"
          content="Ups.. lo sentimos, no pudimos encontrar lo que estas buscando."
        />
      </Helmet>
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-4">
          <img src={error404} alt="Not Found" />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-6xl font-medium">404</div>
          <div className="text-xl md:text-3xl font-medium mb-4">
            Página no encontrada.
          </div>
          <div className="text-lg mb-8">
            Esto no es un error, sólo un accidente que no fue intencional. De
            cualquier forma, dudamos que esta sea la pagina que buscas y nos
            disculpamos por ello.
          </div>
          <Link
            to="/"
            className="border border-white rounded p-4 hover:bg-white hover:text-black anim"
          >
            Ir a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
