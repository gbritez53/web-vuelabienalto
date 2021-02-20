import React from "react";
import HeaderPages from "../../components/common/HeaderPages";
import { Contenido } from "../../config/constantes";
import { Helmet } from "react-helmet";

export default function Servicios() {
  return (
    <div>
      <Helmet>
        <title>Servicios | Vuelabienalto</title>
        <meta
          name="description"
          content="Esta es la unidad de Negocio de Vuelabienalto, donde te brindamos nuestras herramientas para que puedas alcanzar los objetivos que te propongas. Ten tu Coach Personal, tu página web, las mejores fotos para tu negocio y asesoramiento para emprendedores y mucho más!"
        />
      </Helmet>
      <HeaderPages title="Servicios" image={Contenido} />
      <div className="py-12 grid grid-cols-2">
        <div className="mx-4">
          <h2 className="text-4xl font-black font-comfortaa text-darkblue">
            Además de nuestros diplomados y carreras te brindamos nuestros
            servicios
          </h2>
        </div>
      </div>
    </div>
  );
}
