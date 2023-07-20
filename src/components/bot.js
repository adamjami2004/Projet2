import React from 'react';
import ChatBot from 'react-simple-chatbot'
import {Segment} from 'semantic-ui-react'
import './botstyle.css'
import Footer from './footer';


function Bot(){
    const steps=[
        {
            id:'Greet',
            message:'Hello, my name is Cristiano, I will help you today. Thanks for reaching out',
            trigger:'Ask Name'

        },
        {
            id:'Ask Name',
            message:'How should I call you?',
            trigger:'Waiting1'
        },
        {
            id:'Waiting1',
            user:true,
            trigger:'Name'
        },
        {
            id:'Name',
            message:'Hi {previousValue}, is your issue related to :',
            trigger:'issues'
        },
        {
            id:'issues',
            options:[{value:"Previous trip", label:"Previous trip", trigger:"Previous trip"}, {value:"Upcoming trip", label:"Upcoming trip", trigger:"Upcoming trip"}],
        },
        {
            id:'Previous trip',
            message:'Thanks for telling your previous issue, can you tell us more?',
            trigger:'reason'
            
        },
        {
            id:'Upcoming trip',
            message:"Thanks for telling your issue, can you tell us more?",
            trigger:'reason'
            
        },
        {
            id:'reason',
            user:true,
            trigger:'cr7'
        },
        {
            id:'cr7',
            message:'Thanks for letting us know. You will be contacted shortly by one of our agents. ',
            trigger:'help'
        },
        {
            id:'help',
            message:'Was this conversation useful?',
            trigger:'choix'
            
        },
        {
            id: 'choix',
            options: [
              { value: 'No', label: 'No', trigger: 'No' },
              { value: 'Yes', label: 'Yes', trigger: 'Yes' }
            ]
          },
          {
            id: 'No',
            message: 'Sorry to hear that. Your feedback is important and we will do our best to make your next experience better',
            trigger: 'end'
          },
          {
            id: 'Yes',
            message: 'Thanks for your feedback! Hope to see you again',
            trigger: 'end'
          },
          {
            id: 'end',
            message: 'Chatbot session has ended. GoodBye',
            end: true
          }
        

    ]





    return(
    <>   
        
        <Segment floated="right" id="botp">
            <h1 id="su">Our virtual Assistant is here to help!</h1>
            <ChatBot steps={steps}></ChatBot>
        </Segment>
        <Footer/>
    </>
    );
}


export default Bot;
