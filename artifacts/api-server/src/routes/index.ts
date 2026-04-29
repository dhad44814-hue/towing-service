import { Router, type IRouter } from "express";
import healthRouter from "./health";
import bookingsRouter from "./bookings";
import contactsRouter from "./contacts";
import testimonialsRouter from "./testimonials";

const router: IRouter = Router();

router.use(healthRouter);
router.use(bookingsRouter);
router.use(contactsRouter);
router.use(testimonialsRouter);

export default router;
