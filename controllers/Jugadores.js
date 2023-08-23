import Jugador from "../models/Jugadores.js";
import Equipo from "../models/Equipo.js"; 

export const getAllJugadores = async (req, res) => {
    try {
        const query = await Jugador.findAll();
        res.json(query);
    } catch (error) {
        res.status(500).send({ message: 'Error al recuperar los jugadores' });
    }
};

export const findOneJugador = async (req, res) => {
    const id = req.params.id;
    try {
        const query = await Jugador.findOne({
            where: {
                id: id
            }
        });
        if (!query) {
            return res.status(404).send({ message: `No se encontró jugador con id:${id}` });
        }
        res.json(query);
    } catch (error) {
        res.status(500).send({ message: 'Error al recuperar jugador' });
    }
};

export const createJugador = async (req, res) => {
    const {
        nombre,
        apellido,
        DNI,
        nacionalidad,
        fechaNacimiento,
        camiseta,
        idEquipo
    } = req.body;

    try {
        const existingJugador = await Jugador.findOne({
            where: {
                DNI: DNI,
                idEquipo: idEquipo
            }
        });

        if (existingJugador) {
            return res.status(400).send({ message: 'El jugador ya existe en el equipo y campeonato seleccionado' });
        }

        const query = await Jugador.create({
            nombre,
            apellido,
            DNI,
            digitoVerificador,
            nacionalidad,
            fechaNacimiento,
            camiseta,
            idEquipo
        });

        res.status(201).send({ message: 'Jugador creado satisfactoriamente' });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el jugador' });
    }
};

export const updateJugador = async (req, res) => {
    const id = req.params.id;
    const {
        nombre,
        apellido,
        DNI,
        nacionalidad,
        fechaNacimiento,
        camiseta,
        idEquipo
    } = req.body;

    try {
        const jugador = await Jugador.findOne({
            where: {
                id: id
            }
        });

        if (!jugador) {
            return res.status(404).send({ message: 'Jugador no encontrado' });
        }

              const existingJugador = await Jugador.findOne({
            where: {
                DNI: DNI,
                idEquipo: idEquipo
            }
        });

        if (existingJugador && existingJugador.id !== jugador.id) {
            return res.status(400).send({ message: 'El jugador ya existe en el equipo y campeonato seleccionado' });
        }

        await jugador.update({
            nombre,
            apellido,
            DNI,
            nacionalidad,
            fechaNacimiento,
            camiseta,
            idEquipo
        });

        res.status(200).send({ message: 'Jugador actualizado satisfactoriamente' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al actualizar jugador' });
    }
};

export const deleteJugador = async (req, res) => {
    const id = req.params.id;

    try {
        const jugador = await Jugador.findOne({
            where: {
                id: id
            }
        });

        if (!jugador) {
            return res.status(404).send({ message: 'Jugador no encontrado' });
        }

        
        const equipo = await Equipo.findByPk(jugador.idEquipo, {
            include: { model: Campeonato, where: { estado: { [Op.or]: ['Activo', 'Cerrado'] } } }
        });

        if (equipo) {
            return res.status(400).send({ message: 'No se puede eliminar el jugador ya que el campeonato está ACTIVO o CERRADO' });
        }

        await jugador.destroy();

        res.status(200).send({ message: 'Jugador eliminado satisfactoriamente' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al eliminar jugador' });
    }
};


//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
