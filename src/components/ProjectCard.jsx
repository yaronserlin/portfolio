/**
 * Preview: A detailed grid item rendering an individual portfolio entry with rich media support and layered interactive tags.
 */

import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';
import GifViewer from './GifViewer';
import LanguageBadge from './LanguageBadge';

/**
 * Returns a styled layout block aggregating nested child data into an actionable summary including links and hover overlays.
 * @param {Object} props - Accepted component configurations.
 * @param {Object} props.project - Associated structured Github application meta properties.
 * @returns {JSX.Element} Interactive HTML block detailing the project.
 */
const ProjectCard = ({ project }) => {
  const [showGifModal, setShowGifModal] = useState(false);
  const mediaSource = project.video || project.gif;
  const hasMedia = mediaSource && mediaSource.trim() !== '';

  /**
   * Forces state execution triggering the underlying media modal dialog.
   * @param {React.MouseEvent} e - Mouse click event intercept.
   */
  const handlePlayClick = (e) => {
    e.preventDefault();
    setShowGifModal(true);
  };

  return (
    <>
      <Card
        className="h-100 border-0 shadow-sm"
        style={{
          borderRadius: '12px',
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
          e.currentTarget.querySelector('.project-image').style.transform = 'scale(1.05)';
          const overlay = e.currentTarget.querySelector('.play-overlay');
          if (overlay) overlay.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
          e.currentTarget.querySelector('.project-image').style.transform = 'scale(1)';
          const overlay = e.currentTarget.querySelector('.play-overlay');
          if (overlay) overlay.style.opacity = '0';
        }}
      >
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: '200px'
          }}
        >
          <OptimizedImage
            src={project.image}
            alt={project.title}
            fallbackSrc="src/assets/profile.png"
            className="project-image"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.1) 0%, rgba(0, 180, 216, 0.1) 100%)'
            }}
          />

          {/* Play Icon Overlay */}
          {hasMedia && (
            <button
              className="play-overlay"
              onClick={handlePlayClick}
              title={project.video ? "View Demo" : "View GIF"}
              aria-label={project.video ? "View Demo" : "View GIF"}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: 'rgba(0, 180, 216, 0.9)',
                border: '2px solid white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                opacity: '0',
                zIndex: '10',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                padding: '0',
                color: 'white',
                fontSize: '1.1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(2, 62, 138, 0.95)';
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.15)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 180, 216, 0.9)';
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
              }}
            >
              <FaPlay style={{ marginLeft: '0.15rem' }} />
            </button>
          )}
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            {project.title}
          </Card.Title>

          <Card.Text className="flex-grow-1 mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            {project.description}
          </Card.Text>

          {/* Languages with Icons */}
          {project.languages && project.languages.length > 0 && (
            <div className="mb-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {project.languages.map((lang, index) => (
                <LanguageBadge key={index} language={lang} />
              ))}
            </div>
          )}
          {/* 
          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div> */}

          <div className="d-flex flex-column gap-2">
            <Button
              variant="primary"
              size="sm"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-100"
            >
              View Project
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

      {/* Media Viewer Modal (Video or GIF) */}
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