var Montage = require("montage/core/core").Montage;

exports.KerberosRealm = Montage.specialize({
    _admin_server_address: {
        value: null
    },
    admin_server_address: {
        set: function (value) {
            if (this._admin_server_address !== value) {
                this._admin_server_address = value;
            }
        },
        get: function () {
            return this._admin_server_address;
        }
    },
    _id: {
        value: null
    },
    id: {
        set: function (value) {
            if (this._id !== value) {
                this._id = value;
            }
        },
        get: function () {
            return this._id;
        }
    },
    _kdc_address: {
        value: null
    },
    kdc_address: {
        set: function (value) {
            if (this._kdc_address !== value) {
                this._kdc_address = value;
            }
        },
        get: function () {
            return this._kdc_address;
        }
    },
    _password_server_address: {
        value: null
    },
    password_server_address: {
        set: function (value) {
            if (this._password_server_address !== value) {
                this._password_server_address = value;
            }
        },
        get: function () {
            return this._password_server_address;
        }
    },
    _realm: {
        value: null
    },
    realm: {
        set: function (value) {
            if (this._realm !== value) {
                this._realm = value;
            }
        },
        get: function () {
            return this._realm;
        }
    }
});
