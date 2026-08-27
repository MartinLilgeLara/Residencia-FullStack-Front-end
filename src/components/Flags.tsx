interface FlagProps {
    className?: string;
}

export function FlagBR({ className = "w-4 h-4" }: FlagProps) {
    return (
        <svg className={`${className} rounded-full inline-block shrink-0`} viewBox="0 0 512 512">
            <circle cx="256" cy="256" r="256" fill="#009c3b" />
            <polygon points="256,70 472,256 256,442 40,256" fill="#ffdf00" />
            <circle cx="256" cy="256" r="110" fill="#002776" />
        </svg>
    );
}

export function FlagUS({ className = "w-4 h-4" }: FlagProps) {
    return (
        <svg className={`${className} rounded-full inline-block shrink-0`} viewBox="0 0 512 512">
            <defs>
                <clipPath id="circleClip">
                    <circle cx="256" cy="256" r="256" />
                </clipPath>
            </defs>
            <g clipPath="url(#circleClip)">
                <rect width="512" height="512" fill="#b22234" />
                <path
                    d="M0,39.4h512M0,118.2h512M0,196.9h512M0,275.7h512M0,354.5h512M0,433.2h512"
                    stroke="#fff"
                    strokeWidth="39.4"
                />
                <rect width="205" height="197" fill="#3c3b6e" />
            </g>
        </svg>
    );
}