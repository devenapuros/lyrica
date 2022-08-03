import React from "react";
import { Icon } from "../styles/iconStyle";
import { SocialAnchor } from "../styles/social.style";

export default function SocialItem({ href, icon }) {
    return (
        <SocialAnchor href={href}>
            <Icon className={icon} />
        </SocialAnchor>
    );
}
