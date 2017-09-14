
var data = {};
var _ = require('underscore');

data.imgs = {
    0:[
        {src:'/img/gal/strata1.JPG'},
        {src:'/img/gal/strata2.JPG'},
        {src:'/img/gal/strata3.JPG'}
    ],
    1:[
        {src:'/img/gal/infinity1.JPG'},
        {src:'/img/gal/infinity2.JPG'},
        {src:'/img/gal/infinity3.JPG'}
    ],
    2:[
        {src:'/img/gal/tapestry1.JPG'},
        {src:'/img/gal/tapestry2.JPG'},
        {src:'/img/gal/tapestry3.JPG'}
    ],
    3:[
        {src:'/img/gal/moss1.jpg'},
        {src:'/img/gal/moss2.jpg'},
        {src:'/img/gal/moss3.jpg'}
    ],
    4:[
        {src:'/img/gal/verve1.JPG'},
        {src:'/img/gal/verve2.JPG'},
        {src:'/img/gal/verve3.JPG'}
    ],
    5:[
        {src:'/img/gal/block431.JPG'},
        {src:'/img/gal/block432.JPG'},
        {src:'/img/gal/block433.JPG'}
    ],
    6:[
        {src:'/img/gal/juanes1.JPG'},
        {src:'/img/gal/juanes2.JPG'}
    ],
    7:[
        {src:'/img/gal/dallas1.JPG'},
        {src:'/img/gal/dallas2.JPG'},
        {src:'/img/gal/dallas3.JPG'}
    ],
    8:[
        {src:'/img/gal/evian1.JPG'},
        {src:'/img/gal/evian2.JPG'},
        {src:'/img/gal/evian3.JPG'}
    ]
       
};
data.lks = [
    'http://dev-strata.razzdev.io/',
    'http://www.infinitywestshore.com/',
    'http://www.tapestrynaperville.com/',
    'http://www.mosscompany.com/',
    'http://www.vervedenver.com/',
    'http://www.block43apts.com/',
    'http://dev-juanes-main.razzdev.io/musica/',
    'http://dev-live-dallas-deluxe.razzdev.io/',
    'http://dev-evian-splash-page.razzdev.io/',
    // 'http://www.pastificiocarbone.it/',
    // 'http://dev-alta-camelback-main.razzdev.io/'
]
data.names  = [
    'strata','infinity','tapestry','moss company','verver','block43','juanes','dallas splash','evian splash'
]; 

var titles = utils.getString(9);
data.gallery =   _.map(titles, (title,index) => ({
     item: title,
     images: data.imgs[index],
     name: data.names[index],
     link:data.lks[index],
     description: 'Website description!'

 }));


module.exports = data;