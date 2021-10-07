import { useState, useEffect } from 'react'
import { useFeatures } from "../../../../store"

export const SearchBar = () => {
  const { features } = useFeatures();
  const [ localName ] = useState(features.map((e) => e.properties.NAME_DIST))

  useEffect(() => {
    console.log(localName)
  }, [localName])

  console.log("features -> ", features)


  return (
    <div/>
  )
}