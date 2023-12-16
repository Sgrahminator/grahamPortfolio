import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const HomePage = () => {
    const [projects, setProjects] = useState([]);

    // Fetch projects from your backend
    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <h3>&ldquo;Turning Code into Art: The Digital Canvas of Sarah Graham&rdquo;</h3>
            <p>
                Welcome to my world, where creativity meets functionality, and every line of code paints a 
                picture. I&apos;m Sarah Graham, a passionate coder and tech enthusiast who believes in the 
                transformative power of technology. My journey in the tech industry may have begun with a 
                simple &ldquo;Hello, World!&rdquo;, but it has since evolved into a full-fledged quest to 
                innovate, create, and inspire.
                <br></br>
                <br></br>
                As a recent graduate of an intensive 8-month coding bootcamp, I have armed myself with a 
                diverse arsenal of skills ranging from HTML and CSS to complex JavaScript frameworks and 
                Python-based web applications. My portfolio is a tapestry of projects that not only 
                demonstrate my technical abilities but also my commitment to continuous learning and 
                problem-solving.
                <br></br>
                <br></br>
                Here, you will discover a collection of my work that showcases my growth as a developer. 
                Each project is a story of challenges faced, lessons learned, and successes achieved. 
                Whether it’s a dynamic web application built with the MERN stack, an elegant website 
                designed with a keen eye for detail, or a complex backend system that powers seamless user 
                experiences, my portfolio is a testament to my journey in coding.
                <br></br>
                <br></br>
                So, take a moment to explore, and let&apos;s connect the dots between technology and 
                imagination. Welcome to my digital canvas — where code comes to life!
            </p>
            <div>
                <img src="/images/Headshot.jpg" alt="Headshot" className="img-size" />
            </div>
            <h3>Meet Sarah Graham, a Versatile Web Developer with a Passion for Impact</h3>
            <p>
                Hello! I&apos;m Sarah, a Web Developer with a zeal for both front and back-end coding. My 
                journey in tech was turbocharged by an intense 8-month, 3-stack coding bootcamp at Coding 
                Dojo, where I honed my skills in MERN Full Stack and Java. My aspiration? To create 
                meaningful projects that resonate with users and make a real difference.
                <br></br>
                <br></br>
                With over two decades of customer-facing experience, I bring a unique blend of technical 
                prowess and interpersonal skills to the tech table. My approach combines the intricacies of 
                code with the art of human connection, ensuring that the technology I develop is not just 
                functional, but also user-centric.
                <br></br>
                <br></br>
                As someone who lives by the mantra &ldquo;work smarter, not harder,&rdquo; I am constantly exploring ways to innovate and streamline processes. I am enthusiastic about every project I take on, always eager to learn more and push the boundaries of what’s possible.
                <br></br>
                <br></br>
                Though I&apos;m still on the lookout for that first big accolade in the tech world, my drive 
                and dedication speak volumes. When I&apos;m not coding, you can find me applying the same 
                principle of working smarter in everyday life, always searching for the perfect balance 
                between efficiency and effectiveness.
                <br></br>
                <br></br>
                Join me on this exciting journey as I continue to grow, innovate, and contribute to the 
                ever-evolving world of web development!
            </p>
            <h2>My Projects</h2>
            <h4>Github <a href="https://github.com/Sgrahminator" target="_blank" rel="noopener noreferrer">Sarah Graham</a></h4>
            <div>
                {projects.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
