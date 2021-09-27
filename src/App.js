import {React} from 'react';
import './App.css';
import Header from './Components/Header';
import SideBarr from './Components/SideBarr';
import RecommendedVideos from './Components/RecommendedVideos';

function App() {

  return (
    <div className="App">
      {/* Header */}
        <Header/>

        
      <div className="app-page">
          {/* SideBarr */}
          <SideBarr/>

          {/* Videos */}
          <RecommendedVideos/>
      </div>

    </div>
  );
}

export default App;
