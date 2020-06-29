window.onload = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyB76RMuMc3PzJmWlsZL7wH4eh7AIJX7InE",
      authDomain: "chatapp-e465d.firebaseapp.com",
      databaseURL: "https://chatapp-e465d.firebaseio.com",
      projectId: "chatapp-e465d",
      storageBucket: "chatapp-e465d.appspot.com",
      messagingSenderId: "632383654104",
      appId: "1:632383654104:web:729cbaa9fb28acc45d6fad"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    console.log(firebase.app().name);
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        if(user.emailVerified){
          model.currentUser = {
            displayName: user.displayName,
            email: user.email
          }
          view.setActiveScreen('welcomeScreen')
        }
        else {
          view.setActiveScreen('loginScreen');
        }
      }
      else{
        view.setActiveScreen('loginScreen');
      }
    });
  }