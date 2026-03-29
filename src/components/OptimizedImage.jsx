/**
 * Preview: Advanced imagery loader featuring loading states, resilient error fallbacks, and async decoding configurations.
 */

import { useState } from "react";

/**
 * Safely renders imagery over sluggish network connections or absent files by implementing a loading layer and automated fallback mechanisms.
 * @param {Object} props - Valid configuration properties.
 * @param {string} props.src - Attempted target image path.
 * @param {string} props.alt - Accessibility label.
 * @param {string} [props.fallbackSrc=null] - Desired substitution image path if target loading fails.
 * @param {string} [props.className=""] - Spaced styling class definitions.
 * @param {string|number} [props.width="100%"] - CSS mapped width.
 * @param {string|number} [props.height="auto"] - CSS mapped height dimension.
 * @param {boolean} [props.isGif=false] - Triggers alternate decode timing to favor moving images.
 * @param {string} [props.loading="lazy"] - E-commerce optimization mechanism flag.
 * @param {Object} [props.style={}] - Raw JS styling to affix into HTML rendering.
 * @returns {JSX.Element} Interactively loading image framework.
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
