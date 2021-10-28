import { useHistory } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'
import './styles.css'

export const ModalContainer = ({title, children} : any) => {
  const history = useHistory();

  return (
    <div className="modalContainer">
      <div
        onClick={history.goBack}
        className="modalDimScreen"
      />
      <div className="modalContent">
        <div className="modalDialog">
          <h3 className="modalTitleBox">
            {title}
            <FaTimes className="modalIconButton" onClick={history.goBack}/>
          </h3>  
          <div className="modalContainerContent">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

