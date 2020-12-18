/* eslint-disable no-unused-vars */
import { NextApiRequest as Request, NextApiResponse as Response } from 'next';

export default interface ControllerShowAdapter {
  show(req: Request, res: Response): Promise<Response>;
}