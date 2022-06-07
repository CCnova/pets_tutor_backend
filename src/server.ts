import { Express } from "express";

const server = {
  port: process.env.PORT || 3000,

  start(app: Express) {

    app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });

  },
};

export default server;