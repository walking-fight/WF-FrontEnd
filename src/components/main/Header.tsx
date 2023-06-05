'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  travelDistanceSelector,
  stepCountState,
  calorieBurnedSelector,
} from '@/src/stores/walking'

const Header = () => {
  const testUserLoggedIn = {
    user_profileImage_url: '/userprofile.png',
    user_nickname: 'test_user',
  }

  const [stepCount, setStepCount] = useRecoilState(stepCountState)
  const travelDistance = useRecoilValue(travelDistanceSelector)
  const calorieBurned = useRecoilValue(calorieBurnedSelector)

  /**
   * test 시뮬레이션
   *  @stepCount : 걸음수
   *  @travelDistance : 이동거리
   * @calorieBurned : 칼로리
   */

  useEffect(() => {
    setInterval(() => {
      setStepCount((prev) => prev + 1)
    }, 10)
  }, [])

  return (
    <div className="h-56 bg-main-brand flex flex-col items-center rounded-b-3xl">
      <div className="flex items-center justify-center w-15 h-15 bg-white rounded-2xl mt-5">
        <Image
          src={testUserLoggedIn.user_profileImage_url}
          width={60}
          height={60}
          alt="user-profile"
        />
      </div>
      <div className="mt-1 text-xs text-white">
        {testUserLoggedIn.user_nickname}
      </div>

      <div className="flex justify-center items-center w-full mt-5 mx-0">
        <Image
          className="ml-1 mr-1"
          src={'/footstep1.png'}
          width={27}
          height={34}
          alt="footstep"
        />
        <div className="w-10 text-3xl text-white text-center mr-10 ml-1">
          {stepCount.toLocaleString()}
        </div>
      </div>

      <div className="w-full mt-5 text-xs text-white flex justify-center items-center ">
        <div className="w-16 text-center">{travelDistance.toFixed(2)}km</div>
        <div className="mx-2">|</div>
        <div className="w-16 text-center">{calorieBurned.toFixed(2)}kcal</div>
      </div>
    </div>
  )
}

export default Header
