import React from "react";
import HeaderPages from "../../components/common/HeaderPages";
import PostVideoBlog from "../../components/PostVideoBlog";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="bg-gray-200 font-rubik">
      <Helmet>
        <title>Blog | Vuelabienalto</title>
        <meta
          name="description"
          content="Aquí encontrarás lo mejor de nuestro contenido gratuito para ti... No te pierdas estas MasterClass con invitados increíbles!!"
        />
      </Helmet>
      <HeaderPages
        title="BLOG VUELABIENALTO"
        image="https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      />
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-24">
          <h2 className="font-bold text-gray-800  hover:text-gray-700 text-5xl">
            Nuestas MastersClass
          </h2>
          <p className="text-lg text-center text-gray-600 mx-8">
            Aquí encontrarás lo mejor de nuestro contenido gratuito para ti...
          </p>
          <p className="text-lg text-center text-gray-600 mx-8">Aprovéchalo!</p>
        </div>
      </header>

      <main className="p-4">
        <div className="block md:flex justify-between md:-mx-2 mb-4">
          <PostVideoBlog
            url="https://www.facebook.com/watch/?v=528128354536099&extid=f6KUKQ9Vyt1TMZKc"
            title="Cómo actualizar tu sistema de Vida con PNL"
            topic="Programación Neuro Lingüística"
            name="Diego Javier Martínez"
            cargo="Director de Vuelabienalto, Coach Ontológico Profesional, Máster en PNL"
            description={[
              " ¿Como adaptarnos a los ritmos que hoy corren?",
              "Nuestro director nos va a enseñar a hacerlo a travéz de la PNL y herramientas de Coaching",
            ]}
            hashtags={["#liderazgo", "#PNL", "#coaching", "#adaptate"]}
          />

          <PostVideoBlog
            url="https://www.facebook.com/watch/?v=727872871079750&extid=GyfYzTH3fmma8y8W"
            topic="Liderazgo"
            title="Los 3 Enemigos del Liderazgo"
            name="Yanina Martínez"
            cargo="Coach Ontologico Profesional"
            description={[
              "MasterClass Los 3 enemigos del liderazgo donde vas a aprender a identificarlos de una manera sencilla para alcanzar todo lo que te propongas... No te lo pierdas!!",
            ]}
            hashtags={["#masterClass", "#liderazgo", "#vuelabienalto"]}
          />

          <PostVideoBlog
            url="https://www.facebook.com/watch/?v=540543139993728&extid=sJRHYFjMObr1rSX2"
            topic="Marketing Digital"
            title="10 Ideas de Éxito Digital en 2020"
            name="Mariano Fiorillo"
            cargo="Coach Ontológico Profesional y Especialista en Marketing Digital"
            description={[
              "Hoy tenemos un invitado especial, Donde nos va a enseñar 💥💥10 ideas de Éxito Digital💥💥",
            ]}
            hashtags={["#marketingDigital", "#redesSociales", "#ideasDeExito"]}
          />
        </div>

        <div className="block md:flex justify-between md:-mx-2">
          <PostVideoBlog
            url="https://www.facebook.com/watch/?v=212679203338428&extid=aAzq7oPQ2GhI3c04"
            topic="Inteligencia Emocional"
            title="Masterclass ¿ Quién soy ?"
            name="Daniel Suárez"
            cargo="Máster en Inteligencia Emocional"
            description={[
              "Sumate a nuestro Diplomado en Inteligencia Emocional Online.",
            ]}
            hashtags={[
              "#inteligenciaEmocional",
              "#diplomadoOnLine",
              "#quiénSoy?",
            ]}
          />

          <PostVideoBlog
            url="https://www.facebook.com/watch/?v=1565029090327519&extid=B2N1wqvFREG7oJlB"
            title="¿Como te preparas para veder hoy?"
            topic="Ventas"
            name="María Bower"
            cargo="Coach Ontológico Profesional"
            description={[
              "¿Como nos preparamos para vender? ¿Que herramientas utilizamos?",
              "¿Que acuerdos tenemos con nosotros y que no nos gustan?",
            ]}
            hashtags={["liderazgo", "#ventas", "#comoTePreparas"]}
          />

          <PostVideoBlog
            url="https://www.facebook.com/watch/?v=932215693879826&extid=to2YdEb876nQXkTj"
            topic="Constelaciones Familiares"
            title="Tomo a Padre y Madre para la Prosperidad"
            name="Beatríz Ruiz"
            cargo="Coach de Vida y Consteladora Familiar"
            description={[
              "👉 Honrar y tomar a nuestros ancestros sin juicios, abrazar a los excluidos de la familia es el Orden del Amor.",
              "👉El Aceptar a Padre y Madre tal como son para Recibir la Prosperidad en la Vida.",
            ]}
            hashtags={["#constelacionesFamiliares", "#familia", "#prosperidad"]}
          />
        </div>
      </main>
    </div>
  );
};

export default Blog;
