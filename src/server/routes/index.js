module.exports = function(app) {
    var api = '/api/';
    var data = '/../data/';
    var jsonfileservice = require('../utils/jsonfileservice')();
    var four0four = require('../utils/404')();

    app.get(api + 'example/:title', getExample);
    app.get(api + '*', four0four.notFoundMiddleware);

    function getExample(req, res, next) {
        var title = req.params.title;
        var msg = 'example matching title  \"' + title + '\" not found. ';
        try {
            var json = jsonfileservice.getJsonFromFile(data + 'example.json');
            var result = json.filter(function(c) {
                return c.title === title;
            });
            if (result && result[0]) {
                res.send(result[0]);
            } else {
                four0four.send404(req, res, msg);
            }
        }
        catch (ex) {
            four0four.send404(req, res, msg + ex.message);
        }
    }
};
