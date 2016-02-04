/**
 * Created by sachg on 1/18/2016.
 */
    
    import austineAhonya from './sample_data'

class  Feed extends Object{
    constructor(user_id,verb,id, time_created){
        super();
        this.sample = sachgits;
    }

    parseJson(){
        return this.sample;
    }

    getCommentsFromFeed(){
        return this.sample.activities[0].newsfeed.comments;
    }

    parseImgUrl(){
        return this.sample.activities[0].imageUrl;
    }

    cordinates_to_google_maps(){
        return this.sample.activities[0].coordinates;
    }
    
    getUserName(){
        return this.sample.activities[0].actor;
    }
    
    getUserId(user_id){
       return (user_id % 2 === 0)? 0:1;
    }
    
    getUserInfo(){
        var profileFolder = "sachgits";
        return {actor: 'sachgits',id: 4,profileImg : '/data/profile/images/${profileFolder}/sachgits1.jpg'};
    }

    getUserProfilefromFeed(){
        
    }
    getUserTrades(){

    }
    getComments(){

    }

}

class User extends Object{
    constructor(userObj){
        super();
        this.nextDestination = [];
        this.id = userObj.id;
        this.dateOfBirth = userObj.dateOfBirth;
        this.username = userObj.username;
        this.timeCreated = userObj.timeCreated;
        this.email = userObj.email;
        this.gender = userObj.gender;
        this.photoAlbum = userObj.photoAlbum;
        this.fname = userObj.fname;
        this.lname = userObj.lname;
        this.activeState = userObj.activeState;
        this.lastLogin = userObj.lastLogin;

        /*foreach(destination in userObj.nextDestination, function(){
            this.nextDestination.add(destination);
        }); */
    }
}

module.exports = {
     firstUser: new User(austineAhonya),
    getUser: (id,firstUser) => {return (id == firstUser.id) ? firstUser : null},
    getUserId: (firstUser) => firstUser.id,
    getUserDateOfBirth: (firstUser) => firstUser.dateOfBirth,
    getUserUserName: (firstUser)=> firstUser.username,
    getUserTimeCreated: (firstUser)=> firstUser.timeCreated,
    getUserEmail: (firstUser) => firstUser.email,
    getUserGender: (firstUser) => firstUser.gender,
    getUserPhotoAlbum: (firstUser)=> firstUser.photoAlbum,
    getUserFname: (firstUser)=> firstUser.fname,
    getUserLname: (firstUser)=> firstUser.lname,
    getUserActiveState: (firstUser) => firstUser.activeState,
    getUserLastLogin: (firstUser) => firstUser.lastLogin
};