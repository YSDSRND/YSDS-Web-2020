import React, { useEffect } from 'react';
import './assets/scss/main.scss';
import 'swiper/css/swiper.min.css';
import { useDispatch } from 'react-redux';
import Router from './Router';
import { GetOptions } from './Services/Options/Options';
import { SetOptions, SetOptionsLoading } from './Store/Options/OptionsActions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    GetOptions().then((options) => {
      dispatch(SetOptions(options));
      dispatch(SetOptionsLoading(false));
    });
  }, [dispatch]);
  return <Router />;
};

export default App;
