import NavLink from './NavLink';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { projectData } from '../data/projectData';

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

interface NavbarProps {
  setFocusProjectId: React.Dispatch<React.SetStateAction<string>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ setFocusProjectId, setSelectedProject }) => {
  const navigate = useNavigate();

  // **************** THIS NEEDS LOOKING AT ****************
  const handleMyProjectsClick = () => {
    setSelectedProject({
      id: '100',
      name: '',
      navName: '',
      panelName: '',
      img: '',
      url: '',
      apiWakeUpUrl: null,
      repo: '',
      summary: '',
      note: '',
      heading: '',
      subheading: '',
      descriptionText: (<></>),
      technologiesText: (<></>),
      techBadges: (<></>),
    });
    navigate(`/`);
  };

  return (
    <nav id='navbar'>
      <div className='nav-container'>
        <div className='nav-left'>
          <img
            className='logo-image'
            src='images/pablo-wobbly-circle-avatar.png'
            alt='icon'
          />
          <h1 onClick={handleMyProjectsClick}>My Projects</h1>
        </div>
        <div className='navlist'>
          {projectData.map((project) => (
            <NavLink
              key={project.id}
              project={project}
              setFocusProjectId={setFocusProjectId}
              setSelectedProject={setSelectedProject}
            >
              {project.navName || project.name}
            </NavLink>
          ))}
          <a
            href='https://pablisch.github.io/cv-about-links/'
            className='nav-btn external-nav-link'>
            More About Me
          </a>
          <a
            href='https://github.com/pablisch'
            className='nav-btn github-link-btn'
            target='_blank'
            rel='noreferrer'>
            <img
              className='github-logo'
              src='images/github-logo.png'
              alt='Button Image'
            />
          </a>
        </div>

        <div className='hamburger'>
          <span className='burgerBar'></span>
          <span className='burgerBar'></span>
          <span className='burgerBar'></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
