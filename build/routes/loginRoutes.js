"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label for=\"email\">Email: </label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label for=\"password\">Password: </label>\n        <input name=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email) {
        res.send(email.toUpperCase());
    }
    else {
        // status code 422
        res.send('You must provide an email');
    }
});
