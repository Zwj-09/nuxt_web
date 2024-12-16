enum storageEnums {
  localStorage = 'localStorage',
  sessionStorage = 'sessionStorage',
}

export const getStorage = (key: string, storage: string = 'localStorage') => {
  const value = checkStorageType(storage).getItem(key);
  if (value) {
    return JSON.parse(value);
  }
};
export const setStorage = (key: string, value: any, storage: string = 'localStorage') => {
  checkStorageType(storage).setItem(key, JSON.stringify(value));
};
export const removeStorage = (key: string, storage: string = 'localStorage') => {
  checkStorageType(storage).removeItem(key);
};
export const clearStorage = (storage: string = 'localStorage') => {
  checkStorageType(storage).clear();
};

function checkStorageType(storage: string) {
  return storage === storageEnums.localStorage ? localStorage : sessionStorage;
}
