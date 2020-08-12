import UserToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokenRespositoy {
  generate(user_id: string): Promise<UserToken>;
}
