import React,{Fragment} from 'react';

const Header = ({titulo}) => {
    return (
        <Fragment>
            <nav className="nav-wrapper  blue-grey darken-4">
                <a href="#!" className="brand-logo center">{titulo}</a>
            </nav>
        </Fragment>
        
     );
}
 
export default Header;