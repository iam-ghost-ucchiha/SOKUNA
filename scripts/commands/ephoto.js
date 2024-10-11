const {ephoto} = require("nayan-server");

const url = "url" // ephoto url

const text = "nayan" // your text

    ephoto(url, [text])
.then((data) => console.log(data))
.catch((err) => console.log(err));
