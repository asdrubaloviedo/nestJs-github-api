import { HttpModule, Module } from '@nestjs/common';
import { GitController } from './git/git.controller';
import { GitService } from './git/git.service';

@Module({
  imports: [HttpModule],
  controllers: [GitController],
  providers: [GitService],
})
export class GitModule {}
