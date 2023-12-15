import React, { useEffect } from 'react'

function Logo({page}) {
  return (
    <header id="header-section" className={`headerLogo ${page == 2 ? "active" : ""}`}>LCM</header>
  )
}

export default Logo