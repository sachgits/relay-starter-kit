/**
 * Created by sachg on 2/1/2016.
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
    getUserTimeCreated,
    getUserUserName
} from './database2';
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
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */


/**
 * Define your own types here
 */

var userType = new GraphQLObjectType({
    name: 'User',
    description: 'A person who uses our app',
    fields: () => ({
        id: {description: "id of the user",type: GraphQLInt,
            resolve:()=> getUserId()
        },
        dateOfBirth: {
            type: GraphQLString,
            description: 'Person\'s date of birth',
            resolve: () => getUserDateOfBirth()
        },
        username: {
            description: 'unique name to identify the user',
            type: GraphQLString,
            resolve: getUserUserName()
        },
        email: {
            type: GraphQLString,
            description: 'user email which might be used for sign in',
            resolve: getUserEmail()
        },
        timeCreated: {
            type: GraphQLString,
            description: 'the exact time user joined us/created an account',
            resolve: getUserTimeCreated()
        },gender: {
            type: GraphQLBoolean,
            description: 'MALE OR FEMALE DEFAULTS TO MALE',
            resolve: getUserGender()
        },PhotoAlbum: {
            type: GraphQLString,
            description: 'folder containg users portrait photos',
            resolve: getUserPhotoAlbum()
        },fname: {
            type: GraphQLString,
            description: 'Users first name',
            resolve: getUserFname()
        },lname: {
            type: GraphQLString,
            description: 'Users Last Name',
            resolve: getUserLname()
        },activeState: {
            type: GraphQLBoolean,
            description: 'is user active',
            resolve: getUserActiveState()
        },lastLogin: {
            type: GraphQLBoolean,
            description: 'user\'s last login',
            resolve: getUserLastLogin()
        }
    })
});

var addressType = new GraphQLObjectType({
    name: 'address',
    description: 'User Address',
    fields: () => ({
        phoneNumber: {
            type: GraphQLString,
            description: 'User Phone number',
            resolve : ()=>{return '0721169392'}
        },
        email: {
            type: GraphQLString,
            description: 'user email',
            resolve : ()=> {return 'sachgits@gmail.com'}
        },
        Zip :{
            type: GraphQLString,
            description: 'user zip code',
            resolve : () => {return '00100'}
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
            description: 'global co-ordinates of the user'
        },
        datetime_created: {
            type: GraphQLString,
            description: 'date time when the destination was created'
        },
        status :{
            type: GraphQLEnumType,
            description: 'one of three options between visiting visited or passed'
        }
    })
});


var ItemType = new GraphQLObjectType({
    name: 'Item',
    description: 'all types of itesms',
    fields: () => ({
        item_id: {
            type: GraphQLInt,
            description: 'item id'
        },
        datetime_created: {
            type: GraphQLString,
            description: 'date time item was created'
        },
        name: {
            type: GraphQLString,
            description: 'name of the item'
        },
        category: {
            type: GraphQLString,
            description: 'which category does it belong to'
        },
        description: {
            type: GraphQLString,
            description: 'item description /like how it is looks like'
        }, photo_album: {
            type: GraphQLString,
            description: 'folder containing item images'
        }, value: {
            type: GraphQLFloat,
            description: 'items street value'
        }, condition:{
            type: GraphQLString,
            description: 'items current condition'
        },
        watchlist :{
            type: GraphQLList(GraphQLInt),
            description: 'all users who are currently on this items watchlist'
        }
    })
});

var LikeType = new GraphQLObjectType({
    name: 'Like',
    description: 'liked item by user',
    fields: () => ({
        user_id: {
            type: GraphQLInt,
            description: 'user id of users friends'
        },
        time_of_action: {
            type: GraphQLString,
            description: 'date time users became friends'
        },
        item_id: {
            type: GraphQLString,
            description: 'liked item'
        }
    })
});

var commentType = new GraphQLObjectType({
    name: 'comment',
    description: 'comment made by user',
    fields: () => ({
        user_id: {
            type: GraphQLInt,
            description: 'user id of users friends'
        },
        time_of_action: {
            type: GraphQLString,
            description: 'date time users became friends'
        },
        item_id: {
            type: GraphQLString,
            description: 'commented item'
        },
        comment: {
            type: GraphQLString,
            description: 'user comment on item'
        }
    })
});

var TradeType = new GraphQLObjectType({
    name: 'Trade',
    description: 'Trades that are happening',
    fields: () => ({
        user_id: {
            type: GraphQLInt,
            description: 'user id of users friends'
        },
        time_of_friendship: {
            type: GraphQLString,
            description: 'date time users became friends'
        },
        status: {
            type: GraphQLString,
            description: 'status of friendship'
        }
    })
});


/**
 * Define your own connection types here
 */
var {connectionType: widgetConnection} =
    connectionDefinitions({name: 'Widget', nodeType: widgetType});

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        // Add your own root fields here
        //later on this will be getting feeds of logged in users
        loggedIn: { //changed this from widget to loggedIn
            type: userType,
            args: connectionArgs,
            resolve: (args) => getUser(args)
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
