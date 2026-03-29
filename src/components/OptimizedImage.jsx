/**
 * PREVIEW: Robust image wrapper component providing built-in loading spinners, error fallback mechanisms, and lazy loading strategies.
 */

import { useState } from "react";

/**
 * Safely renders images by handling network delays and broken source links gracefully. 
 * Shows a loading spinner while the image downloads and swaps to a fallback image if rendering fails.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.src - The primary image source URL/path.
 * @param {string} props.alt - Accessibility description.
 * @param {string} [props.fallbackSrc=null] - Optional fallback image if the primary fails.
 * @param {string} [props.className=""] - Custom CSS classes.
 * @param {string|number} [props.width="100%"] - Rendered image width.
 * @param {string|number} [props.height="auto"] - Rendered image height.
 * @param {boolean} [props.isGif=false] - If true, changes the decoding strategy to support animations better.
 * @param {string} [props.loading="lazy"] - Determines native browser loading behavior.
 * @param {Object} [props.style={}] - Inline CSS styles.
 * @returns {JSX.Element} The rendered image container with loading and error boundaries.
 */
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

    /**
     * Resolves loading state once the native img element successfully parses the source byte stream.
     */
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    /**
     * Catches network fetch errors or 404s, falling back to an alternate image source if provided.
     */
    const handleImageError = () => {
        setImageError(true);
        setIsLoading(false);
    };

    // Determine the final source URL based on current component state
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
            
            {/* Overlay loading spinner while original media is in transit */}
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
