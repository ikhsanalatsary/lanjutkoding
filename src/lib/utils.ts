import { Maybe } from './graphql';

export function generateCopyRight(copyRightText: Maybe<string>) {
  if (copyRightText) {
    let copyRights = copyRightText.split(' ');
    let c = copyRights.shift();
    copyRights[0] = `${copyRights[0]} - ${new Date().getFullYear()}`;
    return [c].concat(copyRights).join(' ');
  }

  return '';
}
