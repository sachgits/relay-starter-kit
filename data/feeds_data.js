/**
 * Created by sachg on 2/4/2016.
 */

var sachgits = {
    "newsfeed": {
        "id": 1,
        "actor": "sachgits",
        "destination": "Jeniva",
        "coordinates": "1254345,987634",
        "imageUrl": "/path/to/folder/containing/images",
        "time_created": "34503333",
        "visitingDestination": [{time: 34060555, coordinates: '34345400\,003430034', status: 1},
            {time: 355000454, coordinates: '33420004\,4405543343', status: 0}],
        "likes": [
            1,
            333,
            10,
            44,
            55,
            88,
            33
        ],
        "comments": [
            {
                "from": 333,
                "text": "ill would like one of this",
                "time": 3450456
            },
            {
                "from": 44,
                "text": "watch and learn",
                "time": 3450456
            },
            {
                "from": 44,
                "text": "this bike is dope",
                "time": 3450456
            },
            {
                "from": 44,
                "text": "i really like this",
                "time": 340490
            }
        ]
    }
};

const  austine_feed1 =  {
    feed_id: 0,  user: {
    id : 12, dateOfBirth:'2/14/1984',username:'sachgits', timeCreated:'1/15/2016',email: 'sachgits@yahoo.com',
    gender:'MALE', photoAlbum:'/images/sachgits/profile/',fname:'Austine',lname:'Ohonyo', activeState:'1',
    lastLogin:'2/2/2016', nextDestination: [{time:356003434,coordinates:'3454345\,6500454',status:1},
        {time:356003545,coordinates: '540665454\,650004533',status:0}]},
    item: {
    item_id: 19, datetime_created:'356139245',name:'Moto Droid 2',category: 'Smartphones',
    description: 'worlds first shatterproof phone made by motorolla company',
    photo_album:'/images/sachgits/items/20/',value:450.00,condition:'brand new and sealed inside the box',
    watchlist:[20,1,23]
},
    dest1:{
    coordinates : '56045343534\,98453549', datetime_created: '356003545',status:0
}

};

const austineAhonya = {
    id : 2, dateOfBirth:'4/20/1984',username:'austineOhonyo', timeCreated:'7/16/2015',email: 'blueduxx@gmail.com',
    gender:'MALE', photoAlbum:'/images/austineOhonyo/profile/',fname:'Austine',lname:'Ohonyo', activeState:'1',
    lastLogin:'1/30/2016', nextDestination: [{time:356003434,coordinates:'3454345\,6500454',status:1},
        {time:356003545,coordinates: '540665454\,650004533',status:0}]
};

const austine_dest1 = {
    coordinates : '56045343534\,98453549', datetime_created: '356003545',status:0
};

const sachgits_item1 = {
    item_id: 19, datetime_created:'356139245',name:'Moto Droid 2',category: 'Smartphones',
    description: 'worlds first shatterproof phone made by motorolla company',
    photo_album:'/images/sachgits/items/20/',value:450.00,condition:'brand new and sealed inside the box',
    watchlist:[20,1,23]
};

export function getFeed() {
    return austine_feed1;
}

export function getFeedId() {
    return austine_feed1.feed_id;
}

export function getFeedUser() {
    return austine_feed1.user;
}

export function getFeedItem() {
    return austine_feed1.item;
}

export function getFeedDestination() {
    return austine_feed1.dest1;
}
export function getFeedComments() {
    return 'not yet implemented';
}
export function getFeedLikes(){
    return 'not yet implemented';
}