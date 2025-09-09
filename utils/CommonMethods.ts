import * as fs from "fs";
import * as path from "path";

// utils/commonmethods.ts
export class CommonMethods {
   static email: string = CommonMethods.generateEmail();
   static password: string = CommonMethods.generatePassword();
  
   private static generateEmail(): string {
    const timestamp = Date.now();
    return "testuser" + timestamp + "@mail.com";
  }

  private static generatePassword(): string {
    const randomNum = Math.floor(Math.random() * 1000);
    return "Pass@" + randomNum;
  }
}
