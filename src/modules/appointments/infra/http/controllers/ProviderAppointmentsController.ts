import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';
import { classToClass } from 'class-transformer';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { day, month, year } = request.query;

    const listProviderAppointment = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listProviderAppointment.execute({
      day: Number(day),
      month: Number(month),
      year: Number(year),
      provider_id: user_id,
    });

    return response.json(classToClass(appointments));
  }
}
