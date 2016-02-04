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
            resolve:()=> getUserUsername()
        },
        email: {
            type: GraphQLString,
            description: 'user email which might be used for sign in',
            resolve:()=> getUserEmail()
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
