var Montage = require("montage/core/core").Montage;

exports.SnapshotInfo = Montage.specialize({
    _created_at: {
        value: null
    },
    created_at: {
        set: function (value) {
            if (this._created_at !== value) {
                this._created_at = value;
            }
        },
        get: function () {
            return this._created_at;
        }
    },
    _name: {
        value: null
    },
    name: {
        set: function (value) {
            if (this._name !== value) {
                this._name = value;
            }
        },
        get: function () {
            return this._name;
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
    },
    _uuid: {
        value: null
    },
    uuid: {
        set: function (value) {
            if (this._uuid !== value) {
                this._uuid = value;
            }
        },
        get: function () {
            return this._uuid;
        }
    }
});
