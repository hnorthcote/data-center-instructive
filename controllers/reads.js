const Read = require('../models/read');
const InitSoftware = require('../seeding/software-data');
const InitHardware = require('../seeding/hardware-data');
const InitMarket = require('../seeding/market-data');
const InitScale = require('../seeding/scale-data');

module.exports = {
    index,
    create_software,
    create_hardware,
    create_scale,
    create_market,
};


function index(req, res) {
    Read.market.find({})
    res.render('/index', {

    } )

}
function create_hardware(req, res) {
    Read.hardware.create(req.body, function(err, hardware){
        if(err) {console.log(err)}
    })
}

function create_market(req, res) {
    Read.software.create(req.body, function(err, software){
        if(err) {console.log(err)}
    })

};

function create_scale(req, res) {
    Read.scale.create(req.body, function(err, scale){
        if(err) {console.log(err)}
    })

};

function create_software(req, res){
    Read.market.create(req.body, function(err, scale){
        if(err) {console.log(err)}
    })

};
