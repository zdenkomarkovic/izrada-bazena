import React from "react";

const Tabela = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="text-center flex flex-col py-5 md:py-0">
          <h3 className="text-2xl md:text-4xl text-primary py-5">
            Cenovnik za bazene 1,2m dubine
          </h3>
          <table className="text-center text-xl md:text-3xl border border-primary p-5 ">
            <thead>
              <tr className="border-b border-primary">
                <td className="px-5 py-1">Dimenzije</td>
                <td className="px-5">Klasik</td>
                <td className="px-5">Premijum</td>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b border-primary">
                <td className="py-1">6x3</td>
                <td>10000</td>
                <td>15000</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-1">7x3</td>
                <td>10500</td>
                <td>15500</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-1">8x3</td>
                <td>11000</td>
                <td>16000</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-1">6x4</td>
                <td>10500</td>
                <td>15500</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-1">7x4</td>
                <td>11000</td>
                <td>16000</td>
              </tr>
              <tr className="">
                <td className="py-1">8x4</td>
                <td>11500</td>
                <td>16500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center flex flex-col">
          <h3 className="text-2xl md:text-4xl text-primary py-5">
            Cenovnik za bazene 1,5m dubine
          </h3>
          <table className="text-center text-xl md:text-3xl border border-primary p-5 ">
            <thead>
              <tr className="border-b border-primary">
                <td className="px-5 py-1">Dimenzije</td>
                <td className="px-5">Klasik</td>
                <td className="px-5">Premijum</td>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b border-primary">
                <td className="py-1">6x3</td>
                <td>11000</td>
                <td>16000</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-1">7x3</td>
                <td>11500</td>
                <td>16500</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-1">8x3</td>
                <td>12000</td>
                <td>17000</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-1">6x4</td>
                <td>11500</td>
                <td>16500</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-1">7x4</td>
                <td>12000</td>
                <td>17000</td>
              </tr>
              <tr className="">
                <td className="py-1">8x4</td>
                <td>12500</td>
                <td>17500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className=" py-5 md:py-10 text-lg md:text-3xl text-center ">
        Jedan od trazenijih modela - Premijum Lux 8x4 prelivni + Rimsko
        stepeniste + Djakuzi za 5 osoba - 28000e
      </p>
    </div>
  );
};

export default Tabela;
