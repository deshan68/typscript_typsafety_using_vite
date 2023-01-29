import React from 'react'
import './index.css'

export default function Header(props) {

  return (
    <header ><h1>{props.title}</h1></header>
  )
}
Header.defaultProps = {title:"Default Title"}
