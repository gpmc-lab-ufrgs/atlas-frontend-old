import { Route, Routes } from 'react-router-dom';

import { AboutTheAtlas, Contributors, Methods, App, Upload, Login } from '@components/Modal';

const Modal = () => {
  return (
    <Routes>
      <Route path="aboutTheAtlas" element={<AboutTheAtlas />} />
      <Route path="Methods" element={<Methods />} />
      <Route path="App" element={<App />} />
      <Route path="contributors" element={<Contributors />} />

      <Route path="Upload" element={<Upload />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
};

export default Modal;
