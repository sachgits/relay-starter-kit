/**
 * Created by sachg on 1/30/2016.
 */

var sachgits = {
    "activities": [
    {
        "newsfeed": {
            "id": 1,
            "actor": "sachgits",
            "destination": "Jeniva",
            "coordinates": "1254345,987634",
            "imageUrl": "/path/to/folder/containing/images",
            "time": "34503333",
            "visitingDestination": [{time: 34060555, coordinates:'34345400\,003430034', status:1},
                {time:355000454, coordinates:'33420004\,4405543343',status:0}],
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
    }
]
};

const austineAhonya = {
    id : 2, dateOfBirth:'4/20/1984',username:'austineOhonyo', timeCreated:'7/16/2015',email: 'blueduxx@gmail.com',
    gender:'MALE', photoAlbum:'/images/austineOhonyo/profile/',fname:'Austine',lname:'Ohonyo', activeState:'1',
    lastLogin:'1/30/2016', nextDestination: [{time:356003434,coordinates:'3454345\,6500454',status:1},
        {time:356003545,coordinates: '540665454\,650004533',status:0}]
};

const austineAddr1 = {
    phoneNumber:'+254725675644',email:'austineOhonyo@yahoo.com',zip:'00100,P.O box 306163 Nairobi'
};
const austine_alex_friends = {
    user_id:1, time_of_friendship:'35600453',status:'1'
};
const austine_dest1 = {
    coordinates : '56045343534\,98453549', datetime_created: '356003545',status:0
};
const austine_item1 = {
    item_id: 20, datetime_created:'35599343',name:'Sumsang Galaxy 6 Edge Plus',category: 'Smartphones',
    description: 'newest premium sumsang galaxy phone with gold case and super omoled screen see the images for details',
    photo_album:'/images/austineohonyo/items/20/',value:450.00,condition:'mint condition see the item images',
    watchlist:[1,12,14]
};

const item1_like1 = {
    user_id: 1, time_of_action: '1/30/2015',item_id:20
};
var  item1_comment1 = {
    user_id: 1, time_of_action: '1/30/2015', item_id:20
};

export function getUser(){
    return austineAhonya;
}

export function getUserId(){
    return austineAhonya.id;
}

export function getUserUsername(){
    return austineAhonya.username;
}

export function getUserDateOfBirth(){
    return austineAhonya.dateOfBirth;
}

export function getUserEmail(){
    return austineAhonya.email;
}
export function getUserPhotoAlbum(){
    return austineAhonya.photoAlbum;
}
export function getUserLastLogin(){
    return austineAhonya.lastLogin;
}

export function getUserActiveState(){
    return austineAhonya.activeState;
}

export function getUserFname(){
    return austineAhonya.fname;
}
export function getUserLname(){
    return austineAhonya.lname;
}
export function getUserTimecreated(){
    return austineAhonya.timeCreated;
}

export function getUserGender(){
    return austineAhonya.gender;
}
