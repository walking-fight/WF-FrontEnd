import { atom, selector } from 'recoil'

interface IUserData {
  height: number
  weight: number
}

/**
 * test state
 *  @testUserData :기본 user setting 값
 *  @stepCountState : 걸음수
 *  @travelDistanceSelector : 이동거리
 *  @calorieBurnedSelector : 칼로리
 */

export const testUserData = atom<IUserData>({
  key: 'testUserData',
  default: {
    height: 170,
    weight: 70,
  },
})

export const stepCountState = atom<number>({
  key: 'stepCountState',
  default: 0,
})

export const travelDistanceSelector = selector({
  key: 'travelDistanceSelector',
  get: ({ get }) => {
    const stride = get(testUserData).height * 0.45
    const stepCount = get(stepCountState)
    const travelDistanceCm = stride * stepCount
    const travelDistanceKm = travelDistanceCm / 100000

    return travelDistanceKm
  },
})

export const calorieBurnedSelector = selector({
  key: 'calorieBurnedSelector',
  get: ({ get }) => {
    const travelDistance = get(travelDistanceSelector)
    const weight = get(testUserData).weight
    const exerciseCoefficient = 0.5
    const calorieBurned = travelDistance * weight * exerciseCoefficient
    return calorieBurned
  },
})
