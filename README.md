# Snowflake

Snowflake is Medium's tool for planning and supporting our engineers' career development. Trade Me has forked this and amended to support analysts career development. 

You can read more about how Medium use this tool in our [growth framework documentation](https://medium.com/s/engineering-growth-framework).

![The Lannisters send their regards](https://i.imgur.com/e9DYLBr.png)

## Contributions

Please see [Medium's growth framework for contributions](https://github.com/Medium/snowflake). You are welcome to fork and adjust our version as you would like.

## Installation

From Medium...

Get yarn if you don’t have it already:

`npm install -g yarn`

Install dependencies:

`yarn`

### Running the dev server

`yarn dev`

### Building

`yarn export`

This will put a static version of the site in `out/`.

Finally, run:

`sed -i -- 's#/_next#_next#g' out/index.html`

This will remove some leading slashes that cause problems displaying the webpage.

## Future work

* Load initial data from a file, to improve flexibility.
* Add restricted job title selection and validation.
