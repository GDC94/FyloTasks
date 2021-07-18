const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


// Crea proyectos
// api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);





//Para obtener todos los proyectos creados por el user
router.get('/',
    auth,
    proyectoController.obtenerProyectos
);





//Para modificar un proyecto creado segun ID
router.put('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);




//Para eliminar un proyecto creado segun ID
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
);




module.exports = router;