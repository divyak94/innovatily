import React from 'react'
import * as style from './contact.module.css'
import { Button, Checkbox, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

function Contact() {
  return (
    <div className={style.mainContainer}>
        <div className={style.mainSubContainer}>
            <div className={style.mainSubLeftContainer}>
                <div><p className={style.leftp}>Want to talk about your project ?</p></div>

            </div>
            <div className={style.mainSubRightContainer}>
            <Form className={style.Form} layout="vertical">
                <div className={style.contactForm1}>
                <Form.Item
                    label="Your Name"
                   
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter your name!',
                    },
                    ]}
                >
                    <Input  placeholder='Type your name'/>
                </Form.Item>

                <Form.Item
                    label="Company Name"
                    name="company"
                    
                >
                    <Input  placeholder='Type your company name'/>
                </Form.Item>   
                </div>

                <div className={style.contactForm2}>
                 <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter your email!',
                    },
                    {
                        type: 'email',
                      },
                    ]}
                  
                >
                    <Input  placeholder='Type your email'/>
                </Form.Item>    
                <Form.Item
                    label="Phone"
                    name="phone"
                  
                >
                    <Input  placeholder='Type your number'/>
                </Form.Item>    
                </div>
              
                <div className={style.contactForm3}>
                <Form.Item
                    label="How can we help you?*"
                    name="projectDetails"
                    placeholder="Give us some details about your project"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter your name!',
                    },
                    ]}
                >
                    <TextArea rows={6} cols={19}  placeholder='Give us some details about your project' />
                </Form.Item>
               
                

                </div>
                <div className={style.btn2Cls}>
                <Button className={style.btn2}>Send</Button>
                </div>
               
                </Form>
                

            </div>
            

        </div>
    </div>
  )
}

export default Contact