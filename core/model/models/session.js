var Montage = require("montage/core/core").Montage;

exports.Session = Montage.specialize({
    _active: {
        value: null
    },
    active: {
        set: function (value) {
            if (this._active !== value) {
                this._active = value;
            }
        },
        get: function () {
            return this._active;
        }
    },
    _ended - at: {
        value: null
    },
    ended - at: {
        set: function (value) {
            if (this._ended - at !== value) {
                this._ended - at = value;
            }
        },
        get: function () {
            return this._ended - at;
        }
    },
    _resource: {
        value: null
    },
    resource: {
        set: function (value) {
            if (this._resource !== value) {
                this._resource = value;
            }
        },
        get: function () {
            return this._resource;
        }
    },
    _started - at: {
        value: null
    },
    started - at: {
        set: function (value) {
            if (this._started - at !== value) {
                this._started - at = value;
            }
        },
        get: function () {
            return this._started - at;
        }
    },
    _tty: {
        value: null
    },
    tty: {
        set: function (value) {
            if (this._tty !== value) {
                this._tty = value;
            }
        },
        get: function () {
            return this._tty;
        }
    },
    _username: {
        value: null
    },
    username: {
        set: function (value) {
            if (this._username !== value) {
                this._username = value;
            }
        },
        get: function () {
            return this._username;
        }
    }
});
