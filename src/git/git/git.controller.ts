import { GitService } from './git.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('git')
export class GitController {
  constructor(private gitService: GitService) {}

  @Get(':username')
  gitInformation(@Param() params) {
    return this.gitService.getGitInformation(params);
  }

  @Get(':username/:repository')
  commitsInformation(@Param() params) {
    return this.gitService.getCommitsInformation(params);
  }

  @Get('history')
  gitHistory() {
    return {
      success: true,
      data: this.gitService.gitHistory(),
    };
  }
}
