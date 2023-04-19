import { Masthead, MastheadMain, MastheadContent, Split, SplitItem, Button } from '@patternfly/react-core'
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
        <Masthead display={{default: "inline"}} className={`navbar-root ${isTransparent ? 'transparent' : ''}`}>
            <MastheadMain>
                <Button variant='link' isInline component={(props: any) => <Link {...props} to="/" />}>
                    <img src={vert_logo} alt='Open Data Hub logo' style={{ overflow: "hidden", height: 45 }} />
                </Button>
            </MastheadMain>
            <MastheadContent>
                <Split hasGutter className='navbar-links'>
                    <SplitItem>
                    <Button variant='link' isInline component={(props: any) => <Link {...props} to="/docs" />}>
                        DOCS
                    </Button>
                    </SplitItem>
                    <SplitItem>
                    <Button variant='link' isInline component={(props: any) => <Link {...props} to="/blog" />}>
                        BLOG
                    </Button>
                    </SplitItem>
                    <SplitItem>
                    <Button variant='link' isInline component={(props: any) => <Link {...props} to="/community" />}>
                        COMMUNITY
                    </Button>
                    </SplitItem>
                    <SplitItem isFilled />
                    <SplitItem>
                        <Button variant='link' component="a" href="https://github.com/opendatahub-io">GITHUB</Button>
                    </SplitItem>
                    <SplitItem>
                        {/* TODO find rss svg */}
                        <Button variant='link' isInline component={(props: any) => <Link {...props} to="/rss.xml" />}>
                        RSS
                    </Button>
                    </SplitItem>
                </Split>

            </MastheadContent>
        </Masthead >
    )
}