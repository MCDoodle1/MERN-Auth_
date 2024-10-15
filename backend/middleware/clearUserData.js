import { User } from "../models/user.model.js";

let dataCleared = false; // Keep track to ensure it runs only once

export const clearUserData = (req, res, next) => {
  if (!dataCleared) {
    User.deleteMany({})
      .then(() => {
        console.log("All user data cleared from database.");
        dataCleared = true;
      })
      .catch((err) => {
        console.error("Error clearing user data: ", err);
      });
  }
  next();
};
