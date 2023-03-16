import { Route, Routes } from 'react-router-dom';

import { AboutTheAtlas, Contributors, Methods, App, Login, LoadData } from '@components/Modal';

const Modal = () => {
  return (
    <Routes>
      <Route path="aboutTheAtlas" element={<AboutTheAtlas />} />
      <Route path="Methods" element={<Methods />} />
      <Route path="contributors" element={<Contributors />} />


      <Route path="App" element={<App />} />
      <Route path="Login" element={<Login />} />
      <Route path="LoadData" element={<LoadData />} />
    </Routes>
  );
};

export default Modal;
