import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export default () => {
  const YAML_CONFIG_FILENAME = `config.${process.env.NODE_ENV || 'development'}.yaml`;
  return yaml.load(
    // readFileSync(join(__dirname, '../../../..', YAML_CONFIG_FILENAME), 'utf8'),
    readFileSync(YAML_CONFIG_FILENAME, 'utf8'),
  ) as Record<string, any>;
};
