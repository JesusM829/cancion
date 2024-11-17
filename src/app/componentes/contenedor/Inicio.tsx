import Imagen1 from "../../../assets/img/karolg.png";
import Imagen2 from "../../../assets/img/joearroyo.png";
import Imagen3 from "../../../assets/img/eva.png";
import Imagen4 from "../../../assets/img/silvestre.png";
import Imagen5 from "../../../assets/img/marc.png";

export const Inicio = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Imagen1} className="d-block w-100" alt="Cantante 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Karol G</h5>
              <p>1</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Imagen2} className="d-block w-100" alt="Cantante 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Joe Arroyo</h5>
              <p>2</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Imagen3} className="d-block w-100" alt="Cantante 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Evanescense</h5>
              <p>3</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Imagen4} className="d-block w-100" alt="Cantante 4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Silvestre Dangond</h5>
              <p>4</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Imagen5} className="d-block w-100" alt="Cantante 5" />
            <div className="carousel-caption d-none d-md-block">
            <h5>Marc Anthony</h5>
              <p>5</p>
            </div>
          </div>
          </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
