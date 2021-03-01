import React from 'react'
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
import {FooterContainer,SocialIcon, SocialMedia, SocialMediaWrap, SocialLogo,WebsiteRights,SocialIcons, SocialIconLink} from './FooterElements'
const Footer = () => {
    return(
        <FooterContainer>
            <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo>
                    <SocialIcon />
                    Travelling Sudania
                </SocialLogo>
                <WebsiteRights>Travelling Sudania © {new Date().getFullYear()}
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>   
            </SocialMedia>
        </FooterContainer>
    )

}

export default Footer