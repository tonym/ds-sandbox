import { globalConstants } from '../../constants/index';

export default function getClassKey(value: string): string {
  return globalConstants.prefix + globalConstants.delimiter + value;
}
