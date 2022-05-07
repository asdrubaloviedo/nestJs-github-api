import { GitService } from './git.service';
import { Controller, Get } from '@nestjs/common';

@Controller('git')
export class GitController {
  constructor(private gitService: GitService) {}

  @Get('history')
  gitHistory() {
    return 'git history';
  }
}
