"use strict";

module.exports = {

    up: function(migration, DataTypes) {

        return migration.createTable('users', {

            uid: {
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
            return migration.addIndex('users', ['uid']);

        });

    },

    down: function(migration, DataTypes) {
        return migration.dropTable('users');
    }

};