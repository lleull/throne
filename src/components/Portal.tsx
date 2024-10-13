import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }: any) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // When component mounts, mark it as mounted (client-side only)
        setMounted(true);
        return () => setMounted(false); // Cleanup when unmounted
    }, []);

    // Render nothing on the server (SSR)
    if (!mounted) return null;

    // Render the children into the body (or any other DOM element)
    return ReactDOM.createPortal(children, document.body);
};

export default Portal;