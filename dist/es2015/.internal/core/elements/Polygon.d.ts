/**
 * Polygon module.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Sprite, ISpriteProperties, ISpriteAdapters, ISpriteEvents, SpriteEventDispatcher, AMEvent } from "../Sprite";
import { IPoint } from "../defs/IPoint";
import { Morpher } from "../utils/Morpher";
import { IMorphable } from "../defs/IMorphable";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[Polygon]].
 */
export interface IPolygonProperties extends ISpriteProperties {
    /**
     * An array of X/Y coordinates for each elbow of the polygon.
     */
    points?: IPoint[][][];
}
/**
 * Defines events for [[Polygon]].
 */
export interface IPolygonEvents extends ISpriteEvents {
}
/**
 * Defines adapters for [[Polygon]].
 *
 * @see {@link Adapter}
 */
export interface IPolygonAdapters extends ISpriteAdapters, IPolygonProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Draws a polygon.
 *
 * @see {@link IPolygonEvents} for a list of available events
 * @see {@link IPolygonAdapters} for a list of available Adapters
 */
export declare class Polygon extends Sprite implements IMorphable {
    /**
     * Defines available properties.
     *
     * @ignore Exclude from docs
     * @type {IPolygonProperties}
     */
    _properties: IPolygonProperties;
    /**
     * Defines available adapters.
     *
     * @ignore Exclude from docs
     * @type {IPolygonAdapters}
     */
    _adapter: IPolygonAdapters;
    /**
     * Event dispacther.
     *
     * @type {SpriteEventDispatcher<AMEvent<Polygon, IPolygonEvents>>} Event dispatcher instance
     */
    events: SpriteEventDispatcher<AMEvent<Polygon, IPolygonEvents>>;
    /**
     * A morpher instance that is used to morph polygon into some other shape.
     *
     * @type {Morpher}
     */
    protected _morpher: Morpher;
    /**
     * A set of points used for morpher.
     *
     * @type {IPoint[][][]}
     */
    protected _morphPoints: IPoint[][][];
    /**
     * Current points that morpher uses. This is needed so that we don't
     * overwrite polygons original points.
     *
     * @type {IPoint[][][]}
     */
    protected _currentPoints: IPoint[][][];
    /**
     * @deprecated Not used
     * @type {number}
     */
    protected _centerX: number;
    /**
     * @deprecated Not used
     * @type {number}
     */
    protected _centerY: number;
    /**
     * Constructor
     */
    constructor();
    /**
     * @return {IPoint[]} Polygon points
     */
    /**
     * An array of X/Y coordinates for each elbow of the polygon.
     *
     * @todo Example
     * @param {IPoint[][][]}  points  Polygon points
     */
    points: IPoint[][][];
    /**
     * @return {IPoint[]} Polygon points
     */
    /**
     * Current points. Used when morphing the element, so that original `points`
     * are not overwritten.
     *
     * @param {IPoint[][][]}  points  Polygon points
     */
    currentPoints: IPoint[][][];
    /**
     * Draws the element.
     *
     * @ignore Exclude from docs
     */
    draw(): void;
    /**
     * Measures element
     */
    protected measureElement(): void;
    /**
     * A calculated center point for the shape.
     *
     * @readonly
     * @return {IPoint} Center
     */
    readonly centerPoint: IPoint;
    /**
     * A [[Morpher]] instance that is used to morph polygon into some other
     * shape.
     *
     * @readonly
     * @return {Morpher} Morpher instance
     */
    readonly morpher: Morpher;
}
