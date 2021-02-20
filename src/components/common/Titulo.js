import React from 'react'

const Titulo = ({clases, titulo}) => {
    return (
      <div className="mx-8 md:mx-auto">

        <div className={`bg-darkblue text-primary text-center rounded-lg md:mx-auto ${clases}`}>
        <h2 className="font-rubik text-2xl md:text-3xl font-semibold py-2 px-8">
          {titulo}
        </h2>
      </div>
      </div>
    )
}

export default Titulo
