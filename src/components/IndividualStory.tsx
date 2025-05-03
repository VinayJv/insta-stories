import { BaseSyntheticEvent } from "react"
import { StoryType } from "../assets/Stories"
import { useAppContext } from "../context/AppContext";

interface Props{
    storyData: StoryType
}

export default function IndividualStory(props: Props): React.JSX.Element{

      const { showStory, updateShowStory, updateCurrentStory } = useAppContext();
    

    const handleStoryClick = (e: BaseSyntheticEvent) => {
        updateShowStory(!showStory);
        updateCurrentStory(parseInt(e.target.value));
    }

    return(
        <button id="individualStory" onClick={handleStoryClick} value={props.storyData.id}>
            <img src={props.storyData.imageURL} id="storyImage" draggable="false"></img>
        </button>
    )
}