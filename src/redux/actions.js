import axios from 'axios'
export const GET_TASKS = "GET_TASKS"
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"

export const GET_EMPLOYEES = "GET_EMPLOYEES"

export const getTasks = () => {
    return (dispatch) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}/tasks/`)
          .then((res) => {
            //const array = res.data.slice(0, num);
            dispatch({ type: GET_TASKS, payload: res.data });
          })
          .catch((err) => console.log(err));
      };
}

export const getEmployees = () => {
    return (dispatch) => {
        return fetch(`${process.env.API_URL}/employees`)
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_EMPLOYEES, payload: data}),
            (error) => console.log("getEmployees", error)
        )
    }
}

export const addTask = (data) => {
    return async (dispatch) => {
        const res = await axios
            .post(`${process.env.REACT_APP_API_URL}/tasks/`, data)
        return console.log(res.data)
    }
}

export const deleteTask = (id) => {
    return async(dispatch) => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}/task/${id}`,
        }).then((res) => {
            dispatch({type: DELETE_TASK, payload: id})
            console.log("deletetask : ", res.data);
        })
        .catch((error) => console.log(error))
    }
}