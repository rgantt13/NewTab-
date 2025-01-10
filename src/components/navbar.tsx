import Dropdown from "./dropdown"

const NavBar = () => {

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
            <Dropdown optionsCollection={options}></Dropdown>
        </div>
        <div className="w-[98%] mx-auto h-0.5 bg-gray-600 mt-4"></div>
      </div>
    )
  }
  
  export default NavBar