import * as migration_20261116_151628_init from './20261116_151628_init';
import * as migration_20261116_154647_accueil from './20261116_154647_accueil';

export const migrations = [
  {
    up: migration_20261116_151628_init.up,
    down: migration_20261116_151628_init.down,
    name: '20261116_151628_init',
  },
  {
    up: migration_20261116_154647_accueil.up,
    down: migration_20261116_154647_accueil.down,
    name: '20261116_154647_accueil'
  },
];
