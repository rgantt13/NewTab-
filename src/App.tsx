import './App.css'
import NavBar from './components/navbar'
import ShortcutSection from './components/shortcutSection'
import TextEditorSection from "./components/textEditorSection"
import { useState } from 'react'

function App() {

const [unlocked, setUnlocked] = useState<boolean>(false);

  return (
      <div>
        <NavBar unlocked={unlocked} onToggle={setUnlocked} />
        <div className='flex'>
          <ShortcutSection unlocked={unlocked} />
          <TextEditorSection/>
        </div>
      </div>
  )
}

export default App
