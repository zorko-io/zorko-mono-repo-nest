import { ApiModelProperty } from '@nestjs/swagger';
import { IdentityParams } from '../../../utils/identity.params';

export class ReadRepositoryParams implements IdentityParams {
  @ApiModelProperty()
  id: string;
}
