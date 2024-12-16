// error -> vue -> app
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.log('vue error handler',_args);
  };

  // 整个应用层面的错误捕获
  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error',_args);
  });

  // 仅 Vue 层面的错误捕获
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('app:error');
  });
});
