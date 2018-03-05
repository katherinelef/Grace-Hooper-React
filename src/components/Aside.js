import React, { Component } from 'react';
import image from '../Grace-hooper.jpg';
import './main.css';

class Aside extends Component {
  render() {
    return (
      <aside className="summary">
      <table className="summary-table">
        <thead>
          <tr>
            <th colspan="2">Grace Murray Hopper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">
              <img src={image} alt="Grace hooper"/>
              <p>Rear Admiral Grace M. Hopper, 1984</p>
            </td>
          </tr>
          <tr>
            <th>Nickname(s)</th>
            <td>"Amazing Grace"</td>
          </tr>
          <tr>
            <th>Born</th>
            <td>December 9, 1906</td>
          </tr>
          <tr>
            <th>Died</th>
            <td>January 1, 1992 (aged 85)</td>
          </tr>
          <tr>
            <th>Allegiance</th>
            
          </tr>
        </tbody>
      </table>
    </aside>
    );
  }
}

export default Aside;
