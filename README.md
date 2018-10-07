# Neighborhood Map App Project

This project is #7 of the Udacity FEND Grow with Google Nanodegree program 2018.
We were to create an app that uses a Map API (like Google Maps) and another Venues type of API [FourSquare] (https://developer.foursquare.com/) to show locations on a map via markers with a filterable list of those locations.  We were to follow the Project Rubric for specific requirements.


## Table of Contents
* [Instructions](#instructions)
* [Dependecies](#dependecies)
* [Contributing](#contributing)
* [License](#license)


## Instructions
_Run this on your device_

Here is a link to a live version of the site:  xx
** NOTE: due to limits with the API calls, the map may be greyed out and the infoboxes may not show when map markers are clicked.

You can either clone or download the zip file.  Once on your computer, navigate to the location/folder you saved it.  Open your terminal at this location (either the command line or git bash on windows, or terminal on mac).

* install all project dependencies with `npm install`
* open your code editor to edit the code with your API Keys/Client_ID & Client_Secret before running.  These are located in the helperAPI.js (for [FourSquare] (https://developer.foursquare.com/)) and Map.js (for Google Maps).
* start the development server with `npm start` (this will launch your default browser and open the app for viewing)


## Dependecies
All dependecies are included in the package.json file.  There shouldn't be anything you need to add to run this code other than the API keys/client info mentioned in the instructions above.

** NOTE:  create-react-app was used to create this app, which includes a ServiceWorker to cache items for offline viewing.  It only works when in Production mode.


## Contributing
Please contact me if you would like to contribute to this application.

NOTE:  This YouTube series by a fellow Udacity Grow with Google classmate (Forrest Walker) helped me to understand what all needed to be done.  Want to give credit to him:  https://www.youtube.com/watch?v=ktc8Gp9jD1k&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP


## License
MIT LicenseMIT License

Copyright (c) 2018 BeckyBoyce

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.