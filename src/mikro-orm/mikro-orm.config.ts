import { EntityCaseNamingStrategy, LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const config: Options = {
  type: 'postgresql',
  clientUrl: 'postgresql://postgres:password@0.0.0.0:5430/join-issue-demo',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  namingStrategy: EntityCaseNamingStrategy,
  migrations: {
    path: 'dist/src/migrations',
    pathTs: 'src/migrations',
    disableForeignKeys: false,
  },
  seeder: {
    path: 'dist/src/seeding/seeders',
    pathTs: 'src/seeding/seeders',
  },
};

export default config;
