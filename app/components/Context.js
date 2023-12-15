"use client"
import React, { createContext, useState } from 'react'
export const myContext = createContext();

function Context({children}) {
    const [paging, setPaging] = useState("");
    
  return (
    <myContext.Provider value={{paging, setPaging}}>{children}</myContext.Provider>
  )
}

export default Context