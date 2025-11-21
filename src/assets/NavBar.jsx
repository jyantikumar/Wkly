import logo from '../assets/FXCoc30WQAAay3P.png'

function NavBar({ setActiveView }) {
    
    const handleNavClick = (viewName) => (e) => {
        e.preventDefault(); 
        
        setActiveView(viewName);
    };

    return(
        <> 
        <div className="fixed w-full top-0 z-30 text-white">
       
            <nav className="flex justify-between w-full items-center p-2"> 
                
                <div className="h-full">
                    <img src={logo} alt="Weeekly Logo" className="h-10 ml-4"/>
                </div>
                
                <ul className="list-none flex space-x-6 mt-1     justify-end p-0">  
                    <li>
                        <a 
                            href="" 
                            className="hover:bg-gray-200 p-4 hover:rounded-full hover:mt-3 hover:p-3 hover:text-black"
                            onClick={handleNavClick('home')} 
                        >
                            Home
                        </a>
                    </li>
                
                    <li>
                        <a 
                            href="" 
                            className="hover:bg-gray-200 p-4 hover:rounded-full hover:p-4 hover:text-black"
                            onClick={handleNavClick('members')} 
                        >
                            Members
                        </a>
                    </li>

                    <li><a href="" className="hover:bg-gray-200 p-4 hover:rounded-full hover:p-4 hover:text-black">About</a></li> 
                    <li><a href="" className="hover:bg-gray-200 p-4 hover:rounded-full hover:p-4 hover:text-black">MV</a></li>
                    <li><a href="" className="hover:bg-gray-200 p-4 hover:rounded-full hover:p-4 hover:text-black">Discography</a></li>
                    <li><a href="" className="hover:bg-gray-200 p-4 hover:rounded-full hover:p-4 hover:text-black">Content</a></li>
                </ul>
            </nav>
        </div>
        </>
    );
}

export default NavBar;