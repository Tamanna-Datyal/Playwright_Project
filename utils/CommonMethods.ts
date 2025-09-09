import * as fs from "fs";
import * as path from "path";

// utils/commonmethods.ts

export class CommonMethods {

  // Generate unique email using timestamp
  static generateEmail(): string {
    const timestamp = Date.now();
    return "testuser" + timestamp + "@mail.com";
  }

  // Generate random strong password
  static generatePassword(): string {
    const randomNum = Math.floor(Math.random() * 1000);
    return "Pass@" + randomNum;
  }
}