import React, { useEffect, useState } from 'react';
import ClienteService from '../service/ClienteService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AgregarCliente = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (id) {
            async function fetchCliente() {
                try {
                    const response = await ClienteService.getClienteById(id);
                    setNombre(response.nombre);
                    setApellido(response.apellido);
                    setEmail(response.email);
                } catch (error) {
                    console.error('Error al obtener el cliente', error);
                }
            }

            fetchCliente();
        }
    }, [id]);

    const saveCliente = (e) => {
        e.preventDefault();
        const cliente = { id, nombre, apellido, email };

        if (id) {
            // Si hay un ID, estamos editando un cliente existente
            ClienteService.updateCliente(id, cliente)
                .then(() => {
                    console.log('Cliente actualizado con éxito');
                    navigate('/');
                })
                .catch((err) => {
                    console.error('Error al actualizar el cliente', err);
                });
        } else {
            // Si no hay un ID, estamos creando un nuevo cliente
            ClienteService.createCliente(cliente)
                .then(() => {
                    console.log('Cliente creado con éxito');
                    navigate('/');
                })
                .catch((err) => {
                    console.error('Error al crear el cliente', err);
                });
        }
    };

    const titulo = () => {
        if (id) {
            return (
                <>
                    <p className='mt-3 text-secondary '><i className="bi bi-person mx-4"></i>Cliente N° {id}</p>
                    <h2 className='display-5 text-center mt-2'>Editar Cliente</h2>
                </>
            );
        } else {
            return <h2 className='display-5 text-center mt-2'>Registro de Cliente</h2>;
        }
    };
    

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 '>
                        {titulo()}
                        <div className='card-body'>
                            <form onSubmit={saveCliente}>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Nombre</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='nombre'
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Apellido</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='apellido'
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className=''>
                                    <button type='submit' className='btn btn-success'>
                                        <i className='bi bi-floppy'></i> Guardar
                                    </button>
                                    &nbsp; &nbsp;
                                    <Link to='/' className='btn btn-danger'>
                                        <i className='bi bi-x-circle'></i> Cancelar
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
