import { Module } from '@nestjs/common';
import { GitModule } from './git/git.module';

@Module({
  imports: [GitModule],
})
export class AppModule {}
