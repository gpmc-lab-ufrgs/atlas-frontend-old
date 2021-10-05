import { Map, Sidebar } from "../../components"
import "./styles.css"

export const Main = () => {
  
  // useEffect(() => {

  //   for(var i = 1; i < 666; i++) {
  //     axios.get(`http://api-perfil.seade.gov.br/v1/dados/tema/${i}/1`)
  //     .then(function(res) {
  //       console.log(res.data.infolocalidade.nome, ": ", res.data.tema[0].dados[1].mun)
  //     })
  //     .catch(function(error) {
  //       console.log(error)
  //     })
  //   }
  // }, [])

  return (
    <div className="main">
      <Sidebar/>
      <Map/>
    </div>
  )
}