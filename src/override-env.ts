export const overrideEnv = async <T>(env: T): Promise<T> => {
  // try {
  //   const response = await fetch('https://sample.com/api/client-env');
  //   const dynamicEnv: T = await response.json();
  //   for (const key in dynamicEnv) {
  //     if (Object.prototype.hasOwnProperty.call(dynamicEnv, key)) {
  //       const targetProp = env[key];
  //       if (targetProp !== undefined) {
  //         env[key] = dynamicEnv[key];
  //       }
  //     }
  //   }
  // } catch (e) {}
  return env;
};
