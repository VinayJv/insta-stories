import { useEffect, useRef, useState } from "react";
import { StoryType } from "../assets/Stories";
import IndividualStory from "./IndividualStory";

export interface Props {
    storyData: StoryType[]
}


export default function Story(props: Props): React.JSX.Element{
    const containerRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: MouseEvent) => {
        setIsDragging(true);
        if(containerRef.current){
            setStartX(e.pageX - containerRef.current.offsetLeft);
            setScrollLeft(containerRef.current.scrollLeft);
        }
        e.preventDefault();
      };
    
      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        if(containerRef.current){
            const x = e.pageX - containerRef.current.offsetLeft;
            const walk = (x - startX) * 1;
            containerRef.current.scrollLeft = scrollLeft - walk;
        }
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };
    
      const handleMouseLeave = () => {
        setIsDragging(false);
      };
    
      useEffect(() => {
          if(containerRef.current){
            const container = containerRef.current;
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseup', handleMouseUp);
            container.addEventListener('mouseleave', handleMouseLeave);
    
        return () => {
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseup', handleMouseUp);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
      }, [isDragging, startX, scrollLeft]);


    return(
    <div id="storyComponent" ref={containerRef} style={{
        overflowX: 'auto',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}>
        {props.storyData.map((item,index)=><IndividualStory storyData={item} key={index}/>)}
    </div>);
}