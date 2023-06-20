import React = require('react');
import Table from 'react-bootstrap/Table';

export default function LinesMen(props) {
  return (
    <Table striped bordered hover style={{ "textAlign": "center", "fontWeight": "bold" }}>
      <thead>
        <tr>
          <th>Court Color</th>
          <th>Court Number</th>
          <th>Linesmen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ "backgroundColor": `${props.firstCourtBackGroundColor}` }}></td>
          <td>{props.courtNumberOne}</td>
          <td>{props.firstCourtLinesMen}</td>
        </tr>
        <tr>
          <td style={{ "backgroundColor": `${props.secondCourtBackGroundColor}` }}></td>
          <td>{props.courtNumberTwo}</td>
          <td>{props.secondCourtLinesMen}</td>
        </tr>
        <tr>
          <td style={{ "backgroundColor": `${props.thirdCourtBackGroundColor}` }}></td>
          <td>{props.courtNumberThree}</td>
          <td>{props.thirdCourtLinesMen}</td>
        </tr>
        <tr>
          <td style={{ "backgroundColor": `${props.fourthCourtBackGroundColor}` }}></td>
          <td>{props.courtNumberFour}</td>
          <td>{props.fourthCourtLinesMen}</td>
        </tr>
      </tbody>
    </Table>
  );
}