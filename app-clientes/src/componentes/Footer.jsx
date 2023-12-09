import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-5 div footer position-fixed ">
         <hr className='container' />
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h5>Mapa del sitio</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-body-secondary">Consultar Clientes</a></li>
              <li><a href="/agregar-cliente" className="text-body-secondary">Agregar Cliente</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Proyecto de Amigos</h5>
            <ul className="list-unstyled">
              <li><a href="https://webfreelancerlb.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-body-secondary text-decoration-none">Leonardo Basualdo freelancer</a></li>
              <li><a href="#" className="text-body-secondary">Enlace 2</a></li>
              <li><a href="#" className="text-body-secondary">Enlace 3</a></li>
            </ul>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Newsletter</h5>
            <p>Suscríbete a nuestro boletín mensual para conocer las novedades.</p>
            <div className="d-flex gap-2">
              <input type="text" className="form-control" placeholder="Dirección de correo electrónico" />
              <button className="btn btn-primary" type="button">Suscribirse</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} DVCode. Todos los derechos reservados.</p>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled d-flex justify-content-end">
                <li className="ms-3"><a href="https://www.linkedin.com/in/diego-cristian-alfredo-veras-54b459249/"><i className="bi bi-linkedin"></i></a></li>
                <li className="ms-3"><a href="https://github.com/DVTecno"><i className="bi bi-github"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
