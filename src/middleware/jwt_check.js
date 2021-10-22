const jwt = require('jsonwebtoken');
const secret = 'secret';

const jwtCheck = (req, res, next) => {
    const { token } = req.headers;
    return jwt.verify(token, secret, (err) => {
        if (!err) {
            return next();
        }
        return res.json({errors: [err.message]});
        //nex(err);
    });
};

module.exports = jwtCheck;