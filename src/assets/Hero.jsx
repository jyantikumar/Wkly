import WklyLogo from '../assets/FXCoc4JWIAA4YGd.png';
import React, { useState, useEffect } from 'react';

function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const baseTransitionClasses = 
        "transition-all duration-1000 ease-out transform";

    const logoClasses = `${baseTransitionClasses} max-w-xl w-3/4 h-auto ${
        isLoaded 
        ? 'opacity-100 translate-y-0 blur-0'   
        : 'opacity-0 translate-y-16 blur-lg' 
    }`;

    const textClasses = `text-2xl font-bold mb-4 text-center text-white z-20 
        ${baseTransitionClasses} duration-500 delay-500 ${ 
        isLoaded 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-4'
    }`;
    
    return (
        <div className="absolute top-0 left-0 w-full h-screen z-20 flex justify-center items-center pointer-events-none">
            <div className="flex flex-col items-center">
                <img 
                    src={WklyLogo} 
                    alt="Weeekly Logo" 
                    className={logoClasses}
                />
                <h4 className={textClasses}> 
                    Everyday Weeekly Day!
                </h4>
            </div>
        </div>
    );
}
   
export default Hero;