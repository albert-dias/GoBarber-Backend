import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';

describe('AuthenticateUser', () => {
  it('should be able authenticate', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const authenticateUser = new AuthenticateUserService(fakeUserRepository);

    const user = await authenticateUser.execute({
      email: 'jhondoe@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });
});
