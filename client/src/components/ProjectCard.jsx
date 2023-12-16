import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        githubLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;

