import axios from 'axios';

const endPoint = `https://sei-111-todo-backend.herokuapp.com/todos`;

// router.get('/', (req,res) => 

// * define a regular className
class TodoModel {
    //is define a method to get all todos
    static all = () => {
        let request = axios.get(endPoint);
        // this is going to take time, it is a promise
        return request
    }
    static create = (todo) => {
        //post request sending the todo object as the second argument
        let request = axios.post(endPoint, todo);
        return request
    }
    // methods to update delete etc.
}

export default TodoModel