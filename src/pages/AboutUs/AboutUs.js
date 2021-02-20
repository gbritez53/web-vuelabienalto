import React from "react";
import HeaderPages from "../../components/common/HeaderPages";
import Team from "../../components/Team";
import ScrollToTopArrow from "../../components/common/ScrollToTopArrow";
import { TeamPage } from "../../config/constantes";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <div className="bg-gray-200">
      <Helmet>
        <title>Team | Vuelabienalto</title>
        <meta
          name="description"
          content="Conoce a Nuestro Equipo de Coaches Certificados, Equipo de Comunicación y Facilitadores de Vuelabienalto."
        />
      </Helmet>
      <ScrollToTopArrow />
      <HeaderPages
        title="Sobre Nosotros"
        subtitle="Desarrollamos líderes creativos e innovadores que inspiran e impactan en la comunidad"
        image={TeamPage}
      />
      <Team />
    </div>
  );
}
