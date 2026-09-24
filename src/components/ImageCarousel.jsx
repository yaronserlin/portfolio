/**
 * PREVIEW: Swipeable image carousel for project screenshots, with arrows, dots and an image counter.
 */

import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

/**
 * Shows a project's images one at a time. Arrows, dots and touch swipe move between them;
 * with a single image it renders just that image, with no controls.
 *
 * @param {Object} props - Component properties.
 * @param {Array<{src: string, alt?: string}>} props.images - Images to show, in order.
 * @param {string} props.title - Project title, used for alt text and the aria label.
 * @param {string|number} [props.height='100%'] - Height of each slide.
 * @param {Function} [props.onImageClick] - Called with the image index when an image is clicked.
 * @param {string} [props.className=''] - Extra classes for the carousel root.
 * @returns {JSX.Element|null} The carousel, or null when no image can be shown.
 */
const ImageCarousel = ({ images, title, height = '100%', onImageClick, className = '' }) => {
    const [index, setIndex] = useState(0);
    // Images that failed to load are dropped, so a broken link never shows as an empty slide.
    const [failed, setFailed] = useState(() => new Set());
    const visible = (images || []).filter(img => img?.src && !failed.has(img.src));
    if (visible.length === 0) return null;

    const handleError = (src) => {
        setFailed(prev => new Set(prev).add(src));
        setIndex(0);
    };

    const multiple = visible.length > 1;
    const safeIndex = index < visible.length ? index : 0;

    return (
        <div className={`image-carousel position-relative ${className}`} style={{ height }}>
            <Carousel
                activeIndex={safeIndex}
                onSelect={setIndex}
                interval={null}
                touch
                controls={multiple}
                indicators={multiple}
                aria-label={`${title} screenshots`}
                className="h-100"
            >
                {visible.map((img, i) => (
                    <Carousel.Item key={img.src} className="h-100">
                        <div
                            className="h-100 w-100"
                            role={onImageClick ? 'button' : undefined}
                            tabIndex={onImageClick ? -1 : undefined}
                            onClick={onImageClick ? () => onImageClick(i) : undefined}
                            style={{ cursor: onImageClick ? 'pointer' : 'default' }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt || `${title} screenshot ${i + 1}`}
                                className="carousel-image"
                                loading={i === 0 ? 'eager' : 'lazy'}
                                onError={() => handleError(img.src)}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            {multiple && (
                <span className="image-carousel-counter" aria-hidden="true">
                    {safeIndex + 1} / {visible.length}
                </span>
            )}
        </div>
    );
};

export default ImageCarousel;
