import { useNavigate } from 'react-router-dom';
import './projects.css';

interface ProjectType {
  id: string;
  name: string;
  navName?: string;
  panelName?: string;
  img: string;
  url: string;
  apiWakeUpUrl: string | null;
  repo: string;
  summary: string;
  note: string;
  heading: string;
  subheading: string;
  descriptionText: JSX.Element;
  technologiesText: JSX.Element;
  techBadges: JSX.Element;
}

interface ProjectProps {
  project: ProjectType;
  setFocusProjectId: React.Dispatch<React.SetStateAction<string>>;
  focusProjectId: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const Project: React.FunctionComponent<ProjectProps> = ({
  project,
  setFocusProjectId,
  focusProjectId,
  setSelectedProject,
}) => {
  const navigate = useNavigate();

  const handleHoverStart = (id: string) => {
    setFocusProjectId(id);
  };

  const handleHoverEnd = () => {
    setFocusProjectId('');
  };

  const handleClick = (project: ProjectType) => {
    setSelectedProject(project);
    // console.log('project clicked', project);
    navigate(`/${project.id}`);
  };

  return (
    <li
      className='project-panel'
      onMouseOver={() => handleHoverStart(project.id)}
      onMouseLeave={handleHoverEnd}
      onClick={() => handleClick(project)}>
      <img
        src={`images/${project.img}`}
        alt={project.name}
        className='project-image'
      />
      <div className='project-label'>{project.panelName || project.name}</div>
      <div
        onClick={() => handleClick(project)}
        className={`overlay ${focusProjectId === project.id && 'hover-focus'}`}>
        {project.summary}
      </div>
    </li>
  );
}

export default Project;
