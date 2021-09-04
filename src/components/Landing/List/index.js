import React from "react";

export const List = ({task, completedList, setTaskList, taskList}) => {
    const myTaskHandler = (task) => {
        let currentIdx = taskList.indexOf(task)
        completedList.push(taskList[currentIdx]);
        let uniqueArray = taskList.filter(function (elem, i) {
            return i !== currentIdx;
        })
        setTaskList(uniqueArray)
    }

    const onChangeHandler = (event, task) => {
        let currentIdx = taskList.indexOf(task)
        taskList[currentIdx].text = event.target.value
        setTaskList([...taskList])
    }

    const taskHandlerDelete = (task) => {
        let currentIdx = taskList.indexOf(task)
        let uniqueArray = taskList.filter(function (elem, i) {
            return i !== currentIdx;
        })
        setTaskList(uniqueArray)
    }

    const onBlurHandler = () => {
        let currentIdx = taskList.indexOf(task)
        if (taskList[currentIdx].text === "") {
            taskList[currentIdx].text = "Empty :("
            setTaskList([...taskList])
        }
    }

    return (
        <div className="d-flex p-3 justify-contents-space-between"
             style={{width: '100%', border: '2px solid white', borderRadius: '16px'}}>
            <input onBlur={() => onBlurHandler()} style={{
                alignSelf: 'center',
                width: '100%',
                backgroundColor: '#04151f',
                border: 'none',
                color: 'white',
                outline: 'none'
            }} onChange={(event) => onChangeHandler(event, task)} value={task.text}/>
            <div style={{color: 'white', cursor: 'pointer'}} onClick={() => myTaskHandler(task)}
                 className="my-auto ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-check2-all" viewBox="0 0 16 16">
                    <path
                        d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                </svg>
            </div>
            <div style={{color: 'white', cursor: 'pointer'}} onClick={() => taskHandlerDelete(task)}
                 className="my-auto ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-archive" viewBox="0 0 16 16">
                    <path
                        d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5
                        0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5
                         0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
        </div>
    )
}