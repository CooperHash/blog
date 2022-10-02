export function compose(...fns) {
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    value => value
  );
}



export function setStorage(key, value) {
  return localStorage.setItem(key, value)
}