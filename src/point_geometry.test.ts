import Point from './point_geometry';

describe('point_geometry', () => {
    test('point_geometry.convert', () => {
        expect(Point.convert(new Point(20, 30)).equals(new Point(20, 30))).toBe(true);
        expect(Point.convert([20, 30]).equals(new Point(20, 30))).toBe(true);
        expect(Point.convert('somestring')).toBe('somestring');
    });

    describe('point_geometry.vector operations', () => {

        test('#mag - gets the magnitude of a vector', () => {
            expect(new Point(0, 2).mag()).toBe(2);
            expect(new Point(0, 0).mag()).toBe(0);
            expect(new Point(10, 0).mag()).toBe(10);

        });
        test('#unit - calculates the unit vector', () => {
            expect(new Point(0, 1000).unit()).toEqual(new Point(0, 1));

        });
        test('#equals', () => {
            expect((new Point(0, 0).equals(new Point(0, 0)))).toBe(true); // 'equal');
            expect((new Point(0, 0).equals(new Point(0, 10)))).toBe(false); // 'not equal');

        });
        test('#dist', () => {
            expect((new Point(0, 10).dist(new Point(0, 0)))).toBe(10);
            expect((new Point(Math.sqrt(2), Math.sqrt(2)).dist(new Point(0, 0)))).toBe(2);
            expect((new Point(0, 0).dist(new Point(0, 0)))).toBe(0);

        });
        test('#mult', () => {
            expect((new Point(0, 0).mult(5)).equals(new Point(0, 0))).toBe(true);
            expect((new Point(0, 1).mult(5)).equals(new Point(0, 5))).toBe(true);
            expect((new Point(1, 1).mult(5)).equals(new Point(5, 5))).toBe(true);

        });
        test('#div', () => {
            expect((new Point(0, 0).div(5)).equals(new Point(0, 0))).toBe(true);
            expect((new Point(0, 1).div(5)).equals(new Point(0, 1 / 5))).toBe(true);
            expect((new Point(1, 1).div(5)).equals(new Point(1 / 5, 1 / 5))).toBe(true);

        });
        test('#multByPoint', () => {
            expect((new Point(0, 0).multByPoint(new Point(5, 5))).equals(new Point(0, 0))).toBe(true);
            expect((new Point(0, 1).multByPoint(new Point(5, 5))).equals(new Point(0, 5))).toBe(true);
            expect((new Point(1, 1).multByPoint(new Point(4, 5))).equals(new Point(4, 5))).toBe(true);

        });
        test('#divByPoint', () => {
            expect((new Point(0, 0).divByPoint(new Point(5, 5))).equals(new Point(0, 0))).toBe(true);
            expect((new Point(0, 1).divByPoint(new Point(5, 5))).equals(new Point(0, 1 / 5))).toBe(true);
            expect((new Point(1, 1).divByPoint(new Point(4, 5))).equals(new Point(1 / 4, 1 / 5))).toBe(true);

        });
        test('#rotate', () => {
            expect((new Point(0, 0).rotate(0)).equals(new Point(0, 0))).toBe(true);
            expect((new Point(0, 1).rotate(Math.PI / 2)).round()).toEqual(new Point(-1, 0));
            expect((new Point(0, 1).rotate(Math.PI)).round()).toEqual(new Point(-0, -1));

        });
        test('#rotateAround', () => {
            expect((new Point(2, 3).rotateAround(Math.PI / 2, new Point(2, 2))).round()).toEqual(new Point(1, 2));
            expect((new Point(2, 3).rotateAround(Math.PI, new Point(2, 2))).round()).toEqual(new Point(2, 1));

        });
        test('#round', () => {
            expect((new Point(0, 0).round()).equals(new Point(0, 0))).toBe(true);
            expect((new Point(0, 0.5).round()).equals(new Point(0, 1))).toBe(true);
            expect((new Point(0.2, 0.2).round()).equals(new Point(0, 0))).toBe(true);

        });
        test('#angle', () => {
            expect((new Point(0, 0).angle())).toBe(0);
            expect((new Point(10, 10).angle())).toBe(Math.PI / 4);
            expect((new Point(0, 10).angle())).toBe(Math.PI / 2);
            expect((new Point(10, 0).angle())).toBe(0);

        });
        test('#angleTo', () => {
            const b = new Point(0, 0);
            expect((new Point(0, 0).angleTo(b))).toBe(0);
            expect((new Point(10, 10).angleTo(b))).toBe(Math.PI / 4);
            expect((new Point(0, 10).angleTo(b))).toBe(Math.PI / 2);
            expect((new Point(10, 0).angleTo(b))).toBe(0);

        });
        test('#angleWith', () => {
            const b = new Point(0, 0);
            expect((new Point(0, 0).angleWith(b))).toBe(0);
            expect((new Point(10, 10).angleWith(b))).toBe(0);
            expect((new Point(0, 10).angleWith(b))).toBe(0);
            expect((new Point(10, 0).angleWith(b))).toBe(0);

        });
        test('#angleWithSep', () => {
            expect((new Point(0, 0).angleWithSep(0, 0))).toBe(0);
            expect((new Point(10, 10).angleWithSep(0, 0))).toBe(0);
            expect((new Point(0, 10).angleWithSep(0, 0))).toBe(0);
            expect((new Point(10, 0).angleWithSep(0, 0))).toBe(0);

        });
        test('#matMult', () => {
            expect((new Point(0, 0).matMult([0, 0, 0, 0])).equals(new Point(0, 0))).toBe(true);
            expect((new Point(1, 1).matMult([0, 0, 0, 0]))).toEqual(new Point(0, 0));
            expect((new Point(1, 1).matMult([1, 0, 1, 0]))).toEqual(new Point(1, 1));
            expect((new Point(1, 1).matMult([1, 0, 0, 0]))).toEqual(new Point(1, 0));
            expect((new Point(1, 1).matMult([0, 0, 1, 0]))).toEqual(new Point(0, 1));
            expect((new Point(1, 1).matMult([0, 0, 1, 2]))).toEqual(new Point(0, 3));
            expect((new Point(1, 1).matMult([1, 1, 1, 1]))).toEqual(new Point(2, 2));

        });
        test('#perp - calculates a vector perpendicular to the given vector', () => {
            expect(new Point(0, 1000).perp()).toEqual(new Point(-1000, 0));
        });
        test('#add - adds two vectors', () => {
            expect(new Point(0, 0).add(new Point(10, 10))).toEqual(new Point(10, 10));
        });
        test('#sub - adds subtracts a vector from another', () => {
            expect(new Point(0, 0).sub(new Point(10, 10))).toEqual(new Point(-10, -10));
        });

    });

});
