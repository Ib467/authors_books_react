const Author = require('../models/Author.model');

module.exports.getAll = function (req, res){
    Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.json(err));

}


module.exports.create = (req, res) => {
    Author.create(req.body)
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err));
}

module.exports.getOne = (req, res) => {
    Author.findById(req.params.id)
    .then(author => res.json(author))
    .catch(err => res.json(err))
}


module.exports.update = (req, res) => {
    Author.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name
        },
        {
            new: true,
            runValidators: true
        }
    )
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}


module.exports.delete = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
    .then(() => req.json({message: 'success'}))
    .catch(err => res.json(err))
}