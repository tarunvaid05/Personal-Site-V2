import React from 'react';
import './About.css'; 
import taruneiffeltower from './taruneiffeltower.png';

function About() {
  return (
    <div className="flexcontainer">
      <div id="textbox">
        I’m currently a sophomore at Stonybrook University, majoring in Computer Science and Economics. As a kid, I was captivated by outer space and its vast mysteries and although my interest never became anything more than a passion, it did help me realize what truly interested me. Later finding the financial field, I was drawn by the endless possibilities of money and its management. I soon realized that traditional roles didn't captivate me, which brought me to Data Science. I've always been more intrigued by uncovering hidden patterns and finding unique details rather than mundane tasks like tracking the flow or optimizing utlization of money. This Curiosity led me to my first true career aspiration: Becoming a Data Scientist at a major Financial Institution. Now, I’m focused on building strong fundamentals in software development, deepening my understanding of the financial world, and working towards my goal of becoming a Data Scientist.
        Some of my current engagements include being the treasurer of the SBU Web Development club, Operations manager of the SBU Investment Club, along with my long-term position as Supervisor at the Selective Corporate Internship Program (SCIP). I've used these oppurtunities to meet with likeminded individuals and find a community which encourages growth. Outside of Programming and Investing I also enjoy working out, trying new food, and hanging out with my friends.
        Feel free to reach out to me via LinkedIn, Email, or by phone and check out my Resume!
        Email: tarunvaid05@gmail.com
        Phone Number: (718)-775-8176
        <br/><br/>
        <b>Feel free to reach out to me via LinkedIn, Email, or by phone and check out my Resume!</b>
        <br/>
        <i>Email:</i> tarunvaid05@gmail.com <br/>
        <i>Phone Number:</i> (718)-775-8176
      </div>
      <div id="aboutpic">
        <img src={taruneiffeltower} alt="Eiffel Tower" />
      </div>
    </div>
  );
}

export default About;
