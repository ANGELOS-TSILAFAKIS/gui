var Montage = require("montage/core/core").Montage;

exports.DiskSetKeyParams = Montage.specialize({
    _key: {
        value: null
    },
    key: {
        set: function (value) {
            if (this._key !== value) {
                this._key = value;
            }
        },
        get: function () {
            return this._key;
        }
    },
    _password: {
        value: null
    },
    password: {
        set: function (value) {
            if (this._password !== value) {
                this._password = value;
            }
        },
        get: function () {
            return this._password;
        }
    },
    _slot: {
        value: null
    },
    slot: {
        set: function (value) {
            if (this._slot !== value) {
                this._slot = value;
            }
        },
        get: function () {
            return this._slot;
        }
    }
});
