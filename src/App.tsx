import './App.css'
import NavBar from './components/navbar'
import ShortcutSection from './components/shortcutSection'
import TextEditorSection from "./components/textEditorSection"

function App() {

  return (
      <div>
        <NavBar/>
        <div className='flex'>
          <ShortcutSection/>
          <TextEditorSection/>
        </div>
      </div>
  )
}

export default App
