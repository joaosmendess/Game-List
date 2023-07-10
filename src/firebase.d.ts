import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";

declare module "firebase" {
  function getAuth(app?: FirebaseApp): Auth;
}