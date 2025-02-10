import Dropdown from "./dropdown"
import { Switch } from "@mantine/core";
import { useState } from "react";

const NavBar = () => {

  const [unlocked, setunLocked] = useState<boolean>(false);

  const options = [
    {label: "test", value:"value"},
    {label: "test2", value:"valuevalue"}
  ];

    return (
      <div className="w-full">
        <div className="flex justify-between">
            <h1 className="text-green-400">
            NewTab++
            </h1>
            <div className="flex items-center ">
              <Switch 
                size="lg"
                className="px-8"
                classNames={{ track: "bg-gray-600", thumb: `flex items-center justify-center transition-colors duration-300 ${unlocked ? "bg-green-400" : "bg-gray-400"}` }} 
                checked={unlocked} 
                onChange={(event) => setunLocked(event.currentTarget.checked)}
                thumbIcon={
                  unlocked ? 
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M240-160h480v-400H240zm240-120q33 0 56.5-23.5T560-360t-23.5-56.5T480-440t-56.5 23.5T400-360t23.5 56.5T480-280M240-160v-400zm0 80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h280v-80q0-83 58.5-141.5T720-920t141.5 58.5T920-720h-80q0-50-35-85t-85-35-85 35-35 85v80h120q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80z"/></svg>
                    : 
                   <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920t141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80zm0-80h480v-400H240zm240-120q33 0 56.5-23.5T560-360t-23.5-56.5T480-440t-56.5 23.5T400-360t23.5 56.5T480-280M360-640h240v-80q0-50-35-85t-85-35-85 35-35 85zM240-160v-400z"/></svg> }
                >
              </Switch>
              <Dropdown optionsCollection={options}></Dropdown>
            </div>
        </div>
        <div className="w-[98%] mx-auto h-0.5 bg-gray-600 mt-4"></div>
      </div>
    )
  }
  
  export default NavBar