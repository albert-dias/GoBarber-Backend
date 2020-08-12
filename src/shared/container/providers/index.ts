import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProviders';
import DiskeStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

// import IMailProvider from './MailProvider/models/IMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskeStorageProvider,
);
