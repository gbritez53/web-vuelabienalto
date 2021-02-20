import React, { useState } from "react";
import Topic from "../../../components/common/Topic";

export default function ConstFamTopic() {
  const [topics, setTopics] = useState([
    {
      title: "Primer Encuentro",
      content: [
        "¿Qué son las Constelaciones Familiares?",
        "¿Cómo se iniciaron? ¿Quiénes fueron sus creadores? ¿Cuál ha sido su evolución?",
        "¿Quién es Bert Hellinger?",
        "¿Qué es constelar?",
      ],
      open: false,
    },
    {
      title: "Segundo Encuentro",
      content: [
        "Base teórica. Los órdenes del amor.",
        "La buena y la mala conciencia. Todos queremos pertenecer o cómo se repite la historia.",
        "El balance: ¿quién es el bueno y quién es el malo?",
      ],
      open: false,
    },
    {
      title: "Tercer Encuentro",
      content: [
        "La percepción y la intuición. Su importancia para el trabajo.",
        "Los Órdenes de la ayuda.",
        "La entrevista. La búsqueda del tema.",
      ],
      open: false,
    },
    {
      title: "Cuarto Encuentro",
      content: [
        "Armando el genograma.",
        "Los excluidos: buscando a los que faltan.",
        "La madre y el padre: el comienzo de la vida.",
        "Los hermanos, el orden, abortos.",
      ],
      open: false,
    },
    {
      title: "Quinto Encuentro",
      content: [
        "La pareja. Parejas previas.",
        "Las adopciones y sus implicaciones sistémicas.",
        "La enfermedad como camino.",
      ],
      open: false,
    },
    {
      title: "Sexto Encuentro",
      content: [
        "Constelaciones Organizacionales y Pedagogía Sistémica.",
        "Frases de resolución. Cuáles usar, cómo, dónde y para qué.",
        "Análisis y trabajo de diferentes dinámicas familiares.",
      ],
      open: false,
    },
    {
      title: "Séptimo Encuentro",
      content: [
        "Movimientos sistémicos.",
        "Constelaciones individuales.",
        "Manejos de dibujos, figurines y plantillas.",
      ],
      open: false,
    },
    {
      title: "Octavo Encuentro",
      content: [
        "Constelaciones del Espíritu, Constelaciones Cuánticas y Constelaciones mediales. Semejanzas y diferencias.",
        "Constelaciones de la naturaleza.",
        "Trabajo sistémico con la energía del dinero.",
        "Otras herramientas",
      ],
      open: false,
    },
    {
      title: "Noveno Encuentro",
      content: [
        "Entrega de trabajos y exposición de casos trabajados por los Consteladores a graduarse.",
        "Constelaciones Familiares.",
      ],
      open: false,
    },
  ]);

  function toggleTopic(index) {
    setTopics(
      topics.map((topic, i) => {
        if (i === index) {
          topic.open = !topic.open;
        } else {
          topic.open = false;
        }
        return topic;
      })
    );
  }
  return (
    <div>
      {topics.map((topic, i) => (
        <Topic key={i} topic={topic} index={i} toggleTopic={toggleTopic} />
      ))}
    </div>
  );
}
