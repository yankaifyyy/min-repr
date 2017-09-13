(function() {
    function minRepr(str, comparer) {
        let arr = str;
        if (Array.isArray(str)) {
            arr = str;
        } else if (typeof(str) === 'string') {
            arr = str.split('');
        } else {
            throw new Error('Parameter "str" should be a string or an array with comparable elements.');
        }

        const s = Array.prototype.concat(arr, arr);
        if (comparer === undefined) {
            comparer = function(a, b) {
                return a - b;
            };
        }

        let i = 0;
        let j = 1;
        const l = arr.length;
        while (i < l && j < l) {
            let k = 0;
            while (comparer(s[i + k], s[j + k]) === 0 && k < l) {
                ++k;
            }
            if (k === l) {
                break;
            }
            if (comparer(s[i + k], s[j + k]) > 0) {
                i = Math.max(i + k + 1, j + 1);
            } else {
                j = Math.max(j + k + 1, i + 1);
            }
        }

        return Math.min(i, j);
    }

    module.exports = minRepr;
})();