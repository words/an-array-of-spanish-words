# `an-array-of-spanish-words`

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of ~636,000 Spanish words.
Derived from [the Letterpress word list][letterpress].

## Install

[npm][]:

```sh
npm install an-array-of-spanish-words
```

## Use

```js
var words = require('an-array-of-spanish-words')

console.log(words.filter(d => /palabras/.test(d)))
```

Yields:

```js
[
  'apalabras',
  'apalabrase',
  'apalabraseis',
  'apalabrasemos',
  'apalabrasen',
  // …and more
]
```

## API

### `anArrayOfSpanishWords`

`Array.<string>` — List of all Spanish words, lowercased.

## CLI

Install the CLI globally:

```sh
npm i -g an-array-of-spanish-words
```

Now run `palabras` (or `an-array-of-spanish-words`) to print all words:

```sh
palabras
```

See [`an-array-of-english-words`][english] for more CLI examples.

## Related

*   [`an-array-of-french-words`][french]
*   [`an-array-of-english-words`][english]
*   [`similar-english-words`](https://github.com/words/similar-english-words)

## License

[MIT][license] © [Zeke Sikelianos][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/words/an-array-of-spanish-words.svg

[build]: https://travis-ci.org/words/an-array-of-spanish-words

[downloads-badge]: https://img.shields.io/npm/dm/an-array-of-spanish-words.svg

[downloads]: https://www.npmjs.com/package/an-array-of-spanish-words

[size-badge]: https://img.shields.io/bundlephobia/minzip/an-array-of-spanish-words.svg

[size]: https://bundlephobia.com/result?p=an-array-of-spanish-words

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com

[letterpress]: https://github.com/lorenbrichter/Words

[english]: https://github.com/words/an-array-of-english-words

[french]: https://github.com/words/an-array-of-french-words
