Meteor.methods({
  addPost: function (data) {
    Posts.insert({
      image: data,
      createdAt: new Date().toLocaleString(),
      likes: 0,
      user: {
        _id: Meteor.user()._id,
        email: Meteor.user().emails[0].address
      }
    });
  }
});