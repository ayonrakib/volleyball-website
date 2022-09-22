import Table from 'react-bootstrap/Table';

function ResponsiveExample() {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;