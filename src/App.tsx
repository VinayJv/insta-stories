import './App.css';
import { storyData } from './assets/Stories';
import Story from './components/Story';
import StoryModal from './components/StoryModal';

function App() {

  return (
    <div id="App">
      <StoryModal />
      <Story storyData={storyData}/>
    </div>
  )
}

export default App
