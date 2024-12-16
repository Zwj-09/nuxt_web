/**
 * 图片懒加载
 * 使用
 *  img v-lazy="具体需要展示的图片" src="loading.gif\默认加载中的图片的URL"
 */

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy', {
    mounted(el, bindings) {
      const imgObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              entry.target.src = bindings.value;
            }
          });
        }
        // {
        //   root: null, // 指定根元素 默认浏览器视口(必须是目标元素的父级元素)
        //   rootMargin: '0px', // 指定根元素与视口之间初始的距离
        //   threshold: 0.5, // 指定可见性的阈值 0-1之间的小数 默认为0
        // }
      );

      imgObserver.observe(el);
    },
  });
});
