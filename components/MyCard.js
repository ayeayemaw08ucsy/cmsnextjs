import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
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

}));

const MyCard = ({info,key}) => {
 
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  return (
    
    <Card className={classes.card} key={info._id}>
    <CardActionArea>
     {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
     <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
     <a>{info.title}</a>
      </Typography>
      <CardActions>
      <Link href="/detail/[_id]/[slug]" as={`/detail/${info._id}/${info.slug}`}>
          <a>Read More</a>
      </Link>
      <style jsx>{`
      a {
        text-decoration: none;
        color: #27add5;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
      </CardActions>
    </CardActionArea>
    </Card>
   
  )
}

// const Card = ({info,key}) => {
//     const classes = useStyles();  
//     const cardBGStyles = {
//         backgroundImage: `url(${info.heroImage})`,
//         background: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(${info.heroImage}) no-repeat`
//       };

//     return(
//      <div className="{classes.card}">
//       <div className="{classes.card__header}" style={cardBGStyles} />
//       <div className="{classes.card__body}">
//         <h2 className="{classes.card__title}">{info.title}</h2>
//         {/* <p className="{classes.card__text}">{info.description}</p> */}
//       </div>

//       <div className="{classes.card__footer}">
//         {/* <Link> */}
//           <a className="{classes.card__action}">Explore</a>
//         {/* </Link> */}
//       </div>
//     </div>
    
//     )
    

// }

export default MyCard;