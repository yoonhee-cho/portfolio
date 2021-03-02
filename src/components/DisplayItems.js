import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from './Card'
import { items } from './Items'

function DisplayItems(){
   
    const [filter, setFilter] = useState('all')
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(items);
      }, []);

    useEffect(() => {
        setProjects([]);
    
        setTimeout(() => {
            if(filter === 'all'){
                setProjects(items)
            }
            else{
                const filtered = items.filter(item => {return item.category.includes(filter)});
                setProjects(filtered);
            }
        }, 0);
      }, [filter]);


    return (
        <>
         <div className="filter-button-box">
            <button className="filter-button" type="submit" onClick={()=> setFilter('all')}>All</button>
            <button className="filter-button" type="submit" onClick={()=> setFilter('code')}>Code</button>
            <button className="filter-button" type="submit" onClick={()=> setFilter('design')}>Design</button>
         </div>
       

            <Container fluid={true}>
               
                <Row className="justify-content-md-center project-box">
                    {projects.map((project) => {
                        return (
                            <Col lg={6} sm={6}>
                                <Card
                                    key={project.id} 
                                    item={project}
                                /> 
                            </Col>
                        )
                    })                   
                    }
                </Row>

           </Container>
        </>
    )
    
}

export default DisplayItems