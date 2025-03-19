import { Router } from "express";
import userRouter from "./user.routes.js";
import subscriptionRouter from "./subscription.routes.js";
import authRouter from "./auth.routes.js";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/users", userRouter);
routes.use("/subscriptions", subscriptionRouter);

export default routes;
