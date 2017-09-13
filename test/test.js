const minRepr = require('../min-repr'),
    assert = require('assert');

describe('min-repr.js', function() {
    it('should return 2 (plain string)', function() {
        assert.strictEqual(minRepr('acabc'), 2);
    });

    it('should return 4 (string with comparer)', function() {
        assert.strictEqual(minRepr('acabc', function(a, b) {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
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