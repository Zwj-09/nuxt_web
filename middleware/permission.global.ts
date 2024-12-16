export default defineNuxtRouteMiddleware((to) => {
  if (!to.matched.length) {
    // 跳转页面
    return '/404';
  }
});
