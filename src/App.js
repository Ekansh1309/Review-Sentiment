import React, { useState } from "react";
import {datas} from "./data"
import Review from "./components/Review";
const App = () => {
  
  return (
    <div>
      {
        datas.map((data)=>( <Review key={data.review_id} data={data} /> ))
      }
    </div>
  )
};

export default App;
