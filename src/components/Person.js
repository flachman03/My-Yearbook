import React from 'react';
import './Person.css';

export default function Person({member}) {
  return (
    <article id={member.id}  className="staff-card">
      <img src={member.photo}/>
      <h4>{member.name}</h4>
      <p>{member.quote}</p>
      <p>{member.superlative}</p>
    </article>
  )
}

