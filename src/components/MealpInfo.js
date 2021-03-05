import React from 'react';
import Table from './Table';

const data = [
    {
      type: 'Web Application',
      role: `Solo Project`,
      tech: 'React, Redux, Recipe API, Material UI, Node.js, Express, Sequelize ORM, PostgreSQL',
      timeline: '1.5 weeks, Feb 2021'
    },
  ];
  
const headers = [
    {
      label: 'Type',
      id: 'type'
    },
    {
      label: 'Team Members',
      id: 'role',
    },
    {
      label: 'Tech Stack',
      id: 'tech',
    },
    {
      label: 'Timeline',
      id: 'timeline'
    }
    
];

function MealpInfo() {
    return (
      <div>
        <Table data={data} headers={headers} />
      </div>
    );
}
  
export default MealpInfo;