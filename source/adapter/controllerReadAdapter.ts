/* eslint-disable no-unused-vars */
import { NextApiRequest as Request, NextApiResponse as Response } from 'next';

export default interface ControllerReadAdapter {
  read(req: Request, res: Response): Promise<Response>;
}