import { useNavigate } from 'react-router-dom';

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

interface NavLinkProps {
  children: React.ReactNode;
  project: ProjectType;
  setFocusProjectId: React.Dispatch<React.SetStateAction<string>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({ children, project, setFocusProjectId, setSelectedProject }) => {
  const navigate = useNavigate();

  const handleHoverStart = () => {
    setFocusProjectId(project.id);
  };

  const handleHoverEnd = () => {
    setFocusProjectId('');
  };

  const handleClick = (project: ProjectType) => {
    setSelectedProject(project);
    console.log('project clicked', project);
    navigate(`/${project.id}`);
  };

  return (
    <div
      className='nav-btn nav-link'
      onClick={() => handleClick(project)}
      onMouseOver={handleHoverStart}
      onMouseLeave={handleHoverEnd}>
      {children}
    </div>
  );
}

export default NavLink;
