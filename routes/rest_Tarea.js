var express = require('express');
var router = express.Router();

const Tarea = require('../models').Tarea;

router.get('/findAll/json', function(req, res, next) {  
  Tarea.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 
});

router.get('/findById/:id/json', function(req, res, next) {  
    let id = req.params.id;
    Tarea.findByPk(id)
        .then(instancia => {
          if(instancia) {
            res.status(200).json(instancia);
          } else {
            res.status(404).json({error: "No existe registro con el identificador "+id})
          }
        })
        .catch(error => res.status(400).send(error))
});

router.post('/save', function(req, res, next) {  
    Tarea.create(req.body)
      .then(instancia => {
        res.status(201).json(instancia);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error al crear el registro' });
      });
});

router.put('/update/:id', function(req, res, next) {  
    let id = req.params.id;
    Tarea.findByPk(id)
      .then(instancia => {
        if(instancia) {
          instancia.update(req.body)
            .then(instanciaActualizada => {
              res.status(201).json(instanciaActualizada);
            })
            .catch(error => {
              res.status(500).json({ error: 'Error al actualizar el registro' });
            });
        } else {
          res.status(404).json({error: "No existe registro con el identificador "+id})
        }
      })
      .catch(error => res.status(400).send(error))
});

router.delete('/delete/:id', function(req, res, next) {  
    let id = req.params.id;
    Tarea.findByPk(id)
      .then(instancia => {
        if(instancia) {
          instancia.destroy()
            .then(() => {
              res.status(204).json({ mensaje: 'Registro eliminado'});
            })
            .catch(error => {
              res.status(500).json({ error: 'Error al eliminar el registro' });
            });
        } else {
          res.status(404).json({error: "No existe registro con el identificador "+id})
        }
      })
      .catch(error => res.status(400).send(error))
});

module.exports = router;
