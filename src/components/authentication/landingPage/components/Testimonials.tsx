import React from 'react'
import testimonials from 'images/landing-section-6/map2.svg'
const data =[
    {
        id:1,
        image:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:" You interact very well with the listeners. We don't feel bored at all. We would love to attend more sessions like these in the future.",
        name:"Vibha Shanbhag",
        college:"BMSCE",
    },
    {
        id:2,
        image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:"You intereact well with the students",
        name:"Shreyas P",
        college:"DSCE",
    },
    {
        id:3,
        image:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:" Sir was very interactive and cleared all our doubts. So,there is no improvement that i can suggest for this session.",
        name:"Kishan S Murthy",
        college:"RVCE",
    },
    {
        id:4,
        image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:" The webinar was perfectly carried out by the instructor ,so i don't think any improvisations are required.",
        name:"Raksha A R",
        college:"NIE",
    },
    {
        id:5,
        image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:" Sir explained everything from scratch even we are not from ece or electronic branch we understand it and love it!",
        name:"Jay Yadav",
        college:"RNSIT",
    },
    {
        id:6,
        image:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:" No improvement needed!! The webinar was too good. Looking forward to many more such events!",
        name:"Shaik Fazuluddin",
        college:"BMSCE",
    },
    {    
        id:7,
        image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:" It was a very informative session, had a great experience!",
        name:"Sanjana Hoskote",
        college:"BMSCE",
    },
    {
        id:8,
        image:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:"I really loved the way it was explained.Very easy to understand! ",
        name:"Diya M Shubbaiah",
        college:"JSS STU",
    },
    {
        id:9,
        image:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:"You guys are doing great.Keep it up!! Looking forward to more such sessions!",
        name:"Afreen R Fathima",
        college:"RNSIT",
    },
    {
        id:10,
        image:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        comment:"No improvements.I wish we can have more and more informative sessions like this!",
        name:"Archana K",
        college:"PESU",
    }
]
function Testimonials() {
    return (
        <section id="testimonials" className="section-testimonials">
            <div className="section-testimonials__text">
                <h1 className="heading-primary">Testimonials</h1>
                <p className="paragraph-primary">
                    Take a look at what people have to say about Inovact Social
                    and Inovact Learning
                </p>
            </div>
            <div className="section-testimonials__map">
                <img src={testimonials} alt="" />
                <div className="section-testimonials__map__elements">
                {data.map((item,index)=>{
                    return(
                        <div className={`section-testimonials__map__testimonial section-testimonials__map__testimonial--${item.id}`}>
                        <img src={item.image} className="section-testimonials__map__elements__image"  alt=""/> 
                        <p className="section-testimonials__map__comment">{item.comment}</p>
                        <p className="section-testimonials__map__text">-{item.name},{item.college}</p>
                     </div>
                    )
                })}
               </div>
            </div>
        </section>
    )
}

export default Testimonials
