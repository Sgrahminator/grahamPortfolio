import ContactCard from '../components/ContactCard';

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <img src="/images/Headshot2.jpg" alt="Headshot 2" />
            <p>About Sarah Graham
            <br></br>
            A Journey from Customer Service to the Heart of Web Development
            <br></br>
            Hello and welcome to my story! I&apos;m Sarah Graham, a dedicated Web Developer with a 
            deep-rooted passion for both front and back-end coding. My professional journey is a rich 
            tapestry woven with 23+ years in sales and customer service, a hands-on experience in 
            creating and leading a Quality Assurance department, and a fulfilling tenure as a Massage 
            Therapist running my own practice. This eclectic blend of experiences has been instrumental 
            in shaping my approach to technology - one that is deeply rooted in understanding and 
            enhancing user experience.
            <br></br>
            My path to web development was paved with pivotal roles in system integrations and upgrades, 
            where I closely collaborated with IT departments, playing key roles in testing and 
            significantly boosting customer satisfaction ratings by 10-30%. These experiences, combined 
            with a persistent nudge from peers and an innate curiosity, led me to a life-changing 
            decision - enrolling in an 8-month, 3-stack coding bootcamp at Coding Dojo.
            <br></br>
            Here, I immersed myself in the world of HTML, CSS, MySQL, Java Spring, Flask, AJAX, Django, 
            SpringBoot, Java, Python, and JavaScript/MERN. This intensive learning phase was not just 
            about acquiring technical skills; it was a journey in problem-solving, embracing mistakes as 
            stepping stones to success, and a profound realization that making mistakes is, in fact, a 
            fast track to getting things right.
            <br></br>
            Currently, I am channeling my skills into developing a user-centric, safe travel website - a 
            platform for people to recommend places, events, or destinations. It&apos;s a project close to 
            my heart, reflecting my commitment to creating digital solutions that resonate with users 
            and enrich lives.
            <br></br>
            The bootcamp was as much a test of resilience as it was of intellect. For four of those 
            eight months, I battled shingles unknowingly, grappling with internal manifestations while 
            maintaining my focus on studies and work. This period was a testament to my perseverance 
            and ability to thrive under pressure.
            <br></br>
            My inspiration in technology comes from a deep-seated desire to find a career that ignites 
            passion. The constant learning, the challenge of problem-solving, and the joy of seeing a 
            project come to life from a mere concept - these aspects of web development fill me with an 
            exhilarating sense of purpose and belonging.
            <br></br>
            Born and raised in a small town in the South, I grew up learning the value of hard work, 
            teamwork, and taking pride in one&apos;s endeavors from my attorney father, who was also an 
            entrepreneur. His lessons extended beyond the legal books, imparting life skills through 
            weekend land-clearing projects. This upbringing has deeply influenced my work ethic and 
            values, driving me to put my heart and soul into everything I do.
            <br></br>
            When I’m not immersed in coding, you&apos;ll find me engaging with nature - whether it&apos;s 
            dispersed camping, exploring the ocean, fishing, or playing soccer. These hobbies are not 
            just pastimes; they are a reflection of my love for exploration and continuous learning.
            <br></br>
            Looking ahead, my future is an open book of possibilities. I envision myself in a role that 
            is as challenging as it is fulfilling - creating innovative code that makes a tangible 
            difference in people&apos;s lives, either in a backend, frontend, or full-stack capacity.
            <br></br>
            As I embark on this exciting phase of my career, I am eager to contribute, learn, and grow 
            in the dynamic world of web development. Thank you for joining me on this journey!</p>
            <a href="/pdfs/SARAH_GRAHAM.pdf" download>
                <button>Download Resume</button>
            </a>
            <ContactCard />
        </div>
    );
};

export default AboutPage;
