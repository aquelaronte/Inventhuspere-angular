import { DefaultUrlSerializer, UrlTree } from '@angular/router';

import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthorized = !!localStorage.getItem('Authorization');
  if (!isAuthorized) {
    const urlSerializer = new DefaultUrlSerializer();
    const urlTree = urlSerializer.parse('/home');
    return urlTree;
  }
  return true;
};
