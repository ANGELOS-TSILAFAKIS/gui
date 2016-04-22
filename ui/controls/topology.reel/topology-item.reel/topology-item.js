/**
 * @module ui/topology-item.reel
 */
var Component = require("montage/ui/component").Component,
    VDEV_TYPES = require("ui/controls/topology.reel").Topology.VDEV_TYPES;

/**
 * @class TopologyItem
 * @extends Component
 */
exports.TopologyItem = Component.specialize(/** @lends TopologyItem# */ {
    _totalSize: {
        value: null
    },

    totalSize: {
        get: function() {
            return this._totalSize;
        },
        set: function(totalSize) {
            if (this._totalSize != totalSize) {
                this._totalSize = totalSize;
            }

            var parityWidth = Math.floor(100 * this.paritySize / totalSize),
                usedWidth = Math.floor(100 * this.usedSize / totalSize);

            this.parityBarElement.style.width = parityWidth + '%';
            this.usedBarElement.style.width = usedWidth + '%';
            this.availableBarElement.style.width = (100 - (parityWidth+usedWidth)) + '%';
        }
    },

    editable: {
        value: false
    },

    enterDocument: {
        value: function() {
            this._orderAllowedVdevTypes();
        }
    },

    _orderAllowedVdevTypes: {
        value: function () {
            var self = this;
            this.allowedVdevTypes = Object.keys(VDEV_TYPES)
                .map(function (x) {
                    return VDEV_TYPES[x];
                })
                .filter(function (x) {
                    return x.id <= self.maxVdevType.id;
                })
                .sort(function (a, b) {
                    return a.id < b.id ? 1 : -1;
                });
            if (this.maxDefaultVdevType) {
                this.allowedDefaultVdevTypes = this.allowedVdevTypes.filter(function (x) {
                        return x.id <= self.maxDefaultVdevType.id;
                    })
                    .sort(function (a, b) {
                        return a.id < b.id ? 1 : -1;
                    });
            } else {
                this.allowedDefaultVdevTypes = this.allowedVdevTypes;
            }
        }

    }
});
