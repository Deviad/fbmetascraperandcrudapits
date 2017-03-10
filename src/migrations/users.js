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
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false
            },

            usernameCreatedAt: {
                type: DataTypes.DATE
            },

            usernameUpdatedAt: {
                type: DataTypes.DATE
            }
            ,
            passwordCreatedAt: {
                type: DataTypes.DATE
            },

            passwordUpdatedAt: {
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