import { memo } from 'react'; 
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';

export const Todo = memo(({done, text, handleClick, handleDelete, id}) => {
    return <Chip
        clickable
        label={text}
        deleteIcon={<DeleteIcon/>}
        sx={{fontSize: 16, padding: 2.2, width: 200}}
        icon={done ? <CheckCircleIcon/> : <CircleIcon/>}
        onClick={() => handleClick(id)}
        onDelete={() => handleDelete(id)}
    />
});