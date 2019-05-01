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

#### OPTION ONE

`./build.sh`

NB: you may need to `chmod 755 build.sh` first.


#### OPTION TWO

Compose the constants file from the new data:
`python snowflake-csv-to-js.py`
`cat constants1.js trackdata.js constants2.js > constants.js`
`cat components/SnowflakeApp1.js snowflakedata.js components/SnowflakeApp2.js > components/SnowflakeApp.js`


Compile the application:
`yarn export`

This will put a static version of the site in `out/`.

Finally, run:

`sed -i -- 's#/_next#_next#g' out/index.html`

This will remove some leading slashes that cause problems displaying the webpage.

## Future work

* Load initial data from a file, to improve flexibility.
* Add restricted job title selection and validation.
