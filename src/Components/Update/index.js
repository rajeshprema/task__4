
import axios from "axios";
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { API_URL } from "../EnPoint/url";
const Update = () => {

    const [firstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [id, setId] = useState('');
     const [Checked, setChecked] = useState(false);
    const Navigate = useNavigate();
    
    const updateUser = async () => {
      await axios.put(API_URL + id, {
        firstName,
        LastName,
        Checked,                  // Navigate,
      });
    }
    
  useNavigate('/read');
    
    
    useEffect(() => {
        setId(localStorage.getItem('id'))
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('LastName'))
        setChecked(localStorage.getItem('Checked'))
     },[])
        
        



    return (
      <Form>
        <div>
          <label>FirstName </label>
          <input
            type="text"
            name="name "
            placeholder="First name "
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Last Name </label>
          <input
            type="text"
            name="name "
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <Checkbox
            Checked={Checked}
            onChange={() => setChecked(!Checked)}
            label="Agree the Terms & conditions"
          />
          <br />
        </div>
        <div className="button">
          <Button onClick={updateUser}>
            update
          </Button>
        </div>
      </Form> 
    );
}
export default Update;