import React from 'react';
import Person from './Person';
import './Cohort.css';

export default function Cohort({staff, students}) {
  return (
    <div>
      <h2>Turing Staff</h2>
      <section className="staff-section">
        {staff.map(member => <Person member={member} key={member.id}/>)}
      </section>
      <h2>Students</h2>
      <section className="staff-section">
        {students.map(member => <Person member={member} key={member.id}/>)}
      </section>
    </div>
  )
}

