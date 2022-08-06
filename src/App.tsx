import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AbilityBar from './components/AbilityBar';

export const ItemTypes = {
  ABILITY: 'ability',
};

function App() {
  return (
    <div className='bg-main-bg text-slate-200 flex h-screen'>
      {/* 
        1. Make an ability bar components
          - Should be able to show the abilities and the image for the abilities.
          - Should show ability description when hovering or selecting an ability
          - Should be able to change the abilities positions
            - Click to select new ability 
            - Or drag to switch and drag from book
        2. Make a Ability component that show and ability and is loaded with enitities.
          - Each ability should be stored in the entities subdirectory and should be displayed in the ability book
          - Either have all in one json-file or one json-file for each ability.
        3. Save a ability bar setup with a name to localstorage and show the saved bars somehow.
        4. Assign numbers to all saved bars
        5. Have a Numbered ability bar overview to show all current equiped ability bars.
      */}
      <DndProvider backend={HTML5Backend}>
        <AbilityBar />
      </DndProvider>
    </div>
  );
}

export default App;
