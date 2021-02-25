import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    backgroundColor: 'white',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: 'column-reverse'
    }
  }
}));