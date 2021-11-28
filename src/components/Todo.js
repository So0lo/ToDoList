import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';

export const Todo = () => {
    return (<>
        <Chip 
            clickable
            label='todo item'
            deleteIcon={<DeleteIcon/>}
            onClick={()=>{console.log(`click`)}}
            onDelete={()=>{console.log(`delete`)}}
            icon={<CheckCircleIcon/>}
            sx = {
                {fontSize: 16,
                padding:2.2}
            }
        />
    </>)
}