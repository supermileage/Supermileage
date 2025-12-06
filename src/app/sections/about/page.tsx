import React from 'react'
import Footer from 'components/Footer';
import Timeline from 'app/sections/about/Timeline';
import Title from 'components/Title';

const About = () => {
  return (
    <div>
      <Title imageSrcPath="/media/images/default.jpg" name="ABOUT"/>
      <Timeline/>
      <Footer/>
    </div>
  )
}

export default About;