import Equipo from "../models/Equipo.js";
import Jugador from "../models/Jugadores.js";
import Campeonato from "../models/Campeonato.js";

export const getAllEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.findAll();
        res.json(equipos);
    } catch (error) {
        res.status(500).send({ message: 'Error al recuperar los equipos' });
    }
};

export const getEquipoById = async (req, res) => {
    const id = req.params.id;
    try {
        const equipo = await Equipo.findOne({
            where: { id: id },
            include: Jugador
        });

        if (!equipo) {
            return res.status(404).send({ message: `No se encontró equipo con id:${id}` });
        }

        res.json(equipo);
    } catch (error) {
        res.status(500).send({ message: 'Error al recuperar equipo' });
    }
};

export const createEquipo = async (req, res) => {
    const { nombre, idCampeonato } = req.body;

    try {
        const equipoExistente = await Equipo.findOne({
            where: { nombre: nombre, idCampeonato: idCampeonato }
        });

        if (equipoExistente) {
            return res.status(400).send({ message: 'Ya existe un equipo con ese nombre en el campeonato' });
        }

        const equipo = await Equipo.create({
            nombre: nombre,
            idCampeonato: idCampeonato
        });

        res.status(201).json({ message: `Equipo ${nombre} creado satisfactoriamente`, equipo });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el equipo' });
    }
};

export const updateEquipo = async (req, res) => {
    const id = req.params.id;
    const { nombre } = req.body;

    try {
        const equipo = await Equipo.findOne({
            where: { id: id }
        });

        if (!equipo) {
            return res.status(404).send({ message: 'No se encontró equipo' });
        }

        const campeonato = await Campeonato.findByPk(equipo.idCampeonato);

        if (campeonato.estado === 'ACTIVO') {
            return res.status(400).send({ message: 'No se puede modificar un equipo en un campeonato activo' });
        }

        const updatedEquipo = await equipo.update({
            nombre: nombre
        });

        res.status(200).json({ message: `Equipo ${nombre} actualizado`, equipo: updatedEquipo });
    } catch (error) {
        res.status(500).send({ message: 'Error al actualizar equipo' });
    }
};

export const deleteEquipo = async (req, res) => {
    const id = req.params.id;
    try {
        const equipo = await Equipo.findOne({
            where: { id: id }
        });

        if (!equipo) {
            return res.status(404).send({ message: 'No se encontró equipo' });
        }

        const campeonato = await Campeonato.findByPk(equipo.idCampeonato);

        if (campeonato.estado === 'ACTIVO') {
            return res.status(400).send({ message: 'No se puede eliminar un equipo en un campeonato activo' });
        }

        await equipo.destroy();
        res.status(200).send({ message: 'Equipo eliminado satisfactoriamente' });
    } catch (error) {
        res.status(500).send({ message: 'Error al eliminar equipo' });
    }
};

export const getEquiposByCampeonato = async (req, res) => {
    const idCampeonato = req.params.idCampeonato;
    try {
        const equipos = await Equipo.findAll({
            where: { idCampeonato: idCampeonato }
        });

        res.json(equipos);
    } catch (error) {
        res.status(500).send({ message: 'Error al recuperar los equipos del campeonato' });
    }
};


//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
