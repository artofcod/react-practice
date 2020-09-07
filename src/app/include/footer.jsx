import React from 'react';

export default 
class Footer extends React.Component{
    render(){
        return(
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                    &copy; Copyright <strong><span>Siimple</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        )
    }
}