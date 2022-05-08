import { Injectable, HttpService } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class GitService {
  constructor(private httpService: HttpService) {}

  async getGitInformation(params) {
    // console.log('params :>> ', params);

    return this.httpService
      .get(`https://api.github.com/users/${params.username}`)
      .pipe(
        // tap(data => console.log('data: ', data)),
        map((response) => ({
          name: response.data.name,
          url: response.data.url,
          public_repos: response.data.public_repos,
          created_at: response.data.created_at,
          updated_at: response.data.updated_at,
        })),
      )
  }

  getCommitsInformation(params) {
    // console.log('params :>> ', params);

    return this.httpService
      .get(`https://api.github.com/repos/${params.username}/${params.repository}/commits/?page=1`)
      .pipe(
        tap(data => console.log('data.data[0]: ', data.data[0])),
        map((response) => ({
          author: response.data[0].commit.author,
          message: response.data[0].commit.message,
          url: response.data[0].commit.url,
        })),
      );
  }

  gitHistory() {
    return 'git history';
  }
}
