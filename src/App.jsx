import { useState, createContext, useContext } from "react";

import Title from "./Title";
import Categories from "./Categories";
import Menu from "./Menu";

import { data } from "./data";

const AppContext = createContext();
// export custom Hook
export const useAppContext = () => useContext(AppContext);

const App = () => {
  // state
  const [menu, setMenu] = useState(data);
  const [type, setType] = useState("all");

  // event handling
  // parent component 才可以控制 all child components (所以事件處理要在這邊設定)
  const buttonHandler = (category) => {
    // console.log(category);
    setType(category);
  };

  return (
    <AppContext.Provider value={{ type }}>
      <main>
        <Title />
        <Categories menu={menu} buttonHandler={buttonHandler} />
        <Menu menu={menu} />
      </main>
    </AppContext.Provider>
  );
};
export default App;
