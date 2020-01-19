import React, {useEffect} from "react";
import "./assets/scss/main.scss";
import Router from "./Router";
import { GetOptions } from "./Services/Options/Options";
import { useDispatch } from "react-redux";
import { SetOptions, SetOptionsLoading } from "./Store/Options/OptionsActions";

const App: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    GetOptions().then(options => {
      console.log("OPTIONS!", options);
      dispatch(SetOptions(options));
      dispatch(SetOptionsLoading(false));
    })
  }, [])
  return <Router />;
};

export default App;
