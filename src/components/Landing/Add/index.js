import React, {useState, useEffect} from 'react'
import {List} from "../List";
import {Completed} from "../Completed";

const Add = () => {
    const [taskList, setTaskList] = useState([])
    const [completedList, setCompletedList] = useState([])
    const [taskValue, setTaskValue] = useState("")

    const addTask = () => {
        if (taskValue === "") {
            return
        }
        let addInput = document.getElementById("addInput")
        let item = {text: taskValue}
        setTaskList([...taskList, item])
        setTaskValue("")
        addInput.focus();
    }

    const addOnEnter = (event) => {
        if (event.key === "Enter") {
            addTask()
        }
    }

    useEffect(() => {
        let localTasks = localStorage.getItem('todos')
        let completedTasks = localStorage.getItem('completed')
        if (localTasks !== null) {
            setTaskList(JSON.parse(localTasks))
            setCompletedList(JSON.parse(completedTasks))
        }
    }, [])

    useEffect(() => {
        let localTasks = localStorage.getItem('todos')
        if (localTasks !== null) {
            localStorage.setItem('todos', JSON.stringify(taskList))
            localStorage.setItem('completed', JSON.stringify(completedList))
        } else {
            localStorage.setItem('todos', JSON.stringify(taskList))
            localStorage.setItem('completed', JSON.stringify((completedList)))
        }
    }, [taskList, completedList])

    const completedHandler = (completedItem) => {
        let currentIdx = completedList.indexOf(completedItem)
        let unqArr = completedList.filter(function (elem, i) {
            return i !== currentIdx;
        })
        setCompletedList(unqArr)
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <input id="addInput" onKeyPress={(e) => addOnEnter(e)} className="form-control w-50"
                       placeholder="Write task here" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}
                       type="text"/>
                <button onClick={addTask} className="btn btn-outline-light ms-2">+</button>
            </div>
            <div className="row">
                {
                    taskList.length > 0 ? (<div>
                        <h2 className="mb-4 mt-5 text-white">My Tasks</h2>
                        {
                            taskList.map((task,taskIdx) => (
                                <div key={taskIdx} className="mb-3 col-12 col-md-12 col-lg-12 col-xl-12">
                                    <List completedList={completedList} taskList={taskList}
                                          setCompletedList={setCompletedList} setTaskList={setTaskList} task={task}/>
                                </div>
                            ))
                        }
                    </div>) : <h4 className="mb-5 mt-5 text-white text-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="70" height="65" fill="currentColor"
                            className="bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path
                                d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0
                            .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1
                            .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                        <br/>No tasks</h4>
                }
            </div>
            {
                completedList.length > 0 ? (
                    <div>
                        <div>
                            <h2 className="mt-3 text-white" style={{marginBottom: '26px'}}>Completed</h2>
                        </div>
                        {
                            completedList.map((completedTask, idx) => (
                                <div key={idx} className="mb-3 col-12 col-md-12 col-lg-12 col-xl-12">
                                    <Completed completedTask={completedTask} completedHandler={completedHandler}/>
                                </div>
                            ))
                        }
                    </div>
                ) : ''
            }
        </div>
    )
}

export default Add;