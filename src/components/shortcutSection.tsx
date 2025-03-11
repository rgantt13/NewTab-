//import { useState } from "react";
//import NewShortcut from "./newShortcut";
import NewShortcut from "./newShortcut";
import NewShortcutCategory from "./newShortcutCategory";

//TODO: Rip out components for shortcutCategory and shortcut. Must remove hardcoded svgs and URLs and store this data instead such that users can fetch and create their own shortcuts
const ShortcutSection = ({unlocked}: {unlocked: boolean}) => {

     const [shortcutCategories, setShortcutCategories] = useState<ShortcutCategories[]>([]);
    // const [pastedSvg, setPastedSvg] = useState<string>("");

    // const handleSetSvgTest = () => {
    //     let modifiedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M480-720q-33 0-56.5-23.5T400-800t23.5-56.5T480-880t56.5 23.5T560-800t-23.5 56.5T480-720M360-80v-520q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5 174-9.5T820-720l20 80q-56 15-118 25t-122 15v520h-80v-240h-80v240z"/></svg>';
    //     modifiedSvg = modifiedSvg.replace(/(width|height)=".*?"/g, "");
    //     modifiedSvg = modifiedSvg.replace(
    //     /<svg/,
    //     `<svg width="48" height="48"`
    //     );

    //     setPastedSvg(modifiedSvg)
    // }

    const renderShortcuts = () : React.ReactNode => {
          return shortcutCategories.map((category) => {
            return (    
              <div className="p-4">
                    <h2>{category.name}</h2>
                    <div className="flex justify-start items-center">
                        {category.shortcuts.map((shortcut) => {
                            return (
                              <div className="p-4">
                              <a href={shortcut.url}>
                                <div dangerouslySetInnerHTML={{
                                  __html: shortcut.svgContent.replace(/fill=".*?"/g, `fill="${"#e5e7eb"}"`),
                                }}>
                                </div>
                              </a>
                          </div>
                            )
                        })}
                        {unlocked &&
                          <NewShortcut/>
                        }
                    </div>
              </div>
        )})
    }

    return (
      <div className="w-6/12">
        <div className="flex flex-col ml-12">
            
                {renderShortcuts()}

                {unlocked &&
                    <NewShortcutCategory/>
                }

        </div>
      </div>
    )
  }
  
  export default ShortcutSection