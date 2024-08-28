//  <======================== user controller for the file ==============================>

import { Request, Response } from "express";

// importing the required modules

// creating the user controller class
export class UserController {
  constructor() {}

  // controller for getting the home page
  public async getHome(req: Request, res: Response): Promise<void> {
    try {
      res.json("home page");
    } catch (error) {
      console.error("error", error);
    }
  }
}

// exporting the class
export default UserController;
