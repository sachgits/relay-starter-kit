/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
import {
//import methods that schema can use to interact with your database
    getUser,
    getUserActiveState,
    getUserDateOfBirth,
    getUserEmail,
    getUserFname,
    getUserGender,
    getUserId,
    getUserLastLogin,
    getUserLname,
    getUserPhotoAlbum,
    getUserTimecreated,
    getUserUsername
} from './sample_data';
import * as items from './item_data'
import * as destination from './destination_data-compiled'
import * as feeds from './feeds_data-compiled'

import {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from 'graphql';

import {
    connectionArgs,
    connectionDefinitions,
    connectionFromArray,
    fromGlobalId,
    globalIdField,
    mutationWithClientMutationId,
    nodeDefinitions,
} from 'graphql-relay';

import {
  // Import methods that your schema can use to interact with your database
} from './database';

/**
* Define your own types here
*/

var userType = new GraphQLObjectType({
    name: 'User',
    description: 'A person who uses our app',
    fields: () => ({
        id: {
            description: "id of the user",
            type: GraphQLInt,
            resolve:()=> globalIdField('User')
        },
        dateOfBirth: {
            type: GraphQLString,
            description: 'Person\'s date of birth',
            resolve: () => getUserDateOfBirth()
        },
        username: {
            description: 'unique name to identify the user',
            type: GraphQLString,
            resolve:()=> getUserUsername()
        },
        email: {
            type: GraphQLString,
            description: 'user email which might be used for sign in',
            resolve:()=> getUserEmail()
        },
        password: {
            type: GraphQLString,
            description: 'user hashed version password',
            resolve:() => getUserPassword()
        },
        timeCreated: {
            type: GraphQLString,
            description: 'the exact time user joined us/created an account',
            resolve:()=> getUserTimecreated()
        },gender: {
            type: GraphQLBoolean,
            description: 'MALE OR FEMALE DEFAULTS TO MALE',
            resolve:()=> getUserGender()
        },PhotoAlbum: {
            type: GraphQLString,
            description: 'folder containg users portrait photos',
            resolve:()=> getUserPhotoAlbum()
        },fname: {
            type: GraphQLString,
            description: 'Users first name',
            resolve:()=> getUserFname()
        },lname: {
            type: GraphQLString,
            description: 'Users Last Name',
            resolve:()=> getUserLname()
        },activeState: {
            type: GraphQLBoolean,
            description: 'is user active',
            resolve:()=> getUserActiveState()
        },lastLogin: {
            type: GraphQLBoolean,
            description: 'user\'s last login',
            resolve:()=> getUserLastLogin()
        }
    })
});
var sessionType = new GraphQLObjectType({
    name: 'session',
    description: 'user session info',
    fields: () => ({
        sessionId: {
            type: GraphQLString,
            description: 'session identifaction string',
            resolve: ()=> '#lexi0Guxy@'
        }
    })
})

var addressType = new GraphQLObjectType({
    name: 'address',
    description: 'User Address',
    fields: () => ({
        phoneNumber: {
            type: GraphQLString,
            description: 'User Phone number',
            resolve : ()=> '0721169392'
        },
        email: {
            type: GraphQLString,
            description: 'user email',
            resolve : ()=> 'sachgits@gmail.com'
        },
        Zip :{
            type: GraphQLString,
            description: 'user zip code',
            resolve : () => '00100'
        }
    })
});

var friendsType = new GraphQLObjectType({
    name: 'friends',
    description: 'User friends',
    fields: () => ({
        user_id: {
            type: GraphQLInt,
            description: 'user id of users friends'
        },
        time_of_friendship: {
            type: GraphQLString,
            description: 'date time users became friends'
        },
        status :{
            type: GraphQLString,
            description: 'status of friendship'
        }
    })
});

var DestinationType = new GraphQLObjectType({
    name: 'Destination',
    description: 'User destination',
    fields: () => ({
        coordinates: {
            type: GraphQLFloat,
            description: 'global co-ordinates of the user',
            resolve:()=> destination.getDestCoordinates()
        },
        datetime_created: {
            type: GraphQLString,
            description: 'date time when the destination was created',
            resolve:()=> destination.getDestDatetimecreated()
        },
        status :{
            type: GraphQLInt,
            description: 'one of three options between visiting visited or passed',
            resolve:()=> destination.getDestStatus()
        }
    })
});

var feedsType = new GraphQLObjectType({
    name: 'Feeds',
    description: 'timeline feeds from users',
    fields: ()=> ({
        feed_id: {
            type: GraphQLInt,
            description: 'unique id of the user',
            resolve: ()=> feeds.getFeedId()
        },
        actor: {
            type: userType,
            description: 'user who posted  the feed',
            resolve: ()=> feeds.getFeedUser()
        },
        item: {
            type: ItemType,
            description: 'item that was posted',
            resolve: ()=> feeds.getFeedItem()
        },
        destination: {
            type: DestinationType,
            description: 'where the item is expected',
            resolve: ()=> feeds.getFeedDestination()
        },
        comments: {
            type: GraphQLString,
            description: 'a list of comments made',
            resolve: () => feeds.getFeedComments()
        },
        likes: {
            type: GraphQLString,
            description: 'likes fo the item',
            resolve: () => feeds.getFeedLikes()
        }

})
});


var ItemType = new GraphQLObjectType({
    name: 'item',
    description: 'all types of itesms',
    fields: () => ({
        item_id: {
            type: GraphQLInt,
            description: 'item id',
            resolve:()=> items.getItemId()
        },
        datetime_created: {
            type: GraphQLString,
            description: 'date time item was created',
            resolve:()=> items.getItemDatetimecreated()
        },
        name: {
            type: GraphQLString,
            description: 'name of the item',
            resolve:()=> items.getItemName()
        },
        category: {
            type: GraphQLString,
            description: 'which category does it belong to',
            resolve: ()=> items.getItemCategory()
        },
        description: {
            type: GraphQLString,
            description: 'item description /like how it is looks like',
            resolve: () => items.getItemDescription()
        }, photo_album: {
            type: GraphQLString,
            description: 'folder containing item images',
            resolve:() => items.getItemPhotoAlbum()
        }, value: {
            type: GraphQLFloat,
            description: 'items street value',
            resolve:() => items.getItemValue()
        }, condition:{
            type: GraphQLString,
            description: 'items current condition',
            resolve:()=> items.getItemCondition()
        }
    })
});


/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        // Add your own root fields here
        //later on this will be getting feeds of logged in users
        user: { //changed this from widget to loggedIn
            type: userType,
            args: {id: {type: GraphQLString}},
            resolve: (_,args) => getUser()
        },
        item: {
            type: ItemType,
            args: {id: {type: GraphQLInt}},
            resolve: (_,args) => items.getItem()
        },
        feed: {
            type: feedsType,
            args: {id: {type: GraphQLInt}},
            resolve:(_,args) => feeds.getFeed()

        }
    })
});

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
var mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        // Add your own mutations here
    })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export var Schema = new GraphQLSchema({
    query: queryType,
    // Uncomment the following after adding some mutation fields:
    // mutation: mutationType
});
