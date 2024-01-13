import { createContext } from "react";

const AppContext= createContext(); 

const AppProvider=({children})=>{
const userData={
name:"i am Data of Super Child dont pass it to child or parent",
childData:"I am Data of Child"
};

return <AppContext.Provider value={userData}>{children}</AppContext.Provider>


};

export {AppContext, AppProvider};