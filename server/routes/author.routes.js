const authorsCtl = require('../controllers/authors.controller');

module.exports = app => {
    app.get('/api/authors', authorsCtl.getAll)
    app.post('/api/authors', authorsCtl.create)
    app.get('/api/authors/:id', authorsCtl.getOne)
    app.put('/api/authors/:id', authorsCtl.update)
    app.delete('/api/authors/:id', authorsCtl.delete)
    
}