const minRepr = require('../min-repr'),
    assert = require('assert');

describe('min-repr.js', function() {
    it('should return 2 (plain string)', function() {
        assert.strictEqual(minRepr('13123'), 2);
    });

    it('should return 4 (string with comparer)', function() {
        assert.strictEqual(minRepr('13123', function(a, b) {
            return b - a;
        }), 4);
    });

    it('should return 4 (array)', function() {
        assert.strictEqual(minRepr([5, 0, 9, 7, 0]), 4);
    });

    it('should return 2 (array with comparer)', function() {
        assert.strictEqual(minRepr([5, 0, 9, 7, 0], function(a, b) {
            return b - a;
        }), 2);
    });

    it('should throw an error', function() {
        assert.throws(function() {
            minRepr({ 'x': 'a', 'y': 'b' });
        }, 'Parameter "str" should be a string or an array');
    });
});