import React from 'react'

const a = '333'

const c = (
  <div>
    hello world
  </div>
)

export default function ello() {
  return (
    <>
      <div
        className="ehl"
        width="3"
        color="red"
        font="hello"
        height={330}
      >
        {c}
      </div>
      <div
        className="ehl "
        disabled
        disable2d={!!a}
      >
        {c}
      </div>
      <div className="ehl">
        {c}
      </div>
    </>
  )
}
