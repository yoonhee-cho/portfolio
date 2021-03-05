import React from 'react';
import Table from './Table';

const data = [
    {
      type: 'Mobile Application',
      role: `UI/UX wireframes, prototypes design, Implemented a news feed with animated buttons, a todo list with modals, toast notifications, an animated splash screen`,
      tech: 'React Native, Expo, Redux, Firebase Authentication, and Node.js Server deployed to Heroku, PostgreSQL, Sequelize ORM',
      team: 'Ashley Valenzuela, Valerie Ingmann, Alexandra Langton',
      timeline: '1 week, Oct 2020'
    },
  ];
  
const headers = [
    {
      label: 'Type',
      id: 'type'
    },
    {
      label: 'Role',
      id: 'role',
    },
    {
      label: 'Tech Stack',
      id: 'tech',
    },
    {
        label: 'Team Members',
        id: 'team',
      },
    {
      label: 'Timeline',
      id: 'timeline'
    }
    
];

function AccountaBeeInfo() {
    return (
      <div>
        <Table data={data} headers={headers} />
      </div>
    );
}
  
export default AccountaBeeInfo;