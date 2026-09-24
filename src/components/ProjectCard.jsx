/**
 * PREVIEW: Complex card component presenting an individual project's details, media gallery, and live links.
 */

import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';
import GifViewer from './GifViewer';
import LanguageBadge from './LanguageBadge';
import { Link } from 'react-router-dom';

/**
 * Renders an interactive card for a single project. The whole card opens the project's own page;
 * the Code / Live Demo buttons and the media play button keep working on their own.
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.project - The underlying data object defining the project schema.
 * @returns {JSX.Element} The rendered project card interface.
 */
const ProjectCard = ({ project }) => {
  const [showGifModal, setShowGifModal] = useState(false);
  const mediaSource = project.video || project.gif;
  const hasMedia = mediaSource && mediaSource.trim() !== '';

  /**
   * Opens the media viewer modal overlay.
   * 
   * @param {React.MouseEvent} e - The bound click event trigger.
   */
  const handlePlayClick = (e) => {
    e.preventDefault();
    setShowGifModal(true);
  };

  return (
    <>
      <Card
        className="h-100 border-0 shadow-sm project-card"
        style={{
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      >

        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: '200px',
            padding: '20px'
          }}
        >
          {project.image ? (
            <OptimizedImage
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-image"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transition: 'transform 0.3s ease',
                background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.1) 0%, rgba(0, 180, 216, 0.1) 100%)'
              }}
            />
          ) : (
            <div
              className="d-flex align-items-center justify-content-center h-100 w-100 fw-bold text-primary"
              style={{
                fontSize: '1.5rem',
                background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.1) 0%, rgba(0, 180, 216, 0.1) 100%)'
              }}
              aria-hidden="true"
            >
              {project.title}
            </div>
          )}

          {hasMedia && (
            <button
              className="play-overlay"
              style={{ zIndex: 2 }}
              onClick={handlePlayClick}
              title={project.video ? "View Demo" : "View GIF"}
              aria-label={project.video ? "View Demo" : "View GIF"}
            >
              <FaPlay style={{ marginLeft: '0.15rem' }} />
            </button>
          )}
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            <Link to={`/projects/${project.repoName}`} className="stretched-link text-reset text-decoration-none">
              {project.title}
            </Link>
          </Card.Title>

          <Card.Text className="flex-grow-1 mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            {project.description}
          </Card.Text>

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-3 justify-content-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {project.technologies.slice(0, 6).map((tech) => (
                <LanguageBadge key={tech} language={tech} />
              ))}
            </div>
          )}

          <div className="d-flex flex-column gap-2 position-relative" style={{ zIndex: 2 }}>
            <Button
              as={Link}
              to={`/projects/${project.repoName}`}
              variant="primary"
              size="sm"
              className="w-100"
            >
              View Details
            </Button>
            <Button
              variant="outline-primary"
              size="sm"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-100"
            >
              Code on GitHub
            </Button>
            {project.liveUrl && (
              <Button
                variant="outline-secondary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-100"
              >
                Live Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {showGifModal && mediaSource && (
        <GifViewer
          gifSrc={mediaSource}
          title={project.title}
          onClose={() => setShowGifModal(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
