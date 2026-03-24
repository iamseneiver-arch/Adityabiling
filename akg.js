function signup(){
  firebase.auth().createUserWithEmailAndPassword(email, pass);
}

function login(){
  firebase.auth().signInWithEmailAndPassword(email, pass);
}
