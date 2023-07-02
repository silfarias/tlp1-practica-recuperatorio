// TODO: Importar controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const { 
    renderListaReservas,
    renderFormNuevaReserva,
    renderFormEditarReserva,
    obtenerReserva,
    crearReserva,
    actualizarReserva,
    eliminarReserva,
    obtenerReservas
} = require('../controllers/reserva.controllers')

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/', renderListaReservas)

// Formulario para crear una reserva
router.get('/crear-reserva', renderFormNuevaReserva);

// Formulario para actualizar una reserva
router.get('/actualizar-reserva/:id', renderFormEditarReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/', obtenerReservas);
 
// Crear una reserva
router.post('/api/', crearReserva);
 
// Actualizar una reserva
router.put('/api/:id', actualizarReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id', eliminarReserva);

 
 module.exports = router;