import { storyData } from "../assets/Stories";
import { useAppContext } from "../context/AppContext";

export default function StoryModal(): React.JSX.Element{
      const { showStory, updateShowStory, currentStory, updateCurrentStory } = useAppContext();

      const clickedStory = () => storyData.find((storyObj) => storyObj.id == currentStory);

      function handleButtonClick():void {
        updateShowStory(!showStory);
      }

      function handleNext():void {
        if(currentStory < storyData.length)
        updateCurrentStory(currentStory + 1);
      }

      function handlePrev(): void {
        if(currentStory > 1){
            updateCurrentStory(currentStory - 1)
        }
      }
    return(
        <div id="storyModal" style={{ display: showStory ? 'block' : 'none' }}>
            <div style={{ position: 'relative', height: '100%'}} id="modalImageContainer">
                <button id="floatingButton" onClick={handleButtonClick}>X</button>
                <button className="ModalUIButton" id="nextButton" onClick={handleNext}></button>
                <button className="ModalUIButton" id="prevButton" onClick={handlePrev}></button>
                <img src={clickedStory()?.imageURL} id="modalImage"></img>
            </div>
        </div>
    )
}