import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from '../EnPoint/url';
import { Table,Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Read = () => {

  const [APIData, setAPIData] = useState([]);
  const Navigate = useNavigate();
  
  const updateUser = ({
    firstName, lastName, Checked,id
  }) => {
    localStorage.setItem('id',id)
    localStorage.setItem('id',firstName);
    localStorage.setItem('id',lastName);
    localStorage.setItem('id',Checked);
    Navigate('/update')
  }
  
  const deleteUser = async (id) => {
    await axios.delete(API_URL + id)
    callGetAPI()
  }
  const callGetAPI = async () => {
  
    const resp = await axios.get(API_URL);
    console.log(resp);
    setAPIData(resp.data);

    
  }

  useEffect(() => {
    callGetAPI();
    
  }, []);
    
        



    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>checked</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            APIData.map((data) => (
            <Table.Row key = {data.id}>
              <Table.Cell>{data.firstName }</Table.Cell>
              <Table.Cell>{data.LastName }</Table.Cell>
             
              <Table.Cell>{data.checked ? 'checked' : 'Not checked'}</Table.Cell>
              <Table.Cell>
                <Button onClick={() =>
                  deleteUser(data.id)
                }>Delete</Button>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() =>
                  deleteUser(data.id)}>Delete</Button>
                </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
}
export default Read; 