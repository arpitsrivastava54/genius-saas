"use client"
import React from 'react'
import { Typewriter as Component } from 'react-simple-typewriter'

const Typewriter = ({data}:{data:string[]}) => {
  return (
      <Component loop words={data} />
  )
}

export default Typewriter
