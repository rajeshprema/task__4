import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Checkbox } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import { API_URL } from "../EnPoint/url";


const Create = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [checked, setChecked] = useState('False');
  const Navigate = useNavigate();


  const postDate = async () => {
    console.log(API_URL);
    await axios.post(API_URL, {
      FirstName,
      LastName,
      checked

   })
    Navigate('/read')
}
return (
      <Form>
        <div>
          <label>FirstName </label>
          <input
            type="text"
            name="name"
            placeholder="First name"
            onChange={(e) =>setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Last Name </label>
          <input
            type="text"
            name="name"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          /> 
        </div>
        <br />
        <div>
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="Agree the Terms & conditions"
          />
          <br />
        </div>
        <div className="button">
          <Button onClick={postDate} type="test">submit</Button>
        </div>
      </Form>
    );
 }
  
export default Create;

 