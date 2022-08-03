import React from "react";
import { FooterSections, BrandText } from "../styles/footer.style";
import FooterItem from "./FooterItem";
import FooterSection from "./FooterSection";
import Logo from "./Logo";
import MadeBySection from "./MadeBySection";
import SocialSection from "./SocialSection";
import { FooterSec } from "../styles/footer.style";

export default function Footer() {
    return (
        <footer>
            <FooterSections>
                <FooterSec>
                    <Logo
                        color="#000"
                        marginLeft="0"
                        fontSize="1.4rem"
                        iconSize="2.2rem"
                    />
                    <BrandText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Consequatur, accusantium voluptatum! Illo eveniet,
                        laborum assumenda dolore hic eaque.
                    </BrandText>
                    <BrandText>Lyrica 2022. All rights reserved.</BrandText>
                </FooterSec>
                <FooterSection title="Songs">
                    <FooterItem href="/">Top songs</FooterItem>
                    <FooterItem href="/">New songs</FooterItem>
                    <FooterItem href="/">Send us your song</FooterItem>
                    <FooterItem href="/">Song requests</FooterItem>
                </FooterSection>

                <FooterSection title="Navigation">
                    <FooterItem href="/">Search songs</FooterItem>
                    <FooterItem href="/">Our blog</FooterItem>
                    <FooterItem href="/">Contact us</FooterItem>
                    <FooterItem href="/">About us</FooterItem>
                </FooterSection>
            </FooterSections>
            <SocialSection />
            <MadeBySection />
        </footer>
    );
}
