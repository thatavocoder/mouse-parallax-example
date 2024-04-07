'use client'

import React from 'react'
import { withDeviceOrientation } from 'react-fns'
import { animated, useSpring } from 'react-spring'

const Xcoef = -0.1
const Ycoef = -0.1

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
]

const HomeParallax = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0] }))

  const trans1 = (x: number, y: number) =>
    `translate3d(${x * Xcoef}px,${y * Ycoef * 0}px,0)`
  const trans2 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0.3}px,${y * Ycoef * 0.1}px,0)`
  const trans3 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0.3}px,${y * Ycoef * 0.2}px,0)`
  const trans4 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0.4}px,${y * Ycoef * 0.2}px,0)`
  const trans5 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0.5}px,${y * Ycoef * 0.3}px,0)`
  const trans6 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0.6}px,${y * Ycoef * 0.4}px,0)`
  const trans7 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0.7}px,${y * Ycoef * 0.5}px,0)`
  const trans8 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0.8}px,${y * Ycoef * 0.6}px,0)`
  const trans9 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0}px,${y * Ycoef * 0.7}px,0)`
  const trans10 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0.9}px,${y * Ycoef * 0.9}px,0)`
  const trans11 = (x: number, y: number) =>
    `translate3d(${x * Xcoef * 0.9}px,${y * Ycoef * 0.5}px,0)`

  return (
    <div className="mainContain">
      <div
        className="w-full h-screen relative z-10 left-[-5vw] block items-center justify-center"
        onMouseMove={({ clientX: x, clientY: y }) => {
          set({ xy: calc(x, y) })
        }}
      >
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans1),
            backgroundImage: `url(parallax/layer11.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans2),
            backgroundImage: `url(parallax/layer10.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans3),
            backgroundImage: `url(parallax/layer9.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans4),
            backgroundImage: `url(parallax/layer8.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans5),
            backgroundImage: `url(parallax/layer7.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans6),
            backgroundImage: `url(parallax/layer6.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans7),
            backgroundImage: `url(parallax/layer5.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans8),
            backgroundImage: `url(parallax/layer4.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans9),
            backgroundImage: `url(parallax/layer3.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans10),
            backgroundImage: `url(parallax/layer2.png)`,
          }}
        />
        <animated.div
          className={`fixed bg-center bg-no-repeat bg-fixed bg-[length:110vw_110vh] w-[110vw] h-[110vh] will-change-transform`}
          style={{
            transform: props.xy.to(trans11),
            backgroundImage: `url(parallax/layer1.png)`,
          }}
        />
      </div>
    </div>
  )
}

export default withDeviceOrientation(HomeParallax)
