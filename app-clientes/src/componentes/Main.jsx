import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClienteService from '../service/ClienteService';

export const Main = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        listarClientes();
    }, []);

    const listarClientes = () => {
        async function fetchClientes() {
            try {
                //encargada de llamar al servicio para que traiga todos los clientes
                const response = await ClienteService.getAllClientes();
                setClientes(response);
            } catch (error) {
                console.error('Error al obtener la lista de clientes', error);
            }
        }


        fetchClientes();
    }




    const deleteCliente = (id) => {
        ClienteService.deleteCliente(id).then(res => {
            listarClientes();
        }).catch(err => {
            console.error('Error al eliminar el cliente', err);
        });
    }


    return (
        <div className="container mt-2 mb-5 ">
            <h1 className="text-center display-4">Clientes</h1>
            <div className="mb-3">
                <Link to="/agregar-cliente" className="btn btn-success">
                    <i className="bi bi-person-plus-fill"></i> Nuevo Cliente
                </Link>
            </div>
            <div className="row">
                {clientes.length === 0 ? (
                    <p>No hay clientes disponibles.</p>
                ) : (
                    clientes.map((cliente) => (
                        <div key={cliente.id} className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-text"><i className="bi bi-person"></i><strong className='mx-5'>Id: <span className='text-secondary'>{cliente.id}</span></strong></h6>
                                    <h5 className="card-title">Nombre: <span className='text-secondary'>{cliente.nombre}</span></h5>
                                    <h5 className="card-title">Apellido: <span className='text-secondary'>{cliente.apellido}</span></h5>
                                    <p className="card-text h6">Email: <span className='text-secondary'>{cliente.email}</span></p>
                                </div>
                                <div className="card-footer">
                                    <Link to={`/editar-cliente/${cliente.id}`} className="btn btn-primary me-2"><i className="bi bi-pencil-fill"></i> Editar</Link>
                                    <Link to={`/`} className="btn btn-danger me-2" onClick={() => deleteCliente(cliente.id)}><i className="bi bi-trash"></i> Eliminar</Link>
                                </div>
                            </div>
                        </div>
                    )))}
            </div>
        </div>
    );

};
