"use strict";

module.exports = {

    up: function(migration, DataTypes) {

        return migration.createTable('users', {

            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            username: {
                type: DataTypes.STRING,
                allowNull: false
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false
            },

            createdAt: {
                type: DataTypes.DATE
            },

            updatedAt: {
                type: DataTypes.DATE
            }

        }).then(function() {
            return migration.addIndex('users', ['username']);

        });

    },

    down: function(migration, DataTypes) {
        return migration.dropTable('users');
    }

};