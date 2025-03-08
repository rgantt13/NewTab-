import './App.css'
import NavBar from './components/navbar'
import ShortcutSection_Old from './components/shortcutSection_hardcoded'
import TextEditorSection from "./components/textEditorSection"
import { useState } from 'react'

function App() {

const [unlocked, setUnlocked] = useState<boolean>(false);

  return (
      <div className='flex flex-col h-full'>
        <NavBar unlocked={unlocked} onToggle={setUnlocked} />
        <div className='flex h-full'>
          <ShortcutSection_Old unlocked={unlocked} />
          <div className='flex flex-col w-6/12'>
              {/* <Button className='w-full mx-4'></Button> */}
              <TextEditorSection/>
          </div>
        </div>
      </div>
  )
}

export default App
