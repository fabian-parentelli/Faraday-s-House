import UserRouter from "./users.router.js";
import MessagesRouter from "./messages.router.js";

export const userRouter = new UserRouter().getRouter();
export const messagesRouter = new MessagesRouter().getRouter();