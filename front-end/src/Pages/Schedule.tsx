import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Schedule() {
  return (
    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
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
          <td>Draft</td>
          <td>09/24/2022</td>
          <td>9:00 am</td>
          <td>12:00 pm</td>
          <td>Cedar Park Recreation Center</td>
        </tr>
        <tr>
          <td>League Games Day 1 (Teams 1 to 8)</td>
          <td>10/29/2022</td>
          <td>8:30 am</td>
          <td>12 pm</td>
          <td>Austin Sports Center (ASC) Woodward St</td>
        </tr>
        <tr>
          <td>League Games Day 2 (Teams 9 to 16)</td>
          <td>10/30/2022</td>
          <td>8:30 am</td>
          <td>12 pm</td>
          <td>Round Rock Sports Center</td>
        </tr>
        <tr>
          <td>Quarter Finals</td>
          <td>11/05/2022</td>
          <td>3 pm</td>
          <td>6 pm</td>
          <td>Round Rock Sports Center</td>
        </tr>
        <tr>
          <td>Semi Finals</td>
          <td>11/06/2022</td>
          <td>8:30 am</td>
          <td>12 pm</td>
          <td>Round Rock Sports Center</td>
        </tr>
        <tr>
          <td>3rd and 4th place match</td>
          <td>11/13/2022</td>
          <td>2 pm</td>
          <td>3 pm</td>
          <td>Round Rock Sports Center</td>
        </tr>
        <tr>
          <td>Finals</td>
          <td>11/13/2022</td>
          <td>3 pm</td>
          <td>6 pm</td>
          <td>Round Rock Sports Center</td>
        </tr>
        <tr>
          <td>Prize Distribution and Dinner</td>
          <td>11/13/2022</td>
          <td>6:30 pm</td>
          <td>10 pm</td>
          <td>Round Rock Sports Center Pavillion</td>
        </tr>
      </tbody>
    </Table>
  );
}