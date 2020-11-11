import AppError from '@shared/errors/AppError';

// import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';

// let fakeCacheProvider: FakeCacheProvider;
let fakeUserRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    // fakeCacheProvider = new FakeCacheProvider();

    // createUser = new CreateUserService(
    //   fakeUserRepository,
    //   fakeHashProvider,
    //   fakeCacheProvider,
    // );

    authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );
  });

  it('should be able authenticate', async () => {
    const user = await fakeUserRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@gmail.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'jhondoe@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'jhondoe@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able authenticate with wrong password', async () => {
    await fakeUserRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@gmail.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'jhondoe@gmail.com',
        password: '12346',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
