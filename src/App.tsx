import React from 'react';
import './App.css';
import {PostManagement} from "./BusinessProcesses/PostManagement/Containers/PostManagement";
import {Provider} from "inversify-react";
import {container} from "./container";

function App() {
  return (
      <Provider container={container}>
        <div className="App">
          <PostManagement />
        </div>
      </Provider>
  );
}

export default App;
