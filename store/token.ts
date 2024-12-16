export const useTokenStore = defineStore(
  'tokenStore',
  () => {
    const token = ref<string>('e027624c85974335a08997d9c3750956');

    const setToken = (val: string) => {
      token.value = val;
    };

    return {
      token,
      setToken,
    };
  },
  {
    persist: true,
  }
);


