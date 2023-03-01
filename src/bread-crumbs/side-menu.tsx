import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import SocialComponent from "../social/social-component";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const SideMenu = () => {
    return (
        <div style={{position: "fixed", top: "60vh", left: "85vw", zIndex: "9999", gap: "5rem"}} className="flex-column">
            <div>
                <div className="flex-column" style={{textAlign: "right", marginRight: "5rem", gap: "0.4rem", color: "var(--highlight-violet) !important"}}>
                    <div>
                        <Link style={{color: "var(--text)"}}>
                            ❮<span style={{color: "var(--text-highlight)"}}>Home</span>/❯
                        </Link>
                    </div>
                    <div>
                        <Link style={{color: "var(--text)"}}>
                            ❮/<span style={{color: "var(--text-highlight)"}}>Steckbrief</span>❯

                        </Link>
                    </div>
                    <div>
                        <Link style={{color: "var(--text)"}}>
                            ❮/<span style={{color: "var(--text-highlight)"}}>ProjektErfahrung</span>❯

                        </Link>
                    </div>
                    <div>
                        <Link style={{color: "var(--text)"}}>
                            ❮/<span style={{color: "var(--text-highlight)"}}>Portfolio</span>❯

                        </Link>
                    </div>
                    <div>
                        <Link style={{color: "var(--text)"}}>
                            ❮/<span style={{color: "var(--text-highlight)"}}>Zertifikate</span>❯

                        </Link>
                    </div>

                </div>
            </div>
            <SocialComponent></SocialComponent>
        </div>
    );
}
export default SideMenu;