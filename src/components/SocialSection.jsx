import React from "react";
import { SocialContainer } from "../styles/social.style";
import SocialItem from "./SocialItem";
export default function SocialSection() {
    return (
        <SocialContainer>
            <SocialItem icon="bx bxl-facebook" />
            <SocialItem icon="bx bxl-instagram" />
            <SocialItem icon="bx bxl-twitter" />
            <SocialItem icon="bx bxl-youtube" />
            <SocialItem icon="bx bxl-tiktok" />
        </SocialContainer>
    );
}
