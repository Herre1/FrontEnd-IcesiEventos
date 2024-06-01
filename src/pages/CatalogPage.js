import * as React from "react";
import MisEventos from '../assets/MisEventos.png';
import ProximosEventos from '../assets/ProximosEventos.png';
import CatalogoEventos from '../assets/CatalogoEventos.png';
import RegistroEventos from '../assets/RegistroEventos.png';
import Usuario from '../assets/usuario.png';
import Logo from '../assets/Logo.png';


function Catalog() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="column">
            <div className="div-3">
              <div className="div-4">
              <img src={Usuario} alt="Mis Eventos" className="img" />
                <div className="div-5">
                  <span style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 700, fontStyle: 'italic' }}>
                    Bienvenido
                  </span>
                  <br />
                  Usuario!
                </div>
              </div>
              <div className="div-6">
                <img src={MisEventos} alt="Mis Eventos" className="img-2" />
                <div className="div-7">Mis Eventos</div>
              </div>
              <div className="div-8">
              <img src={CatalogoEventos} alt="Mis Eventos" className="img-2" />
                <div className="div-9">Catalogo de Eventos</div>
              </div>
              <div className="div-10">
                <img src={ProximosEventos} alt="Mis Eventos" className="img-2" />
                <div className="div-11">Eventos Proximos</div>
              </div>
              <div className="div-12">
              <img src={RegistroEventos} alt="Mis Eventos" className="img-2" />
                <div className="div-13">Registrar Eventos</div>
              </div>
              <div className="div-14">Salir</div>
              <img src={Logo} alt="Mis Eventos" 
                className="img-6"
              />
              <div className="div-15">Todos los derechos reservados 2024 ©</div>
            </div>
          </div>
          <div className="column-2">
            <div className="div-16">
              <div className="div-17">Eventos agregados recientemente</div>
              <div className="div-18">
                <div className="div-19">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="img-7"
                  />
                  <div className="div-20">
                    <div className="div-21">
                      Proyecto COLIBRI Bienestar U...
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="img-8"
                    />
                  </div>
                  <div className="div-22">
                    <div className="div-23">Actividad Ludica</div>
                    <div className="div-24">10/08/2024 - 09:00</div>
                  </div>
                </div>
              </div>
              <div className="div-25">
                <div className="div-26">Todos los Eventos</div>
                <div className="div-27">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="img-9"
                  />
                  <div className="div-28">Buscar</div>
                </div>
              </div>
              <div className="div-29">
                <div className="div-30">
                  <div className="column-3" />
                  <div className="column-4" />
                  <div className="column-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #e4e4e4;
        }
        .div-2 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-2 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 27%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-3 {
          background-color: #0c9bc8;
          display: flex;
          width: 100%;
          flex-grow: 1;
          flex-direction: column;
          font-size: 24px;
          color: #fff;
          font-weight: 400;
          margin: 0 auto;
          padding: 73px 19px 19px;
        }
        @media (max-width: 991px) {
          .div-3 {
            margin-top: 36px;
            padding-right: 20px;
          }
        }
        .div-4 {
          display: flex;
          gap: 18px;
          font-size: 40px;
        }
        .img {
          aspect-ratio: 0.98;
          object-fit: auto;
          object-position: center;
          width: 83px;
        }
        .div-5 {
          font-family: Inter, sans-serif;
          width: 299px;
        }
        .div-6 {
          align-self: start;
          display: flex;
          gap: 20px;
          margin: 79px 0 0 35px;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin: 40px 0 0 10px;
          }
        }
        .img-2 {
          aspect-ratio: 1.02;
          object-fit: auto;
          object-position: center;
          width: 62px;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 3px;
        }
        .div-7 {
          font-family: Fraunces, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-8 {
            display: flex;
            gap: 15px;
            margin: 27px 29px 0 30px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 64px;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 3px;
        }
        .div-9 {
          font-family: Fraunces, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-10 {
          display: flex;
          gap: 15px;
          margin: 27px 29px 0 30px;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin: 0 10px;
          }
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 67px;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 3px;
        }
        .div-11 {
          font-family: Fraunces, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-12 {
            display: flex;
            gap: 15px;
            margin: 27px 29px 0 30px;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 63px;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 3px;
        }
        .div-13 {
          font-family: Fraunces, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-14 {
          font-family: Fraunces, sans-serif;
          align-self: center;
          margin-top: 74px;
        }
        @media (max-width: 991px) {
          .div-14 {
            margin-top: 40px;
          }
        }
        .img-6 {
          aspect-ratio: 1.16;
          object-fit: auto;
          object-position: center;
          width: 246px;
          align-self: center;
          margin-top: 73px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img-6 {
            margin-top: 40px;
          }
        }
        .div-15 {
          margin-top: 47px;
          font: 10px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            margin-top: 40px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 73%;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-16 {
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 24px;
          font-family: Inter, sans-serif;
          font-weight: 400;
          margin: 0 auto;
          padding: 68px 38px 0;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-16 {
            padding-left: 10px;
          }
        }
        .div-17 {
          font-size: 30px;
          font-family: Fraunces, sans-serif;
          margin-left: 16px;
        }
        .div-18 {
          align-self: stretch;
          display: flex;
          margin-top: 36px;
          padding-right: 20px;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-top: 30px;
          }
        }
        .div-19 {
          display: flex;
          width: 100%;
          padding: 14px 20px 18px;
          flex-direction: column;
          font-size: 20px;
          align-items: center;
          border-radius: 25px;
          background-color: rgba(235, 241, 255, 1);
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 300px;
          align-self: center;
          border-color: rgba(205, 210, 228, 1);
          border-style: solid;
          border-width: 2px;
        }
        .div-20 {
          align-self: stretch;
          display: flex;
          align-items: center;
          margin-top: 7px;
          padding-right: 14px;
          gap: 3px;
        }
        .div-21 {
          font-family: Fraunces, sans-serif;
          font-weight: 400;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 34px;
        }
        .div-22 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          margin-top: 11px;
          padding-right: 16px;
          gap: 5px;
        }
        .div-23 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-24 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          color: rgba(155, 155, 155, 1);
        }
        .div-25 {
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          margin-top: 73px;
        }
        .div-26 {
          font-family: Inter, sans-serif;
        }
        .div-27 {
          display: flex;
          gap: 6px;
        }
        .img-9 {
          aspect-ratio: 1.37;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-28 {
          font-family: Inter, sans-serif;
        }
        .div-29 {
          align-self: stretch;
          display: flex;
          margin-top: 30px;
          padding-right: 19px;
          gap: 13px;
        }
        .div-30 {
          display: flex;
          align-self: stretch;
          width: 100%;
          padding: 20px 19px 31px;
          gap: 6px;
          border-radius: 35px;
          background-color: rgba(235, 241, 255, 1);
        }
        .column-3 {
          display: flex;
          flex-grow: 1;
          line-height: normal;
        }
        .column-4 {
          display: flex;
          flex-grow: 1;
          line-height: normal;
        }
        .column-5 {
          display: flex;
          flex-grow: 1;
          line-height: normal;
        }
      `}</style>
    </>
  );
}

export default Catalog;
