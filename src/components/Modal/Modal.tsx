import { Switch, Route as Path } from "react-router-dom";

import {
  AboutTheAtlas,
  Research,
  FAQ,
  Contributors,
  Methods,
} from "@components/Modal";

const Modal = () => {
  return (
    <Switch>
      <Path exact path="/aboutTheAtlas">
        <AboutTheAtlas />
      </Path>
      <Path exact path="/contributors">
        <Contributors />
      </Path>
      <Path exact path="/methods">
        <Methods />
      </Path>
      <Path exact path="/research">
        <Research />
      </Path>
      <Path exact path="/faq">
        <FAQ />
      </Path>
    </Switch>
  );
};

export default Modal;
