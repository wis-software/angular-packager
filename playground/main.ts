import { PlaygroundModule } from './playground.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableDebugTools } from '@angular/platform-browser';
import { ApplicationRef, NgModuleRef } from '@angular/core';

/**
 * Bootstrap our Angular app with a top level NgModule
 */
export function main() {
  platformBrowserDynamic()
    .bootstrapModule(PlaygroundModule)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}


/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
  document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
  main();
}

function decorateModuleRef(modRef: NgModuleRef<any>) {
  const appRef = modRef.injector.get(ApplicationRef);
  const cmpRef = appRef.components[0];

  let _ng = (<any>window).ng;
  enableDebugTools(cmpRef);
  (<any>window).ng.probe = _ng.probe;
  (<any>window).ng.coreTokens = _ng.coreTokens;
  return modRef;
}
