import React from "react";
import flowers from "../assets/flowers.jpg";

const Poem = () => {
  return (
    <div
      id="poem"
      className="w-full m-auto md:pl-20 md:pr-20 p-4 py-16 relative min-h-screen flex items-center justify-center"
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover"
        style={{ backgroundImage: `url(${flowers})`, backgroundSize: "cover" }}
      ></div>
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black"></div>
      <div className="relative text-white text-2xl">
        <p className="mb-4">
          En las tierras de Arizona,
          <br />
          brilla Andrea con su encanto,
          <br />
          una mujer de Costa Rica,
          <br />
          bella como un diamante.
          <br />
        </p>

        <p className="mb-4">
          Surge de las arenas del desierto,
          <br />
          radiante y llena de luz,
          <br />
          su sonrisa enciende mi alma,
          <br />
          un fuego que nunca se reduz.
          <br />
        </p>

        <p className="mb-4">
          Emana belleza y armonia,
          <br />
          su encanto cautiva la mirada,
          <br />
          como un verso que se desafia,
          <br />
          en cada linea de su alma labrada.
          <br />
        </p>

        <p className="mb-4">
          Sus ojos reflejan la aurora,
          <br />
          sus labios despiertan pasion,
          <br />
          su dulzura en el alma se implora,
          <br />
          un mar de amor en explosion.
          <br />
        </p>

        <p className="mb-4">
          En el corazon de Arizona,
          <br />
          Andrea brilla con esplendor,
          <br />
          una musa que inspira la vida,
          <br />
          un fuego eterno de amor.
          <br />
        </p>

        <p className="mb-4">
          Que tu brillo nunca se apague,
          <br />
          que tu sonrisa nunca se vaya,
          <br />
          Andrea, la mujer que engrandece,
          <br />
          mi corazon en cada alba.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Poem;
