# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @seanssullivan/lotide`

**Require it:**

`const _ = require('@seanssullivan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Retrieves the first element of an array.
* `tail(...)`: Retrieves every element that comes after the first element in an array.
* `without(...)`: Returns a subset of an array, after removing unwanted elements.
* `flatten(...)`: Returns an array without any nested arrays.
* `middle(...)`: Takes an array and returns the middle-most element.
* `countOnly(...)`: Takes a collection of items and returns counts for a specific subset of those items.
* `countLetters(...)`: Takes a sentence and returns counts for each letter that appears in that sentence.
* `letterPositions(...)`: Takes a sentence and returns the positions of characters in that sentence.
* `findKeyByValue(...)`: Takes an object and a value and returns the first key that contains that value.
* `map(...)`: Takes an array and a function and returns the results of applying the function to each element of the array.
* `takeUntil(...)`: Takes an array and a function and returns each element of the array until the function returns a truthy value.
* `findKey(...)`: Takes an object and a function and returns the first key for which the function returns a truthy value.
