const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const { jwt } = require('../helpers/jwt');

exports.register = async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    });

    user.save()
        .then((user) => {
            const token = jwt({
                id: user._id,
                email: user.email
            }, process.env.JWT_SECRET);

            res.send({
                token: token,
            });
        })
        .catch(err => {
            next(err);
        });
};

exports.login = async (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found",
                    auth: false
                });
            }

            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            const token = jwt({
                id: user._id,
                email: user.email
            }, process.env.JWT_SECRET);

            res.send({
                auth: true,
                token: token,
            });
        })
        .catch(err => {
            next(err);
        });
};


