import React,{createRef} from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import {styleBody,styleTextField,styleTextArea}  from '../components/SharedStyles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Notifier from '../components/Notifier';
class EditArticle extends React.Component {
   
  static  propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    
};

static defaultProps = {
    title:'',
    slug:'',
    content:'',
    errTitleTxt:'',
    errSlugTxt:'',
    errContentTxt:''

}

constructor(props) {
    super(props);
    this.snackBarRef = createRef();
    this.state = {
        title: props.title || '',
        slug: props.slug || '' ,
        content: props.content || '',
        errTitleTxt: props.errTitleTxt || '',
        errSlugTxt: props.errTitleTxt || '',
        errContentTxt: props.errTitleTxt || ''
    }
}

onSubmit = (event) => {
    event.preventDefault();
    let {title , slug , content,errTitleTxt,errSlugTxt,errContentTxt} = this.state;
    // errContentTxt,errSlugTxt,errTitleTxt = '';
    if (!title) {
         this.snackbarRef.current.openSnackBar('Title is required');
         //this.setState({errTitleTxt: 'Title is required'});
         return;
      }
  
      if (!slug) {
        this.snackbarRef.current.openSnackBar('Slug is required');
        //this.setState({errSlugTxt: 'Slug is required'});
        return;
      }
  
      if (!content) {
        this.snackbarRef.current.openSnackBar('Content is required');
        //this.setState({errContentTxt: 'Content is required'});
        return;
      }
     
    this.props.onSave(this.state);
}

render() {
    return (
        
          <form onSubmit={this.onSubmit}>
          <TextField id="title" style={styleTextField}
               onChange={(event) => {
                   this.setState({title: event.target.value})
               }}
            value={this.state.title}
            type="text"
            label="Article's title"
            required
            inputProps={{ maxLength: 150 }}
            multiline={true}
            />
            <br/>
            <TextField id="slug" style={styleTextField}
               onChange={(event) => {
                   this.setState({slug: event.target.value})
               }}
            value={this.state.slug}
            type="text"
            label="Article's slug"
            required
            inputProps={{ maxLength: 30 }}
            
            />
            <br/>
            <br/>
            <TextareaAutosize
                style={styleTextArea}
                rowsMax={4}
                value={this.state.content}
                onChange={(event) => {
                    this.setState({content: event.target.value})
                }}
                placeholder="Article's content"
                required
            />  
            <br/>
            <Button variant="contained" type="submit" color="primary">
                Save
             </Button>
          </form>
      
    )
}
}

export default EditArticle;