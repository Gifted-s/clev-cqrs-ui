# clev-cqrs-ui

This module allows you to autogenerate a page that shows all the events that has ever occured to your entity. It is used in conjunction with the [clev-cqrs module](https://github.com/Gifted-s/clev-cqrs).

![alt text](https://firebasestorage.googleapis.com/v0/b/oaiup-ee651.appspot.com/o/Screenshot%20(68).png?alt=media&token=54816f3c-1003-49ad-a8a2-910c03385946)

## Documentation
The official documentation website is at our [repository](https://github.com/Gifted-s/clev-cqrs-ui).

## Contributors

Pull requests are always welcome! Please base pull requests against the `master`
branch and follow the [contributing guide](https://github.com/Gifted-s/clev-cqrs-ui/CONTRIBUTING.md).
Do **not** modify any files in the `express` folder.

## Requirements
Make sure the following are installed
* Node v14.3.0 or above [Download](http://nodejs.org/)
* clev-cqrs must be [installed](https://github.com/Gifted-s/clev-cqrs-ui) with a basic understand of how it is used


## Installation
***If you have installed clev-cqrs, you don't need to install this again, skip this installation section***

Install using npm:

```bash
$ npm install clev-cqrs-ui
```

## Importing

```javascript
// Using Node.js `require()`
const clevCqrs = require("clev-cqrs-ui");

// Using ES6 imports
import clevCqrs from "clev-cqrs-ui";
```

## Usage

Express setup `app.js`

```javascript
const express = require('express');
const app = express();
// this should be the path to where you created your schema. checkout https://github.com/Gifted-s/clev-cqrs if this looks strange.
require('./sampleSetup.js')
const clevCqrsUi = require('clev-cqrs-ui')
app.use(clevCqrsUi.generatePage)
app.listen(4000, ()=> console.log('server listening...'))
```

Now enter the following in the  the browser **localhost:4000/cqrs**
It looks like this

![alt text](https://firebasestorage.googleapis.com/v0/b/oaiup-ee651.appspot.com/o/Screenshot%20(68).png?alt=media&token=54816f3c-1003-49ad-a8a2-910c03385946)

Check out the eventStore page in [clev-cqrs](https://github.com/Gifted-s/clev-cqrs ) page the  to see full setup with clev-cqrs

## License

Copyright (c) 2020 Adewumi Sunkanmi;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
