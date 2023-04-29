import React, { useContext, useEffect, useState } from "react";
import { ACTIONS, FILTERS } from "./constants/constant101";
import TodoListItem from "./componets/TodoListItem";
import { ThemeContext } from "./contexts/ThemeContext";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgMobileDark from "./assets/images/bg-mobile-dark.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import Inputfild from "./componets/Inputfild";
import { useTodo } from "./hooks/useContextData";

function App() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { todoData, dispatch } = useTodo();
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);

  function displayTodo() {
    if (activeFilter === FILTERS.ACTVE) {
      return todoData
        .filter((t) => {
          return t.Complited === false;
        })
        .map((data, i) => {
          return (
            <div key={i}>
              <TodoListItem data={data} dispatch={dispatch} />
            </div>
          );
        });
    }
    if (activeFilter === FILTERS.COMPLITED) {
      return todoData
        .filter((t) => {
          return t.Complited === true;
        })
        .map((data, i) => {
          return (
            <div key={i}>
              <TodoListItem data={data} dispatch={dispatch} />
            </div>
          );
        });
    } else {
      return todoData.map((data, i) => {
        return (
          <div key={i}>
            <TodoListItem data={data} dispatch={dispatch} />
          </div>
        );
      });
    }
  }

  function filter(selectedFilter) {
    setActiveFilter(selectedFilter);
  }

  function deleteAllComplitedTodos() {
    dispatch({ type: ACTIONS.CLEAR_COMPLETE, payload: "" });
  }

  return (
    <div className={`${isDarkMode ? "dark" : " "}`}>
      <div className="flex flex-col items-center min-h-screen w-full bg-Light-Very-Light-Grayish-Blue dark:bg-Dark-Very-Dark-Blue">
        <div className="absolute left-0 top-0 h-[25vh] md:h-[40vh] w-full z-0  ">
          <img
            className="block md:hidden object-cover w-full h-full"
            src={isDarkMode ? bgMobileDark : bgMobileLight}
            alt="bgdesktopdark"
          />
          <img
            className="hidden md:block object-cover w-full h-full"
            src={isDarkMode ? bgDesktopDark : bgDesktopLight}
            alt="bgdesktopdark"
          />
        </div>
        <div className="flex md:items-center justify-center min-h-screen w-full  z-10">
          <div className="flex flex-col justify-between w-full md:w-3/4 lg:w-5/12 h-[85vh] m-8 text-white">
            <div className="">
              <div className="flex justify-between my-4 md:my-8">
                <div className="tracking-[1rem] uppercase font-bold text-4xl md:text-5xl">
                  TODO
                </div>
                {/* <button onClick={}>add to local storage</button> */}
                <button className="" onClick={toggleTheme}>
                  {isDarkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                    >
                      <path
                        fill="#FFF"
                        fillRule="evenodd"
                        d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                    >
                      <path
                        fill="#FFF"
                        fillRule="evenodd"
                        d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="text-Light-Dark-Grayish-Blue dark:text-Dark-Dark-Grayish-Blue font-[JosefinSans-regular]">
                <Inputfild />
                <div className="w-full rounded-lg overflow-hidden divide-y divide-Light-Dark-Grayish-Blue dark:divide-Dark-Dark-Grayish-Blue">
                  <div
                    id="style-7"
                    className="overflow-y-scroll scrollbar max-h-100 divide-y divide-Light-Dark-Grayish-Blue dark:divide-Dark-Dark-Grayish-Blue"
                  >
                    {displayTodo()}
                  </div>
                  {todoData.length !== 0 && (
                    <div className="flex justify-between items-center w-full h-12 bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue  px-6">
                      <div className="">{todoData.length} items left</div>
                      <div className="hidden md:flex space-x-4 font-bold">
                        <button
                          onClick={() => filter(FILTERS.ALL)}
                          className={`${
                            activeFilter === FILTERS.ALL
                              ? "text-Primary-Primary-regal-blue"
                              : ""
                          } hover:text-Light-Very-Dark-Grayish-Blue dark:hover:text-Dark-Light-Grayish-Blue-h hover:cursor-pointer`}
                        >
                          All
                        </button>
                        <button
                          onClick={() => filter(FILTERS.ACTVE)}
                          className={`${
                            activeFilter === FILTERS.ACTVE
                              ? "text-Primary-Primary-regal-blue"
                              : ""
                          } hover:text-Light-Very-Dark-Grayish-Blue dark:hover:text-Dark-Light-Grayish-Blue-h hover:cursor-pointer`}
                        >
                          Active{" "}
                        </button>
                        <button
                          onClick={() => filter(FILTERS.COMPLITED)}
                          className={`${
                            activeFilter === FILTERS.COMPLITED
                              ? "text-Primary-Primary-regal-blue"
                              : ""
                          }  hover:text-Light-Very-Dark-Grayish-Blue dark:hover:text-Dark-Light-Grayish-Blue-h hover:cursor-pointer`}
                        >
                          Completed
                        </button>
                      </div>
                      <div
                        onClick={deleteAllComplitedTodos}
                        className="hover:text-Light-Very-Dark-Grayish-Blue dark:hover:text-Dark-Light-Grayish-Blue-h hover:cursor-pointer"
                      >
                        Clear Completed
                      </div>
                    </div>
                  )}
                </div>
                {todoData.length !== 0 && (
                  <div className="flex items-center justify-center md:hidden bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue  rounded-lg h-12 mt-4 font-bold">
                    <button
                      onClick={() => filter(FILTERS.ALL)}
                      className={`${
                        activeFilter === FILTERS.ALL
                          ? "text-Primary-Primary-regal-blue"
                          : ""
                      } mx-4 hover:text-Light-Very-Dark-Grayish-Blue dark:hover:text-Dark-Light-Grayish-Blue-h hover:cursor-pointer`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => filter(FILTERS.ACTVE)}
                      className={`${
                        activeFilter === FILTERS.ACTVE
                          ? "text-Primary-Primary-regal-blue"
                          : ""
                      } mx-4 hover:text-Light-Very-Dark-Grayish-Blue dark:hover:text-Dark-Light-Grayish-Blue-h hover:cursor-pointer`}
                    >
                      Active{" "}
                    </button>
                    <button
                      onClick={() => filter(FILTERS.COMPLITED)}
                      className={`${
                        activeFilter === FILTERS.COMPLITED
                          ? "text-Primary-Primary-regal-blue"
                          : ""
                      } mx-4 hover:text-Light-Very-Dark-Grayish-Blue dark:hover:text-Dark-Light-Grayish-Blue-h hover:cursor-pointer`}
                    >
                      Completed
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center items-center w-full h-12">
              <h3 className="text-center text-Light-Dark-Grayish-Blue dark:text-Dark-Dark-Grayish-Blue">
                Drag and drop to reorder list
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
