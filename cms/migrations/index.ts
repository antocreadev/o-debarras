import * as migration_20261116_151628_init from './20261116_151628_init';

export const migrations = [
  {
    up: migration_20261116_151628_init.up,
    down: migration_20261116_151628_init.down,
    name: '20261116_151628_init'
  },
];
