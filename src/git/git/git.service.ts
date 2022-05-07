import { Injectable } from '@nestjs/common';

@Injectable()
export class GitService {
  gitHistory() {
    return 'git history';
  }
}
