var Montage = require("montage/core/core").Montage;

exports.ZfsVdev = Montage.specialize({
    _children: {
        value: null
    },
    children: {
        set: function (value) {
            if (this._children !== value) {
                this._children = value;
            }
        },
        get: function () {
            return this._children;
        }
    },
    _guid: {
        value: null
    },
    guid: {
        set: function (value) {
            if (this._guid !== value) {
                this._guid = value;
            }
        },
        get: function () {
            return this._guid;
        }
    },
    _path: {
        value: null
    },
    path: {
        set: function (value) {
            if (this._path !== value) {
                this._path = value;
            }
        },
        get: function () {
            return this._path;
        }
    },
    _stats: {
        value: null
    },
    stats: {
        set: function (value) {
            if (this._stats !== value) {
                this._stats = value;
            }
        },
        get: function () {
            return this._stats;
        }
    },
    _status: {
        value: null
    },
    status: {
        set: function (value) {
            if (this._status !== value) {
                this._status = value;
            }
        },
        get: function () {
            return this._status;
        }
    },
    _type: {
        value: null
    },
    type: {
        set: function (value) {
            if (this._type !== value) {
                this._type = value;
            }
        },
        get: function () {
            return this._type;
        }
    }
});
