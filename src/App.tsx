import './App.css'
import NavBar from './components/navbar'
import ShortcutSection from './components/shortcutSection'
import TextEditorSection from "./components/textEditorSection"
import { useState } from 'react'
import { Button } from '@mantine/core'

function App() {

const [unlocked, setUnlocked] = useState<boolean>(false);

  return (
      <div>
        <NavBar unlocked={unlocked} onToggle={setUnlocked} />
        <div className='flex'>
          <ShortcutSection unlocked={unlocked} />
          <div className='flex flex-col w-6/12'>
              {/* <Button className='w-full mx-4'></Button> */}
              <TextEditorSection/>
          </div>
        </div>
      </div>
  )
}

export default App
