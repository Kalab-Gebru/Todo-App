import React, { useContext, useEffect, useState } from "react";
import { FILTERS } from "../constants/constant101";
import TodoListItem from "../componets/TodoListItem";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { ThemeContext } from "../contexts/ThemeContext";
import bgDesktopDark from "../assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../assets/images/bg-desktop-light.jpg";
import bgMobileDark from "../assets/images/bg-mobile-dark.jpg";
import bgMobileLight from "../assets/images/bg-mobile-light.jpg";
import Inputfild from "../componets/Inputfild";
import { useTodo } from "../hooks/useContextData";
import { useNavigate } from "react-router-dom";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function HomePage() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);
  const { todoData, todoFun, setTodoData } = useTodo();

  const uid = auth.currentUser.uid;
  const navigate = useNavigate();

  useEffect(() => {
    todoFun?.init(uid);
  }, [todoFun]);

  function deleteAllCompletedTodos() {
    const completedTodos = todoData.filter((d) => d.completed === true);
    completedTodos.forEach((d) => {
      todoFun.deleteTodoFun(d.id, uid);
    });
  }

  async function LogOutFun() {
    try {
      await signOut(auth);
      setTodoData([]);
      navigate("/login");
    } catch (err) {
      alert(err);
    }
  }

  function handleOnDragEnd(event) {
    // Implement drag end functionality here
  }

  function filter(selectedFilter) {
    setActiveFilter(selectedFilter);
  }

  function filterActiveTodos() {
    return todoData?.filter((t) => t.completed === false);
  }

  function filterCompletedTodos() {
    return todoData?.filter((t) => t.completed === true);
  }

  function mapTodoItems(data) {
    return (
      <div key={data.id}>
        <TodoListItem data={data} uid={uid} />
      </div>
    );
  }

  function displayTodo() {
    if (activeFilter === FILTERS.ACTVE) {
      return filterActiveTodos()?.map(mapTodoItems);
    }
    if (activeFilter === FILTERS.COMPLETED) {
      return filterCompletedTodos()?.map(mapTodoItems);
    } else {
      return todoData?.map(mapTodoItems);
    }
  }

  return (
    <div className={`${isDarkMode ? "dark" : " "}`}>
      <div className="flex flex-col items-center w-full min-h-screen bg-Light-Very-Light-Grayish-Blue dark:bg-Dark-Very-Dark-Blue">
        <div className="absolute left-0 top-0 h-[25vh] md:h-[40vh] w-full z-0  ">
          <img
            className="block object-cover w-full h-full md:hidden"
            src={isDarkMode ? bgMobileDark : bgMobileLight}
            alt="bgdesktopdark"
          />
          <img
            className="hidden object-cover w-full h-full md:block"
            src={isDarkMode ? bgDesktopDark : bgDesktopLight}
            alt="bgdesktopdark"
          />
        </div>
        <div className="z-10 flex flex-col items-center w-full min-h-screen relatvie md:justify-center">
          <div className="z-30 flex items-center justify-end w-full pt-4 space-x-4 md:w-3/4 lg:w-5/12">
            <h2 className="font-bold text-white uppercase">
              {auth.currentUser.displayName || auth.currentUser.email}
            </h2>
            <div onClick={LogOutFun} className="relative group">
              <div className="flex-col items-center justify-center w-10 h-10 overflow-hidden rounded-full cursor-pointer lex ">
                {auth.currentUser.photoURL ? (
                  <img
                    className="w-full h-full"
                    src={auth.currentUser.photoURL}
                    alt="profile pic"
                  />
                ) : (
                  <img
                    className="w-full h-full"
                    src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
                    alt="profile pic"
                  />
                )}
              </div>
              <div className="absolute z-40 hidden py-1 text-center text-white bg-black rounded group-hover:inline-block w-28 top-12 -left-20">
                Sign out
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full md:w-3/4 lg:w-5/12 h-[85vh] m-8 text-white">
            <div className="">
              <div className="flex justify-between my-4 md:my-8">
                <div className="tracking-[1rem] uppercase font-bold text-4xl md:text-5xl">
                  TODO
                </div>
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
                <Inputfild uid={uid} />
                {!todoData && (
                  <div className="flex items-center justify-center w-full h-32">
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    ></div>
                  </div>
                )}
                <div className="w-full overflow-hidden divide-y rounded-lg divide-Light-Dark-Grayish-Blue dark:divide-Dark-Dark-Grayish-Blue">
                  <div
                    id="style-7"
                    className="overflow-y-scroll divide-y scrollbar max-h-100 divide-Light-Dark-Grayish-Blue dark:divide-Dark-Dark-Grayish-Blue"
                  >
                    {todoData && displayTodo()}
                  </div>
                  {todoData && todoData.length !== 0 && (
                    <div className="flex items-center justify-between w-full h-12 px-6 bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue">
                      <div className="">{todoData.length} items left</div>
                      <div className="hidden space-x-4 font-bold md:flex">
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
                          onClick={() => filter(FILTERS.COMPLETED)}
                          className={`${
                            activeFilter === FILTERS.COMPLETED
                              ? "text-Primary-Primary-regal-blue"
                              : ""
                          }  hover:text-Light-Very-Dark-Grayish-Blue dark:hover:text-Dark-Light-Grayish-Blue-h hover:cursor-pointer`}
                        >
                          Completed
                        </button>
                      </div>
                      <div
                        onClick={deleteAllCompletedTodos}
                        className="hover:text-Light-Very-Dark-Grayish-Blue dark:hover:text-Dark-Light-Grayish-Blue-h hover:cursor-pointer"
                      >
                        Clear Completed
                      </div>
                    </div>
                  )}
                </div>
                {todoData && todoData.length !== 0 && (
                  <div className="flex items-center justify-center h-12 mt-4 font-bold rounded-lg md:hidden bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue">
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
                      onClick={() => filter(FILTERS.COMPLETED)}
                      className={`${
                        activeFilter === FILTERS.COMPLETED
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

            <div className="flex items-center justify-center w-full h-12">
              <h3 className="text-center text-Light-Dark-Grayish-Blue dark:text-Dark-Dark-Grayish-Blue">
                {/* Drag and drop to reorder list */}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
