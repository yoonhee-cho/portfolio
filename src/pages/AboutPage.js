import React from 'react';
// import Content from '../components/Content'

import profile from '../assets/images/profile.JPG'

function AboutPage(props){
    return(
        <div className="about-content-box">
                <img 
                    className="about-image" 
                    src={profile} 
                    alt={profile} />
            {/* <Content> */}
                {/* <div className="about-content-box"> */}
                

                    <p className="about-text">
                    Hello! I'm Yoon, a full stack software engineer with a passion for
                    crafting web applications with clean code and UX that create practical solutions.
                    I love the achievement of learning and am excited to pursue a lifelong journey
                    of knowledge and problem-solving! 
                    When I used to work as a handbag designer after getting my BFA in Accessories 
                    Design from Fashion Institute of Technology, browsing innovative and fascinating
                    websites was just a hobby of mine. A hobby quickly turned into a passion and 
                    motivated me to enrolled at Parsons Schools of Design in Design and Technology.
                    After receiving my MFA degree, I attended The Grace Hopper Program at Fullstack 
                    Academy to hone my programming skills. 
                    
                    When I am not coding, I am usually playing tennis, doing yoga, go camping and hiking,
                    cooking and watching documentaries about eco-friendly houses. 
                    </p>
                
                {/* </div> */}
               
            {/* </Content> */}
    </div>
    )
}

export default AboutPage