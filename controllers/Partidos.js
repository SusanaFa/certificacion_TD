import Sequelize from 'sequelize';
import Partido from "../models/Partidos.js";
import Campeonato from "../models/Campeonato.js";

export const getAllPartidos = async (req, res) => {
    try {
        const partidos = await Partido.findAll();
        res.json(partidos);
    } catch (error) {
        res.status(500).send({ message: 'Error al recuperar los partidos' });
    }
};

export const createPartido = async (req, res) => {
    const { equipo1Id, equipo2Id, campeonatoId } = req.body;
    try {
        const campeonato = await Campeonato.findByPk(campeonatoId);
        if (!campeonato || campeonato.estado !== 'ACTIVO') {
            return res.status(400).send({ message: 'El campeonato no está activo' });
        }

        const partido = await Partido.create({
            equipo1Id,
            equipo2Id,
            campeonatoId
        });

        res.status(201).send({ message: 'Partido creado satisfactoriamente', partido });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el partido' });
    }
};

export const updatePartido = async (req, res) => {
    const { id, golesEquipo1, golesEquipo2 } = req.body;
    try {
        const partido = await Partido.findByPk(id);
        if (!partido) {
            return res.status(404).send({ message: 'Partido no encontrado' });
        }

        const campeonato = await Campeonato.findByPk(partido.campeonatoId);
        if (!campeonato || campeonato.estado !== 'ACTIVO') {
            return res.status(400).send({ message: 'El campeonato no está activo' });
        }

        await Partido.update(
            {
                golesEquipo1,
                golesEquipo2
            },
            {
                where: { id }
            }
        );

        res.status(200).send({ message: 'Partido actualizado satisfactoriamente' });
    } catch (error) {
        res.status(500).send({ message: 'Error al actualizar el partido' });
    }
};

export const deletePartido = async (req, res) => {
    const id = req.params.id;
    try {
        const partido = await Partido.findByPk(id);
        if (!partido) {
            return res.status(404).send({ message: 'Partido no encontrado' });
        }

        await Partido.destroy({
            where: { id }
        });

        res.status(200).send({ message: 'Partido borrado satisfactoriamente' });
    } catch (error) {
        res.status(500).send({ message: 'Error al borrar el partido' });
    }
};



//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
