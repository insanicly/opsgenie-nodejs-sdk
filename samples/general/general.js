"use strict";

var opsgenie = require('../../');

opsgenie.configure({
    'api_key': 'd1871497-38bc-4222-9063-32062fc6f2f4'
});

// optional for dev purposes
/*opsgenie.headers({

});*/

opsgenie.alert.get({id: "41fbe997-03cc-40ff-a4c4-7674b86b1490"}, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Alert Response: ", alert);
    }
});
