import { createContext, useContext, useState } from "react";


interface AppContextProps {
    showStory: boolean;
    updateShowStory: (newValue: boolean) => void;
    currentStory: number;
    updateCurrentStory: (newValue: number) => void;
}

const AppContext = createContext<AppContextProps>({
    showStory: false,
    updateShowStory: () => {},
    currentStory: 0,
    updateCurrentStory: () => {}
});

export function AppContextWrapper({ children }: { children: React.ReactNode }): React.ReactNode{
    const [showStory, setShowStory] = useState(false);
    const [currentStory, setCurrentStory] = useState(0);

    function updateShowStory(newValue: boolean): void{
        setShowStory(newValue);
    }

    function updateCurrentStory(newValue: number){
        setCurrentStory(newValue);
    }
    
    return(
        <AppContext.Provider value={{ showStory, updateShowStory, currentStory, updateCurrentStory }}>
            {children}
        </AppContext.Provider>
    )
} 

export const useAppContext = () => useContext(AppContext);
