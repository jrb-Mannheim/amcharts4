/**
 * Map polygon series module
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { MapSeries, MapSeriesDataItem } from "./MapSeries";
import { MapPolygon } from "./MapPolygon";
import { ListTemplate } from "../../core/utils/List";
import { registry } from "../../core/Registry";
import * as $mapUtils from "./MapUtils";
import * as $array from "../../core/utils/Array";
import * as $utils from "../../core/utils/Utils";
import * as $iter from "../../core/utils/Iterator";
/**
 * ============================================================================
 * DATA ITEM
 * ============================================================================
 * @hidden
 */
/**
 * Defines a [[DataItem]] for [[MapPolygonSeries]]
 * @see {@link DataItem}
 */
var MapPolygonSeriesDataItem = /** @class */ (function (_super) {
    __extends(MapPolygonSeriesDataItem, _super);
    /**
     * Constructor
     */
    function MapPolygonSeriesDataItem() {
        var _this = _super.call(this) || this;
        _this.className = "MapPolygonSeriesDataItem";
        _this.applyTheme();
        return _this;
    }
    Object.defineProperty(MapPolygonSeriesDataItem.prototype, "mapPolygon", {
        /**
         * A [[MapPolygon]] element related to this data item.
         *
         * @readonly
         * @return {MapPolygon} Element
         */
        get: function () {
            if (!this._mapPolygon) {
                this._mapPolygon = this.component.mapPolygons.create();
                this.addSprite(this._mapPolygon);
            }
            return this._mapPolygon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapPolygonSeriesDataItem.prototype, "polygon", {
        /**
         * @return {number[]} Coordinates
         */
        get: function () {
            return this._polygon;
        },
        /**
         * A collection of X/Y coordinates for a single polygon. E.g.:
         *
         * ```JSON
         * [
         *   [
         *     [ 100, 150 ],
         *     [ 120, 200 ],
         *     [ 150, 200 ],
         *     [ 170, 240 ],
         *     [ 100, 150 ]
         *   ]
         * ]
         * ```
         *
         * @param {number[][][]}  polygon  Coordinates
         */
        set: function (polygon) {
            this._polygon = polygon;
            this.multiGeoPolygon = $mapUtils.multiPolygonToGeo([polygon]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapPolygonSeriesDataItem.prototype, "multiPolygon", {
        /**
         * @return {number[]} Coordinates
         */
        get: function () {
            return this._multiPolygon;
        },
        /**
         * A collection of X/Y coordinates for a multi-part polygon. E.g.:
         *
         * ```JSON
         * [
         *   // Part 1
         *   [
         *     [
         *       [ 100, 150 ],
         *       [ 120, 200 ],
         *       [ 150, 220 ],
         *       [ 170, 240 ],
         *       [ 100, 150 ]
         *     ]
         *   ],
         *
         *   // Part 2
         *   [
         *     [
         *       [ 300, 350 ],
         *       [ 320, 400 ],
         *       [ 350, 420 ],
         *       [ 370, 440 ],
         *       [ 300, 350 ]
         *     ]
         *   ]
         * ]
         * ```
         *
         * @param {number[][][]}  multiPolygon  Coordinates
         */
        set: function (multiPolygon) {
            this._multiPolygon = multiPolygon;
            this.multiGeoPolygon = $mapUtils.multiPolygonToGeo(multiPolygon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapPolygonSeriesDataItem.prototype, "geoPolygon", {
        /**
         * @return {IGeoPoint[]} Coordinates
         */
        get: function () {
            return this._geoPolygon;
        },
        /**
         * A collection of lat/long coordinates for a single polygon. E.g.:
         *
         * ```JSON
         * [
         *   [
         *     { latitude: -10.0, longitude: -10.0 },
         *     { latitude: 10.0, longitude: -10.0 },
         *     { latitude: 10.0, longitude: 10.0 },
         *     { latitude: -10.0, longitude: -10.0 }
         *   ]
         * ]
         * ```
         *
         * @see {@link https://tools.ietf.org/html/rfc7946#section-3.1.6} GeoJSON Polygon reference
         * @param {IGeoPoint[][]}  geoPolygon  Coordinates
         */
        set: function (geoPolygon) {
            this._geoPolygon = geoPolygon;
            this.multiGeoPolygon = [geoPolygon];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapPolygonSeriesDataItem.prototype, "multiGeoPolygon", {
        /**
         * @return {IGeoPoint[]} Coordinates
         */
        get: function () {
            return this._multiGeoPolygon;
        },
        /**
         * A collection of lat/long coordinates for a multi-part polygon. E.g.:
         *
         * ```JSON
         * [
         *   [
         *     [
         *       { longitude: 180.0, latitude: 40.0 },
         *       { longitude: 180.0, latitude: 50.0 },
         *       { longitude: 170.0, latitude: 50.0 },
         *       { longitude: 170.0, latitude: 40.0 },
         *       { longitude: 180.0, latitude: 40.0 }
         *     ]
         *   ],
         *   [
         *     [
         *       { longitude: -170.0, latitude: 40.0 },
         *       { longitude: -170.0, latitude: 50.0 },
         *       { longitude: -180.0, latitude: 50.0 },
         *       { longitude: -180.0, latitude: 40.0 },
         *       { longitude: -170.0, latitude: 40.0 }
         *     ]
         *   ]
         * ]
         * ```
         *
         * @see {@link https://tools.ietf.org/html/rfc7946#section-3.1.7} GeoJSON MultiPolygon reference
         * @param {IGeoPoint[][][]}  multiGeoPolygon  Coordinates
         */
        set: function (multiGeoPolygon) {
            this._multiGeoPolygon = multiGeoPolygon;
            this.updateAreaExtremes(multiGeoPolygon);
            this.mapPolygon.multiGeoPolygon = this._multiGeoPolygon;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the item's bounding coordinates: coordinates of the East, West,
     * North, and South-most points.
     *
     * @ignore Exclude from docs
     * @param {IGeoPoint[]}  geoPoints  Points of the element
     */
    MapPolygonSeriesDataItem.prototype.updateAreaExtremes = function (multiGeoPolygon) {
        for (var i = 0; i < multiGeoPolygon.length; i++) {
            var geoPolygon = multiGeoPolygon[i];
            var surface = geoPolygon[0];
            this.updateExtremes(surface);
        }
    };
    return MapPolygonSeriesDataItem;
}(MapSeriesDataItem));
export { MapPolygonSeriesDataItem };
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * A series of map polygon elements.
 *
 * @see {@link IMapPolygonSeriesEvents} for a list of available Events
 * @see {@link IMapPolygonSeriesAdapters} for a list of available Adapters
 * @important
 */
var MapPolygonSeries = /** @class */ (function (_super) {
    __extends(MapPolygonSeries, _super);
    /**
     * Constructor
     */
    function MapPolygonSeries() {
        var _this = 
        // Init
        _super.call(this) || this;
        _this.parsingStepDuration = 5000; // to avoid some extra redrawing
        _this.className = "MapPolygonSeries";
        // Set data fields
        _this.dataFields.multiPolygon = "multiPolygon";
        _this.dataFields.polygon = "polygon";
        _this.dataFields.geoPolygon = "geoPolygon";
        _this.dataFields.multiGeoPolygon = "multiGeoPolygon";
        // Apply theme
        _this.applyTheme();
        return _this;
    }
    /**
     * Returns a new/empty DataItem of the type appropriate for this object.
     *
     * @see {@link DataItem}
     * @return {MapPolygonSeriesDataItem} Data Item
     */
    MapPolygonSeries.prototype.createDataItem = function () {
        return new MapPolygonSeriesDataItem();
    };
    /**
     * @ignore
     */
    MapPolygonSeries.prototype.clearPolygons = function () {
        $iter.each(this.mapPolygons.iterator(), function (mapPolygon) {
            mapPolygon.polygon.dispose();
            mapPolygon.dispose();
        });
        this.mapPolygons.clear();
    };
    /**
     * @ignore
     */
    MapPolygonSeries.prototype.processIncExc = function () {
        this.clearPolygons();
        _super.prototype.processIncExc.call(this);
    };
    /**
     * (Re)validates series data, effectively causing the whole series to be
     * redrawn.
     *
     * @ignore Exclude from docs
     */
    MapPolygonSeries.prototype.validateData = function () {
        var _this = this;
        if (this.data.length > 0 && this._parseDataFrom == 0) {
            this.clearPolygons();
        }
        this.west = null;
        this.east = null;
        this.north = null;
        this.south = null;
        // process geoJSON and created map objects
        if (this.useGeodata) {
            var geoJSON = this.chart.geodata;
            if (geoJSON) {
                var features = void 0;
                if (geoJSON.type == "FeatureCollection") {
                    features = geoJSON.features;
                }
                else if (geoJSON.type == "Feature") {
                    features = [geoJSON];
                }
                else if (["Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon"].indexOf(geoJSON.type) != -1) {
                    features = [{ geometry: geoJSON }];
                }
                else {
                    console.log("nothing found in geoJSON");
                }
                if (features) {
                    var _loop_1 = function (i) {
                        var feature = features[i];
                        var geometry = feature.geometry;
                        if (geometry) {
                            var type = geometry.type;
                            var id_1 = feature.id;
                            if (type == "Polygon" || type == "MultiPolygon") {
                                if (!this_1.checkInclude(this_1.include, this_1.exclude, id_1)) {
                                    return "continue";
                                }
                                var coordinates = geometry.coordinates;
                                if (coordinates) {
                                    // make the same as MultiPolygon
                                    if (type == "Polygon") {
                                        coordinates = [coordinates];
                                    }
                                }
                                // find data object in user-provided data
                                var dataObject = $array.find(this_1.data, function (value, i) {
                                    return value.id == id_1;
                                });
                                // create one if not found
                                if (!dataObject) {
                                    dataObject = { multiPolygon: coordinates, id: id_1 };
                                    this_1.data.push(dataObject);
                                }
                                // in case found
                                else {
                                    // if user-provided object doesn't have points data provided in any way:
                                    if (!dataObject.multiPolygon) {
                                        dataObject.multiPolygon = coordinates;
                                    }
                                }
                                // copy properties data to datacontext
                                $utils.copyProperties(feature.properties, dataObject);
                            }
                        }
                    };
                    var this_1 = this;
                    for (var i = 0; i < features.length; i++) {
                        _loop_1(i);
                    }
                }
            }
        }
        _super.prototype.validateData.call(this);
        // if data is parsed in chunks, polygon list is corrupted, fix it here
        $iter.each(this.dataItems.iterator(), function (dataItem) {
            _this.mapPolygons.moveValue(dataItem.mapPolygon);
        });
    };
    /**
     * (Re)validates the series
     *
     * @ignore Exclude from docs
     */
    MapPolygonSeries.prototype.validate = function () {
        _super.prototype.validate.call(this);
        //console.log(this.uid, this.mapPolygons.length);
        $iter.each(this.mapPolygons.iterator(), function (mapPolygon) {
            mapPolygon.validate();
        });
    };
    Object.defineProperty(MapPolygonSeries.prototype, "mapPolygons", {
        /**
         * List of polygon elements in the series.
         *
         * @return {ListTemplate<MapPolygon>} Polygon list
         */
        get: function () {
            if (!this._mapPolygons) {
                var polygonTemplate = new MapPolygon();
                var mapPolygons = new ListTemplate(polygonTemplate);
                mapPolygons.template.focusable = true;
                mapPolygons.events.on("insert", this.handleObjectAdded, this);
                this._mapPolygons = mapPolygons;
            }
            return this._mapPolygons;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * returns MapPolygon by id in geoJSON file
     * @param {string} polygon id
     * @return {MapPolygon}
     */
    MapPolygonSeries.prototype.getPolygonById = function (id) {
        return $iter.find(this.mapPolygons.iterator(), function (mapPolygon) {
            var dataContext = mapPolygon.dataItem.dataContext;
            return dataContext.id == id;
        });
    };
    /**
     * Copies all properties from another instance of [[Series]].
     *
     * @param {Series}  source  Source series
     */
    MapPolygonSeries.prototype.copyFrom = function (source) {
        this.mapPolygons.template.copyFrom(source.mapPolygons.template);
        _super.prototype.copyFrom.call(this, source);
    };
    return MapPolygonSeries;
}(MapSeries));
export { MapPolygonSeries };
/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
registry.registeredClasses["MapPolygonSeries"] = MapPolygonSeries;
registry.registeredClasses["MapPolygonSeriesDataItem"] = MapPolygonSeriesDataItem;
//# sourceMappingURL=MapPolygonSeries.js.map