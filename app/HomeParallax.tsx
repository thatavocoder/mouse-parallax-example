'use client'

import React from 'react'
import { withDeviceOrientation } from 'react-fns'
import { animated, useSpring } from 'react-spring'

const Xcoef = 0.5
const Ycoef = 0.8

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
]
const trans1 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.1}px,-${y * Ycoef * 0.1}px,0)`
const trans2 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.2}px,-${y * Ycoef * 0.2}px,0)`
const trans3 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.3}px,-${y * Ycoef * 0.3}px,0)`
const trans4 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.4}px,-${y * Ycoef * 0.4}px,0)`
const trans5 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.5}px,-${y * Ycoef * 0.5}px,0)`
const name = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.5}px,-${y * Ycoef * 0.5}px,0)`
const trans6 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.6}px,-${y * Ycoef * 0.6}px,0)`
const trans7 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.7}px,-${y * Ycoef * 0.7}px,0)`
const trans8 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.8}px,-${y * Ycoef * 0.8}px,0)`
const trans9 = (x: number, y: number) =>
  `translate3d(${x * Xcoef}px,-${y * Ycoef * 0.9}px,0)`
const trans10 = (x: number, y: number) =>
  `translate3d(${x * Xcoef}px,-${y * Ycoef}px,0)`

const HomeParallax = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0] }))
  return (
    <div className="page">
      <div
        className="parallax"
        onMouseMove={({ clientX: x, clientY: y }) => {
          set({ xy: calc(x, y) })
        }}
      >
        <animated.div
          className="card1"
          style={{ transform: props.xy.to(trans1) }}
        />
        <animated.div
          className="card2"
          style={{ transform: props.xy.to(trans2) }}
        />
        <animated.div
          className="card3"
          style={{ transform: props.xy.to(trans3) }}
        />
        <animated.div
          className="card4"
          style={{ transform: props.xy.to(trans4) }}
        />
        <animated.div
          className="card5"
          style={{ transform: props.xy.to(trans5) }}
        />
        <animated.div
          className="card6"
          style={{ transform: props.xy.to(trans6) }}
        />
        <animated.div
          className="name"
          style={{ transform: props.xy.to(name) }}
        />
        <animated.div
          className="card7"
          style={{ transform: props.xy.to(trans7) }}
        />
        <animated.div
          className="card8"
          style={{ transform: props.xy.to(trans8) }}
        />
        <animated.div
          className="card9"
          style={{ transform: props.xy.to(trans9) }}
        />
        <animated.div
          className="card10"
          style={{ transform: props.xy.to(trans10) }}
        />
      </div>
    </div>
  )
}

export default withDeviceOrientation(HomeParallax)
