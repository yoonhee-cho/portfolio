import React from 'react';

const Table = (props) => {
  const { data, headers } = props;
  return (
    <div class="table-responsive-xs">
        <table className="table mt-4 mb-5">
        <thead>
            <tr>
            {
                headers.map((h) => {
                // h is {label: 'Name', id: 'name'}
                return (
                <th scope="row" key={h.label} className="justify-content-end">
                    <b>{h.label}</b>
                </th>);
                })
            }
            </tr>
        </thead>
        <tbody>
            {
            data.map(((d, i) => { 
                // d = { name: 'Allen', age: 35 }
                return <tr key={`row-${i}`}>
                {
                    headers.map((h, j) => {
                    // h is {label: 'Name', id: 'name', component*: Checkbox}
                    const label = d[h.id];
                    const key = `cell-${i}-${j}`;
                
                    return (
                        
                    <td key={key}>{label}</td>
                    
                    );
                    })
                }
                </tr>;
            }))
            }
        </tbody>
        </table>
    </div>
    );
};

export default Table;