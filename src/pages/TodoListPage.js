import Stack from '@mui/material/Stack';
import { TextField, Button, Todo} from '../components';

export const TodoLIstPage = () => {

    const handleChange = () => {
    }
    return (<>
        <h1>Todo List</h1>
        <Stack 
            spacing={10} 
            direction="row"
            justifyContent="center"
            alignItems="center">
            <TextField
                handleChange={handleChange}
                id="todo-text-input"
                hintText="what you are going to do?"
                fieldName="TODO"
                value="dgfa"
            />
            <Button type="add" text='add'/>
        </Stack>
        <Stack 
            spacing={5} 
            justifyContent="center"
            alignItems="center"
            marginTop={10}
        >
        <Todo/>
        </Stack>

    </>)
};