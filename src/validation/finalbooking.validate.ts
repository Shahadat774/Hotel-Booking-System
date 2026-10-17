import type { NextFunction, Request, Response } from "express";
import * as z from "zod";

const ConformBooking = z.object({
  userid: z.coerce.number().int().positive(),
  uuid: z.string(),
});

export interface BookingParams {
  userid: number;
  uuid: string;
}

export const FinalBookingValidate = async ( req: Request, res: Response, next: NextFunction) => {
  try {
    const validated = await ConformBooking.parseAsync({
      userid: req.params.userid,
      uuid: req.params.uuid,
    });

    // Attach validated data for the handler
    (req as Request & { booking: BookingParams }).booking = validated;

    return next();
  } catch (e) {
    res.send(e);
  }
};