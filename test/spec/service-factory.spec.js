/* globals Bottle */
;(function() {
    'use strict';

    /**
     * Bottle Factory test suite
     */
    describe('Bottle#serviceFactory', function() {
        it('injects dependencies to a service factory', function() {
            var b = new Bottle();
            var createThing = function(foo, bar) {
                return {foo: foo, bar: bar};
            };
            b.serviceFactory('Thing', createThing, 'foo', 'bar');
            b.service('foo', function() { this.name = 'foo'; });
            b.value('bar', 'bippity');

            expect(b.container.Thing).toBeDefined();
            expect(b.container.Thing.foo).toBeDefined();
            expect(b.container.Thing.foo.name).toBe('foo');
            expect(b.container.Thing.bar).toBe('bippity');
        });
    });
}());
