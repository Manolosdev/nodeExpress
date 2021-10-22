//REMOVE ----------------------------------------------------------------
const User = require('../../models/user');
const setRemoveUserController = (req, res) => {
    return User.deleteOne({ _id: req.params.id })
        .then(() => res.status(204).end())
        .catch((err) => res.status(500).json({ erros: [err.message] }))
};
module.exports = setRemoveUserController;