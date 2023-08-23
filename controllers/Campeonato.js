import Sequelize from 'sequelize';
import Campeonato from "../models/Campeonato.js";

export const getAllCampeonato = async (req, res) => {
    try {
        const query = await Campeonato.findAll();
        res.json(query);
    } catch (error) {
        res.status(500).send({ message: 'Error al recuperar los campeonatos' });
    }
};

export const findOneCampeonato = async (req, res) => {
    const id = req.params.id;
    try {
        const query = await Campeonato.findOne({
            where: {
                id: id
            }
        });
        if (!query) {
            return res.status(404).send({ message: `No se encontró campeonato con id:${id}` });
        }
        res.json(query);
    } catch (error) {
        res.status(500).send({ message: 'Error al recuperar campeonato' });
    }
};

export const createCampeonato = async (req, res) => {
    const nombre = req.body.nombre;
    try {
        const query = await Campeonato.create({
            nombre: nombre
        });
        res.status(201).send({ message: `Campeonato ${nombre} creado satisfactoriamente` });
    } catch (error) {
        res.status(500).send({ message: `Error al crear el campeonato` });
    }
};

export const updateCampeonato = async (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    try {
        const [numUpdatedRows, updatedCampeonato] = await Campeonato.update(
            {
                nombre: nombre
            },
            {
                where: { id: id }
            }
        );

        if (numUpdatedRows === 0) {
            return res.status(404).send({ message: 'Campeonato no encontrado' });
        }

        res.status(200).json({ message: `Campeonato ${nombre} actualizado`, updatedCampeonato });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al actualizar campeonato' });
    }
};

export const deleteCampeonato = async (req, res) => {
    const id = req.params.id;
    try {
        await Campeonato.destroy({
            where: {
                id: id
            }
        });
        res.status(200).send({ message: 'Campeonato borrado satisfactoriamente' });
    } catch (error) {
        res.status(500).send({ message: 'Error al borrar campeonato' });
    }
};


//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
