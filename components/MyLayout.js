import Header from './Header'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  padding: '10px 45px'
}

export default function Layout(props) {
    return (
      <div style={layoutStyle}>
        <Header />
        {props.children}
      </div>
    )
}