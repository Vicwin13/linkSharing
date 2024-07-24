import "firebase/auth";

import firebase from "firebase/app";

export const signup = (email: any, password: any) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const login = (email: any, password: any) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logout = () => {
  return firebase.auth().signOut();
};
