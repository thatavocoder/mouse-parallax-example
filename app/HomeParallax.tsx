'use client'

import React from 'react'
import { withDeviceOrientation } from 'react-fns'
import { animated, useSpring } from 'react-spring'

const Xcoef = -0.1
const Ycoef = -0.05

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
]

const trans1 = (x: number, y: number) =>
  `translate3d(${x * Xcoef}px,${y * Ycoef}px,0)`
const trans2 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.9}px,${y * Ycoef * 0.9}px,0)`
const trans3 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.8}px,${y * Ycoef * 0.8}px,0)`
const trans4 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.7}px,${y * Ycoef * 0.7}px,0)`
const trans5 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.6}px,${y * Ycoef * 0.6}px,0)`
const trans6 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.5}px,${y * Ycoef * 0.5}px,0)`
const trans7 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.5}px,${y * Ycoef * 0.5}px,0)`
const trans8 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.4}px,${y * Ycoef * 0.4}px,0)`
const trans9 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.3}px,${y * Ycoef * 0.3}px,0)`
const trans10 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.2}px,${y * Ycoef * 0.2}px,0)`
const trans11 = (x: number, y: number) =>
  `translate3d(${x * Xcoef * 0.1}px,${y * Ycoef * 0.1}px,0)`

const HomeParallax = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0] }))

  return (
    <div className="page">
      <div
        className="parallax"
        onMouseMove={({ clientX: x, clientY: y }) => {
          console.log(props.xy.to(trans1))
          set({ xy: calc(x, y) })
        }}
      >
        {[
          trans1,
          trans2,
          trans3,
          trans4,
          trans5,
          trans6,
          trans7,
          trans8,
          trans9,
          trans10,
          trans11,
        ].map((fn, index) => (
          <animated.div
            key={`card${index + 1}`}
            className={`card${index + 1}`}
            style={{ transform: props.xy.to(fn) }}
          />
        ))}
      </div>
    </div>
  )
}

export default withDeviceOrientation(HomeParallax)
