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
  getGitHistory(@Param() params) {
    return this.gitService.getGitHistory(params);
  }
}
