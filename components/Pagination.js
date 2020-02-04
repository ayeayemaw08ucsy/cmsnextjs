import React ,{useState, useEffect,Fragment} from 'react';
import Button from '@material-ui/core/Button';
import {stylePaginatorPageNum,stylePaginatorPageNumSelected} from '../components/SharedStyles';
import { makeStyles } from '@material-ui/core/styles';

const stylePaginator = {
    margin: 20,
    padding: 20,
    padding: '10px 45px',
    align: 'center',
  }

  const useStyles = makeStyles(theme => ({

    PaginatorPageNumSelected :{
        border: '1px solid #00afda',
        background_color: 'yellow'
    },
    PaginatorPageNum :{
        padding: '0.5rem 1rem',
        margin: 'auto 0.5rem',
        border_radius: '2px',
        border: '1px solid transparent',
        color: '#16498a',
        cursor: 'pointer'
    },
  }));
  
const Paignator = ({skip, range, handlePaginationChange}) => {
   // console.log('Range !!!!!!!!!!',range);
    const classes = useStyles();  
    skip = !!skip? skip : 0;

    const [page, setPageNumber] = useState(1);

    useEffect(() => {
        return setPageNumber(skip);
    },
    [skip]);

    const moveToNextPage = () => {
        
        if(page > 1) {
            handlePaginationChange(page-1);
            return setPageNumber(page-1);
        }

        return null;
    }

    const moveToPreviousPage = () => {
        if(page < range[range.length-1]) {
            handlePaginationChange(page+1);
            return setPageNumber(page+1);
        }
        return null;
    }

   const  moveToPage = (pageNumber) => {
        handlePaginationChange(pageNumber);
        return setPageNumber(pageNumber);
    }

    const renderPageIndicators = (num, index) => {
        console.log('Num******',num,page);
        const styleBtn = num === page ? classes.PaginatorPageNumSelected : classes.PaginatorPageNum;
        return (
            <Button  className={styleBtn} onClick={() => moveToPage(num)} key={num}>
                {num}
            </Button>
        //     <Button
        //     className={`stylePaginatorPageNum ${
        //       num == page ? 'stylePaginatorPageNumSelected' : ''
        //     }`}
        //     key={index}
        //     onClick={() => moveToPage(num)}
        //   >
        //     {num}
        //   </Button>
        )
    }

    return (
            <Fragment>
            <div style={stylePaginator}>
                {range.length > 1 ?(
                <Button variant="contained" color="secondary" onClick={moveToNextPage}>
                    <span>{'<'}</span>{' '}
                    <span>Previous</span>
                </Button>):null}
             {range.map(renderPageIndicators)}

             {range.length > 1 ? (
                 <Button variant="contained" color="secondary" onClick={moveToPreviousPage}>
                     <span>Next</span>{' '}
                     <span>{'>'}</span>
                 </Button>
             ):null}
            </div>
            </Fragment>
        
    );
};

export default Paignator;