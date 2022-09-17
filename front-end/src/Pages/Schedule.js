import Table from 'react-bootstrap/Table';

export default function Schedule() {
  return (
    <Table striped bordered hover variant='dark' className='tableStyle'>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Date</th>
          <th>Starting Time</th>
          <th>End Time</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>League Day 1</td>
          <td>10/29/2022</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}