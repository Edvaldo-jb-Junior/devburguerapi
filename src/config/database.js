'use strict';

// eslint-disable-next-line no-undef
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'devburger',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};


