import { Route, Routes } from 'react-router-dom';

import { AboutTheAtlas, Contributors } from '@components/Modal';

const Modal = () => {
  return (
    <Routes>
      <Route path="aboutTheAtlas" element={<AboutTheAtlas />} />
      <Route path="contributors" element={<Contributors />} />
    </Routes>
  );
};

export default Modal;
