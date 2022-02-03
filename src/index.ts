import express from "express";
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log("joe");
});

// // currying middleware
// const middleware =
//   ({ name }: { name: string }) =>
//   (req: Request, res: Response, next: NextFunction) => {
//     res.locals.name = name;
//     next();
//   };
// app.use(middleware({ name: "Bob" }));

// app.get("/api/books/:bookId/:authorId", (req: Request<{name: "string"}, {}, {name: "string"}>, res: Response) => {
//   const name = res.locals.name;
//   const name2 = req.params.name;
//   const name3 = req.body.name;
// });
