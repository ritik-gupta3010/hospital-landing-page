import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import Innovative from "./components/Innovative";
import Specialist from "./components/Specialist";
import CustomesSay from "./components/CustomesSay";
import NewsLetter from "./components/NewsLetter";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect } from "react";

import { fetchData } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";
function App(props) {
  const reviewCardInformation = useSelector(
    (state) => state.reviewCardInformation
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(reviewCardInformation);
  // console.log(state)
  return (
    <div>
      <Nav />
      <Home />
      <Services />
      <Innovative />
      <Specialist />
      <div style={{display: 'grid',gridTemplateColumns: '1fr 1fr'}}>
      {reviewCardInformation &&
        Object.values(reviewCardInformation).map((info) => (
          <CustomesSay info={info} />
        ))}
      </div>
      
      <NewsLetter />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
