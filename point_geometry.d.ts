/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @class Point
 * @param {Number} x the x-coordinate. this could be longitude or screen
 * pixels, or any other sort of unit.
 * @param {Number} y the y-coordinate. this could be latitude or screen
 * pixels, or any other sort of unit.
 * @example
 * var point = new Point(-77, 38);
 */
export declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @returns {Point} the clone
     */
    clone(): Point;
    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @returns {Point} output point
     */
    add(p: Point): Point;
    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @returns {Point} output point
     */
    sub(p: Point): Point;
    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @returns {Point} output point
     */
    multByPoint(p: Point): Point;
    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @returns {Point} output point
     */
    divByPoint(p: Point): Point;
    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Number} k factor
     * @returns {Point} output point
     */
    mult(k: number): Point;
    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {number} k factor
     * @returns {Point} output point
     */
    div(k: number): Point;
    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @returns {Point} output point
     */
    rotate(a: number): Point;
    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @returns {Point} output point
     */
    rotateAround(a: number, p: Point): Point;
    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @returns {Point} output point
     */
    matMult(m: Array<number>): Point;
    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @returns {Point} unit vector point
     */
    unit(): Point;
    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @returns {Point} perpendicular point
     */
    perp(): Point;
    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @returns {Point} rounded point
     */
    round(): Point;
    /**
     * Return the magnitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @returns {Number} magnitude
     */
    mag(): number;
    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @returns {boolean} whether the points are equal
     */
    equals(other: Point): boolean;
    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @returns {Number} distance
     */
    dist(p: Point): number;
    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @returns {Number} distance
     */
    distSqr(p: Point): number;
    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @returns {Number} angle
     */
    angle(): number;
    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @returns {Number} angle
     */
    angleTo(b: Point): number;
    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @returns {Number} angle
     */
    angleWith(b: Point): number;
    angleWithSep(x: any, y: any): number;
    _matMult(m: any): this;
    _add(p: any): this;
    _sub(p: any): this;
    _mult(k: any): this;
    _div(k: any): this;
    _multByPoint(p: any): this;
    _divByPoint(p: any): this;
    _unit(): this;
    _perp(): this;
    _rotate(angle: any): this;
    _rotateAround(angle: any, p: any): this;
    _round(): this;
    /**
     * Construct a point from an array if necessary, otherwise if the input
     * is already a Point, or an unknown type, return it unchanged
     * @param {Array<number> | Point} a any kind of input value
     * @returns {Point} constructed point, or passed-through value.
     * @example
     * // this
     * var point = Point.convert([0, 1]);
     * // is equivalent to
     * var point = new Point(0, 1);
     */
    static convert: (a: Array<number> | Point | any) => Point;
}
