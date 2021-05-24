import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import{  makeStyles }from '@material-ui/core/styles';
import Button  from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles((theme) =>  ({
  root:{
    '& .MuiTextField-root':{
    background:'red',
    margin:theme.spacing(1),
  },
},
  button:{
    margin:theme.spacing(1),

  
}

}))

function App() {
  const classes= useStyles()
  const [inputFields,setInputFields]= useState([
      {firstName:'', lastName:''},
      {firstName:'', lastName:''},
      {firstName:'', lastName:''},
      
  ]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput  = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name]= event.target.value;
        setInputFields(values);

      }

      const handleAddFields =()=>{
        setInputFields([...inputFields,{firstName: '', lastName: ''}])
      }

      const handleRemoveFields = (index)=>{
        const values =[...inputFields];
        values.splice(index,1);
        setInputFields(values);
      }
  return (
    <Container>
        <h1>Add New Member</h1>
        <form className={classes.root} onSubmit = {handleSubmit}>

          {inputFields.map((inputField,index)=>(
            <div key={index}>
              <TextField
                name="firstname"
                label="first Name"
                variant="filled"
                vlue={inputField.firstName}
                onChange={event => handleChangeInput(index,event)}
              />
              <TextField
                name="lastname"
                label="last Name"
                variant="filled"
                vlue={inputField.lastName}
                onChange={event=>handleChangeInput(index,event)}

              />
              <IconButton onClick={()=>handleRemoveFields(index)}>
                <RemoveIcon/>
              </IconButton>

              <IconButton onClick={()=>handleAddFields()}>
                <AddIcon/>
              </IconButton> 

            </div>
          )) }
          <Button 
          className={classes.button}
          variant="contained" 
          color="primary"
          type="submit" 
          onClick={handleSubmit}
           >Submit
          
            </Button>
        </form>
    </Container>
  );
}

export default App;
