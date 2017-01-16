/**
 * @providesModule log
 * @flow
 */

const log = (cb: Function) : Function => {
  return () => {
    if (__DEV__) {
      cb()
    }
  }
}

export default log