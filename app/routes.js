//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Eligibility checker v01

router.post('/status-01', function(request, response) {

    var stat1 = request.session.data['stat1']
    if (stat1 == "2a"){
        response.redirect("/status-checker/v01/status-02a")
    } else {
        response.redirect("/status-checker/v01/status-no-care-leaver")
    }
})

router.post('/status-02a', function(request, response) {

    var stat2a = request.session.data['stat2a']
    if (stat2a == "3a"){
        response.redirect("/status-checker/v01/status-03a")
    } else {
        response.redirect("/status-checker/v01/status-03b")
    }
})

router.post('/status-03a', function(request, response) {

    var stat3a = request.session.data['stat3a']
    if (stat3a == "4b"){
        response.redirect("/status-checker/v01/status-no-care-leaver-cla")
    } else if (stat3a == "3c") {  
        response.redirect("/status-checker/v01/status-03c");
    } else if (stat3a == "4c") {  
        response.redirect("/status-checker/v01/status-former-relevant-child");
    } else {
        response.redirect("/status-checker/v01/status-no-care-leaver-25")
    }
})

router.post('/status-03b', function(request, response) {

    var stat3b = request.session.data['stat3b']
    if (stat3b == "4c"){
        response.redirect("/status-checker/v01/status-no-care-leaver-cla")
    } else if (stat3b == "4h") {  
        response.redirect("/status-checker/v01/status-qualifying-child");
    } else if (stat3b == "4g") {  
        response.redirect("/status-checker/v01/status-qualifying-care-leaver");
    } else {
        response.redirect("/status-checker/v01/status-no-care-leaver-25")
    }
})

router.post('/status-03c', function(request, response) {

    var stat3c = request.session.data['stat3c']
    if (stat3c == "4e"){
        response.redirect("/status-checker/v01/status-eligible-child")
    } else {
        response.redirect("/status-checker/v01/status-relevant-child")
    }
})

