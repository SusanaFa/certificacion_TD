import Emplazamiento from "../models/Emplazamiento.js";

export const createEmplazamiento = async (req, res) => {
    const { nombre } = req.body;
    try {
        const emplazamiento = await Emplazamiento.create({
            nombre: nombre
        });
        res.status(201).send({ message: `Emplazamiento ${nombre} creado satisfactoriamente` });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el emplazamiento' });
    }
};

export const getEmplazamientoById = async (req, res) => {
    const id = req.params.id;
    try {
        const emplazamiento = await Emplazamiento.findByPk(id);
        if (!emplazamiento) {
            return res.status(404).send({ message: `No se encontró emplazamiento con id:${id}` });
        }
        res.json(emplazamiento);
    } catch (error) {
        res.status(500).send({ message: 'Error al recuperar emplazamiento' });
    }
};





//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
