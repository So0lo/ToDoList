import {FilterButton} from './FilterButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import {FILTER_TYPE} from '../constants/filterConstants';
import {useSelector, useDispatch} from 'react-redux';
import {changeFilter} from '../redux/todo/todoActions';
import {getFilterType} from '../redux/todo/todoSelectors';

export const Filter = () => {
    const currentFilterType = useSelector(getFilterType);
    const dispatch = useDispatch();

    const changeFilterHandler = (filterType) => dispatch(changeFilter(filterType));

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            {
                Object.keys(FILTER_TYPE).map((filterType) => (
                    <FilterButton 
                        disabled={filterType === currentFilterType}
                        clickHandler={changeFilterHandler}
                        filterType={filterType}
                        key={filterType}/>      
                ))
            }
        </ButtonGroup>)
};
