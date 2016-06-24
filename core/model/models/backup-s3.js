var Montage = require("montage/core/core").Montage;

exports.BackupS3 = Montage.specialize({
    _access_key: {
        value: null
    },
    access_key: {
        set: function (value) {
            if (this._access_key !== value) {
                this._access_key = value;
            }
        },
        get: function () {
            return this._access_key;
        }
    },
    _bucket: {
        value: null
    },
    bucket: {
        set: function (value) {
            if (this._bucket !== value) {
                this._bucket = value;
            }
        },
        get: function () {
            return this._bucket;
        }
    },
    _folder: {
        value: null
    },
    folder: {
        set: function (value) {
            if (this._folder !== value) {
                this._folder = value;
            }
        },
        get: function () {
            return this._folder;
        }
    },
    _region: {
        value: null
    },
    region: {
        set: function (value) {
            if (this._region !== value) {
                this._region = value;
            }
        },
        get: function () {
            return this._region;
        }
    },
    _secret_key: {
        value: null
    },
    secret_key: {
        set: function (value) {
            if (this._secret_key !== value) {
                this._secret_key = value;
            }
        },
        get: function () {
            return this._secret_key;
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
