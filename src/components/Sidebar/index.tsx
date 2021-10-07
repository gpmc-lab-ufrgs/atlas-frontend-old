
import { Legend, SearchBar } from './components'
import "./styles.css"

export const Sidebar = () => {

  return (
    <div className="sidebar">
      <SearchBar />
      <div style={{"height": "60%"}}/>
      <Legend />
    </div>
  )
};
