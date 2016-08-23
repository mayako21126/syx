/**
 * Created by mayako on 16/7/23.
 */
export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT')
}
export const decrementCounter = function ({ dispatch, state }) {
  dispatch('DECREMENT')
}
export const updateNum = function ({ dispatch, state }, num) {
  console.log(num)
  dispatch('UPDATE_NUM', Number(num))
}
