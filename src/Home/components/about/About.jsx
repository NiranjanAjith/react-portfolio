import React from 'react';
import "./about.css";
import AboutImg from "../../assets/NIRANJAN.jpg";
import CV from "../../assets/Niranjan_Ajith_Kumar(MSc_CS_2025).pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <br/><span className="section__subtitle">Hey there! Welcome to my portfolio!
            <div className="about__body">
                <br/><p>I’m currently working on my MSc in Computer Science with a focus on AI at Cochin University of Science and Technology (CUSAT). I have a strong background in programming, especially with Python, C++, and Java. My studies have helped me build solid problem-solving skills and taught me the importance of teamwork, thanks to the many projects and hackathons I've been part of.</p>
                <br/><p>Before diving into computer science, I got my BSc in Physics from the University of Calicut. This gave me a solid foundation in math and analytical thinking. I also cracked the JAM exam by IITs for the MSc Physics program, which was a big milestone for me.</p>
                <br/><p>I'm really passionate about using AI and programming to create cool tech solutions. On the side, I'm also into sports like badminton, basketball, and taekwondo, which keeps me balanced and energized.</p>
                <br/><p>As I continue to learn and grow, I’m excited to connect with others who are into AI and tech. I’m always up for collaborating on projects, sharing ideas, or just chatting about the latest in technology.</p>
                <br/><p>Feel free to reach out if you want to connect or talk about anything tech-related!</p>
            </div>
        </span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="about" className="about__img" />
            <div className="about__data">
                <Info />
                <p className="about__description">
                    I create applications highlighting minimal design and friendly UI/UX interfaces.
                </p>
                <a href={CV} target='_blank' rel='noreferrer' className="button button--flex">
                    Download CV
                    <svg
                        class="button__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <path
                            d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                            fill="var(--container-color)"
                        ></path>
                        <path
                            d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                            fill="var(--container-color)"
                        ></path>
                        <path
                            d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                            fill="var(--container-color)"
                        ></path>
                        <path
                            d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                            fill="var(--container-color)"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>
  );
}

export default About;