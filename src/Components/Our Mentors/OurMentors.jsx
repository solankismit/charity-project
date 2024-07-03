import React from 'react';
import Section from '../Common/Section';
import Card from '../Common/Card';

const OurMentors = () => {
    return (
        <Section title='Our Mentors' description='Currently have 102 project partners across in world that work on child issues.'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>

                <Card Image='/child-4.jpg'
                    Button={'Explore More'}
                    Title='John Doe'
                    Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget et, sit amet.' />
                <Card Image='/child-4.jpg'
                    Button={'Explore More'}
                    Title='John Doe'
                    Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget et, sit amet.' />
                <Card Image='/child-4.jpg'
                    Button={'Explore More'}
                    Title='John Doe'
                    Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget et, sit amet.' />
            </div>

        </Section>
    );
};

export default OurMentors;