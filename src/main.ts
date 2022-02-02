import { enableProdMode, InjectionToken } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { overrideEnv } from './override-env';

if (environment.production) {
  enableProdMode();
}

/**
 * 便宜上main.tsに記述しているが、InjectionTokenは別ファイルにまとめたほうがBetter
 */
export const ENVIRONMENT = new InjectionToken<Record<string, unknown>>(
  'environment'
);

const main = async () => {
  overrideEnv(environment).then((dynamicEnv) => {
    platformBrowserDynamic([{ provide: ENVIRONMENT, useValue: dynamicEnv }])
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  });
};

main();
