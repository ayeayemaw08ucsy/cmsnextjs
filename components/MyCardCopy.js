import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      border: '1px solid #e5e5e5'
    },
    media: {
      height: 140,
    },
    card__header:{
  
    },
    card_body:{
  
    },
    card_title:{
  
    },
    card_text:{
  
    },
    card_footer:{
  
    },
    card_action:{
  
    }
  
  });

const MyCard = ({info,key}) => {
    const classes = useStyles(); 

    return(
        <div>
          <Card>{info.title}</Card>
          </div>
    )
}


export default MyCard;