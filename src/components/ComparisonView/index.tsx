import { useEffect, useState } from "react"
import { useComparison, useSidebar } from "../../store"
import { GridView, TableView } from "./components"

export const ComparisonView = () => {
  const { comparisonType } = useComparison()
  const [ contentWidth, setContentWidth ] = useState(window.innerWidth)
  const { sidebarIsOpen } = useSidebar();

  useEffect(() => {
    function handleResize() {
      if (sidebarIsOpen) {
        setContentWidth(100)
      } else {
        setContentWidth(window.innerWidth - 340)
      }
    }
    handleResize()
    
    window.addEventListener("resize", handleResize)
  }, [sidebarIsOpen])

  return(
    <div className="viewer-container" style={{width: sidebarIsOpen ? `${contentWidth}%` : `${contentWidth}px` }}>
      {comparisonType === 'table' && <TableView width={contentWidth} />}
      {comparisonType === 'grid' && <GridView />}
    </div>
  )
} 