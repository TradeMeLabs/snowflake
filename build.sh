#!/bin/bash

#builds the new constants files
python snowflake-csv-to-js.py
cat constants1.js trackdata.js constants2.js > constants.js
cat components/SnowflakeApp1.js snowflakedata.js components/SnowflakeApp2.js > components/SnowflakeApp.js

#compiles the application
yarn export

#removes leading slashes from index files
sed -i -- 's#/_next#_next#g' out/index.html
