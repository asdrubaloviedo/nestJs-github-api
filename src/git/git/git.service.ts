import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class GitService {
  constructor(private httpService: HttpService) {}

  async getGitInformation(params) {
    // console.log('params :>> ', params);

    return this.httpService
      .get(`https://api.github.com/users/${params.username}`)
      .pipe(
        map((response) => response.data),
        map((data) => ({
          login: data.login,
          url: data.url,
          public_repos: data.public_repos,
          created_at: data.created_at,
          updated_at: data.updated_at,
        })),
      );
  }

  getCommitsInformation(params) {
    console.log('params :>> ', params);

    return this.httpService
      .get(`https://api.github.com/repos/${params.username}/${params.repository}/commits`)
      .pipe(
        map((response, index) => {
          console.log('index :>> ', index);
          console.log('response.data :>> ', response.data[0].commit.author);
          response.data[0].commit.author;
        }),
        map((data) => ({
          data: data,
        })),
      );
  }

  gitHistory() {
    return 'git history';
  }
}
