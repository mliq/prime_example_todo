var express = require('express')
    , router = express.Router()
    , Todo = require('../models/Todo.js')
    , moment = require('moment');


/* GET /todos listing. */
router.get('/', function (req, res, next) {
    Todo.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

/* POST /todos */
router.post('/', function (req, res, next) {
    Todo.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

///* GET /todos/:id */
//router.get('/:id', function(req, res, next) {
//  Todo.findById(req.params.id, function (err, post) {
//    if (err) return next(err);
//    res.json(post);
//  });
//});

/* PUT /todos/:id */
router.put('/:id', function (req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function (req, res, next) {
    Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

///* GET /todos/:note search */
//router.get('/:note', function (req, res, next) {
//    Todo.find({ note: req.params.note }, function (err, todos) {
//        if (err) return next(err);
//        res.json(todos);
//    });
//});

///* GET /todos/search/:note search by regex */
//router.get('/search/:note', function (req, res, next) {
//    Todo.find({ note: new RegExp(req.params.note, 'i') }, function (err, todos) {
//        if (err) return next(err);
//        res.json(todos);
//    });
//});

/* GET /todos/search/:number search by time & number */
//router.get('/search/:number', function (req, res, next) {
//
//    var now = moment(); //now
//    var today = moment().startOf('day'); // midnight today.
//    var tomorrow = moment(today).add(1,'days'); // good.
//
//    // Gets all today greater than number
//    Todo.find({
//        number: {
//            $gte: req.params.number
//        },
//        created_on: {
//            $gte: today,
//            $lte: tomorrow
//        }
//    }, function (err, todos) {
//        if (err) return next(err);
//        res.json(todos);
//    });
//});

//router.get('/search', function (req, res, next) {
//
//    Todo.find({}, null,
//        {
//            sort: {
//                number: -1
//                //created_on: -1  // -1 just means descending
//            }
//        }
//        , function (err, todos) {
//
//            if (err) {
//                console.log(err);
//                return next(err);
//            }
//            res.json(todos);
//        });
//});

//GET just ids and number.
router.get('/search', function (req, res, next) {

    Todo.find({}, "number",
        function (err, todos) {

            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(todos);
        });
});

console.log('todos loaded');

module.exports = router;