min-repr.js
===

Minimal representation
---

Compute the start index of the minimal representation(also called [Lexicographically minimal string rotation][wikipedia]) of a string. This is an implementation of the Booth's O(n) algorithm([Lexicographically least circular substrings][paper])

Use
---

The `minRepr` function supports four kinds of parameters:

- Plain string
- Plain string with comparer
- Array (includes comparable elements)
- Array with comparer

Example
---

```JavaScript
var a = '13123',
    b = [5, 0, 9, 7, 0];

minRepr(a);                     // 2
minRepr(a, (x, y) => y - x);    // 4
minRepr(b);                     // 4
minRepr(b, (x, y) => y - x);    // 2
```

[wikipedia]: https://en.wikipedia.org/wiki/Lexicographically_minimal_string_rotation
[paper]: http://www.sciencedirect.com/science/article/pii/0020019080901490
