import { AuthApiClient } from '../auth';
import {
  UserOneApiClient,
  UserManyApiClient
} from '../user';
import { UserProfileApiClient } from '../user-profile';
import {
  RepositoryManyApiClient,
  RepositoryOneApiClient
} from '../repository';

export interface ApiClientFacade<C> extends AuthApiClient {
   Auth: AuthApiClient,
   User: UserOneApiClient,
   Users: UserManyApiClient,
   UserProfile: UserProfileApiClient,
   Repositories: RepositoryManyApiClient,
   Repository: RepositoryOneApiClient
   setConfig(C): this;
}
