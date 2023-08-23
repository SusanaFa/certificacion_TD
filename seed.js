import conectDB  from './conectDB.js';
import Jugadores from './models/Jugadores.js';
import Equipo from './models/Equipo.js';
import Emplazamiento from './models/Emplazamiento.js';
import Campeonato from './models/Campeonato.js';
import Usuario from './models/Usuarios.js';
import Partido from './models/Partidos.js';

export async function pobladoDatabase() {
    try {
      await conectDB.sync(); 

      //poblando tabla emplazamiento
      const emplazamiento1 = await Emplazamiento.create({
        nombre: 'Emplazamiento 1',
      });
  
      const emplazamiento2 = await Emplazamiento.create({
        nombre: 'Emplazamiento 2',
      });
  
      const emplazamiento3 = await Emplazamiento.create({
        nombre: 'Emplazamiento 3',
      });


      //poblando tabla campeonato
      
    const campeonato1 = await Campeonato.create({
        nombre: 'Campeonato 1',
        descripcion: 'Descripción 1',
        fechaInicio: '2023-01-01',
        fechaFin: '2023-12-31',
        estado: 'Activo',
      });
  
      const campeonato2 = await Campeonato.create({
        nombre: 'Campeonato 2',
        descripcion: 'Descripción 2',
        fechaInicio: '2023-04-01',
        fechaFin: '2023-09-30',
        estado: 'Cerrado',
      });
  
      const campeonato3 = await Campeonato.create({
        nombre: 'Campeonato 3',
        fechaInicio: '2023-07-01',
        fechaFin: '2023-12-15',
        estado: 'Activo',
      });

      //poblando tabla equipo
      const equipo1 = await Equipo.create({
        nombre: 'Equipo 1',
        idEmplazamiento: 1,
        idCampeonato: 1,
      });
  
      const equipo2 = await Equipo.create({
        nombre: 'Equipo 2',
        idEmplazamiento: 2,
      });
  
      const equipo3 = await Equipo.create({
        nombre: 'Equipo 3',
        idEmplazamiento: 1,
        idCampeonato: 3,
      });
  
      //poblando tabla jugadores

    const jugador1 = await Jugadores.create({
      DNI: '12345678A',
      nombre: 'Jugador 1',
      apellido: 'Apellido 1',
      nacionalidad: 'Nacionalidad 1',
      fechaNacimiento: '1990-01-01',
      camiseta: 10,
      idEquipo: 1,
    });

    const jugador2 = await Jugadores.create({
      DNI: '23456789B',
      nombre: 'Jugador 2',
      apellido: 'Apellido 2',
      nacionalidad: 'Nacionalidad 2',
      fechaNacimiento: '1995-02-02',
      camiseta: 7,
      idEquipo: 2,
    });

    const jugador3 = await Jugadores.create({
      DNI: '34567890C',
      nombre: 'Jugador 3',
      apellido: 'Apellido 3',
      nacionalidad: 'Nacionalidad 3',
      fechaNacimiento: '2000-03-03',
      camiseta: 5,
      idEquipo: 1,
    });
//poblado tabla partidos
    const partido1 = await Partido.create({
      idEquipo1: 1,
      idEquipo2: 2,
      idCampeonato: 1,
      golesEquipo1: 2,
      golesEquipo2: 1,
    });

    const partido2 = await Partido.create({
      idEquipo1: 3,
      idEquipo2: 1,
      idCampeonato: 3,
      golesEquipo1: 0,
      golesEquipo2: 3,
    });
    
//poblando tabla usuario    

    const usuario1 = await Usuario.create({
        nombreUsuario: 'usuario1',
        email: 'usuario1@example.com',
        contrasena: 'Segura123#321', 
      });
  
      const usuario2 = await Usuario.create({
        nombreUsuario: 'usuario2',
        email: 'usuario2@example.com',
        contrasena: 'Segura123#321', 
    });

    console.log('Base de datos poblada exitosamente');
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
  } 
};

//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
