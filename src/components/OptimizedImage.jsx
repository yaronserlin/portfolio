/**
 * OptimizedImage Component - Image Display with Lazy Loading and Fallback
 * 
 * An advanced image component that handles:
 * - Lazy loading for performance optimization
 * - Fallback images if primary fails to load
 * - Loading state with spinner
 * - Support for both static images and animated GIFs
 * - Error handling with fallback image
 * 
 * Features:
 * - Loading skeleton/spinner during image fetch
 * - Async decoding for GIFs to prevent jank
 * - Customizable styling via style prop
 * - Optional width and height with object-fit: cover
 * - Graceful fallback to alternate image on error
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.src - Primary image source URL
 * @param {string} props.alt - Alt text for accessibility (required)
 * @param {string} [props.fallbackSrc=null] - Fallback image URL if primary fails
 * @param {string} [props.className=""] - CSS classes for image element
 * @param {string|number} [props.width="100%"] - Image width
 * @param {string|number} [props.height="auto"] - Image height
 * @param {boolean} [props.isGif=false] - Whether image is a GIF (enables async decoding)
 * @param {string} [props.loading="lazy"] - Loading strategy (lazy, eager, auto)
 * @param {Object} [props.style={}] - Additional inline styles
 * @returns {React.ReactElement} Image container with loading state and fallback support
 */

import { useState } from "react";

const OptimizedImage = ({
    src,
    alt,
    fallbackSrc = null,
    className = "",
    width = "100%",
    height = "auto",
    isGif = false,
    loading = "lazy",
    style = {}
}) => {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setIsLoading(false);
    };

    const displaySrc = imageError && fallbackSrc ? fallbackSrc : src;

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.02)',
                minHeight: isLoading ? '200px' : 'auto',
                ...style
            }}
        >
            <img
                src={displaySrc}
                alt={alt}
                className={className}
                style={{
                    width,
                    height,
                    objectFit: "cover",
                    display: 'block',
                    transition: 'opacity 0.3s ease',
                    ...style
                }}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading={loading}
                decoding={isGif ? "async" : "auto"}
            />
            {isLoading && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '1'
                    }}
                >
                    <div
                        className="spinner-border spinner-border-sm text-primary"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
