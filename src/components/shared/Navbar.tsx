import { Masthead, MastheadToggle, Button, MastheadMain, MastheadBrand, MastheadContent, Split, SplitItem } from '@patternfly/react-core'
import React from 'react'
import vert_logo from '../../images/logos/datahub_mark_color-blkbg.png'
import { Link } from 'gatsby'
import './Navbar.css'

export const Navbar = ({ }) => {
    const [isTransparent, setIsTransparent] = React.useState(true);
  
    React.useEffect(() => {
        function checkPosition() {
          setIsTransparent(window.scrollY === 0);
        }
    
        checkPosition();
        window.addEventListener('scroll', checkPosition);
    
        return () => {
          window.removeEventListener('scroll', checkPosition);
        };
      }, []);

    return (
        <Masthead  className={`navbar-root ${isTransparent ? 'transparent' : ''}`}>
            <MastheadMain>
                <Link to="/">
                    <img src={vert_logo} alt='Open Data Hub logo' style={{ overflow: "hidden", height: 45 }} />
                </Link>
            </MastheadMain>
            <MastheadContent>
                <Split hasGutter className='navbar-links'>
                    <SplitItem>
                        <Link to="/docs">DOCS</Link>
                    </SplitItem>
                    <SplitItem>
                        <Link to="/blog">BLOG</Link>
                    </SplitItem>
                    <SplitItem>
                        <Link to="/community">COMMUNITY</Link>
                    </SplitItem>
                    <SplitItem isFilled />
                    <SplitItem>
                        <Link to="https://github.com/opendatahub-io">GITHUB</Link>
                    </SplitItem>
                    <SplitItem>
                        {/* TODO find rss svg */}
                        <Link to="/rss.xml">RSS</Link>
                    </SplitItem>
                </Split>

            </MastheadContent>
        </Masthead >
    )
}