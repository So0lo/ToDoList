import {useState, useCallback, useEffect} from 'react';
import Stack from '@mui/material/Stack';
import {TextField, Button, Todo} from '../components';
import {useSelector, useDispatch} from 'react-redux';
// import {getFilteredTodos} from '../redux/todo/todoSelectors';
import {addTodo, deleteTodo, switchTodoState} from '../redux/todo/todoActions';
import {Filter} from '../components/Filter';
import {ButtonAppBar} from '../components/ButtonAppBar';
import {getFilteredTodos} from '../redux/todo/todoSelectors';
import { getUserId } from '../redux/user/userSelectors';
import { initUser } from '../redux/user/userActions';


export const TodoListPage = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(getFilteredTodos);
    const userId = useSelector(getUserId);

    useEffect(() => {
        if (userId) {
            dispatch(initUser(userId));
        }
    }, [userId])

    const handleChange = ({target: {value}}) => {
        setTodoText(value);
    };

    const addTodoHandler = () => {
        dispatch(addTodo(todoText));
        setTodoText('');
    };

    const onTodoClick = useCallback((id) => {
        dispatch(switchTodoState(id));
    },[dispatch, switchTodoState]);

    const onTodoDelete = useCallback((id) => {
        dispatch(deleteTodo(id));
    }, [dispatch, deleteTodo]);

    return (<>
        <ButtonAppBar/>
        <h1>Todo list</h1>
        <Stack
            justifyContent="center"
            alignItems="center"
            marginBottom={5}>
            <Filter/>
        </Stack>
        <Stack
            spacing={10}
            direction="row"
            justifyContent="center"
            alignItems="center">
                <TextField
                    handleChange={handleChange}
                    id='todo-text-input'
                    hintText='What you are going to do?'
                    fieldName='TODO'
                    value={todoText}
                />
                <Button type='add' text='add' handleClick={addTodoHandler}/>
        </Stack>
        <Stack
            marginTop={10}
            spacing={5}
            justifyContent="center"
            alignItems="center" >
            {todos.map((todoData) => 
                <Todo 
                    {...todoData} 
                    handleClick={onTodoClick}
                    handleDelete={onTodoDelete}                   
                    key={todoData.id} />)}
        </Stack>
    </>)
};