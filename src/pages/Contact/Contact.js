import React from "react";
import HeaderPages from "../../components/common/HeaderPages";
import { ContactPage } from "../../config/constantes";
import { ImPhone } from "react-icons/im";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <div className="">
      <HeaderPages
        title="Información de Contacto"
        image={ContactPage}
        subtitle="¿En que podemos Ayudarte?"
      />
      <h2
        className="text-black font-rubik font-black text-4xl text-center md:text-4xl mx-8 mt-32 "
        style={{ textShadow: "#718096 0.1em 0.1em 0.2em" }}
      >
        Dejanos Tu Mensaje!
      </h2>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 pt-8 pb-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <form className="px-8 pt-2  mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="name"
                  >
                    Nombre
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Nombre y Apellido"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="tuemail@ejemplo.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="tel"
                  >
                    Telefono
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="tel"
                    type="text"
                    placeholder="+54 376 4123456"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="tel"
                  >
                    Mensaje
                  </label>
                  <textarea
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="tel"
                    type="text"
                    placeholder="Mensaje"
                    style={{ minHeight: "80px", maxHeight: "140px" }}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 transform hover:translate-x-1 hover: hover:scale-110 anim"
                    type="button"
                  >
                    <div className="flex items-center justify-center align-baseline">
                      <IoIosSend className="mr-2" />
                      Envíar
                    </div>
                  </button>
                </div>
                <hr className="mb-4 border-t" />
                <div className="text-center">
                  <p className="inline-block text-sm text-blue-500 align-baseline">
                    contacto@vuelabienalto.com
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-sm text-blue-500 align-baseline">
                    <ImPhone className="mr-2" />
                    +54 9 376 4990919
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
