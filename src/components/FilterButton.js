import Button from '@mui/material/Button';

export const FilterButton = ({filterType, clickHandler, disabled}) => {
    return (<Button onClick={() => clickHandler(filterType)} disabled={disabled}>
                {filterType}
            </Button>)
};