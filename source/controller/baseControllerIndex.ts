/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest as Request, NextApiResponse as Response } from 'next';
import ControllerIndexAdapter from '../adapter/controllerIndexAdapter';
import BaseControllerDefault from './baseControllerDefault';
import { Operation } from 'flexiblepersistence';
// @ts-ignore
export default class BaseControllerIndex
  extends BaseControllerDefault
  implements ControllerIndexAdapter {
  async index(req: Request, res: Response): Promise<Response> {
    return this.generateEvent(
      req,
      res,
      Operation.read,
      this.event.bind(this),
      true
    );
  }
}