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

  useEffect(() => {
    setInterval(() => {
      setStepCount((prev) => prev + 1)
    }, 500)
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

      <div className="mt-5 flex">
        <Image
          className="mr-1"
          src={'/footstep.png'}
          width={30}
          height={34}
          alt="footstep"
        />
        <div className="text-3xl text-white ">{stepCount.toLocaleString()}</div>
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
