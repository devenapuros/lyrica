import React from "react";
import { LogoContainer, LogoText } from "../styles/logoStyle";
import { Icon } from "../styles/iconStyle";
import { GlobalStyle } from "../styles/globalStyle";

export default function Logo({ color, iconSize, fontSize, marginLeft }) {
    return (
        <LogoContainer marginLeft={marginLeft} color={color}>
            <GlobalStyle />
            <Icon
                className="bx bx-equalizer"
                iconSize={iconSize}
                fontWeight="bold"
                margin="0 0.5rem 0 0"
            ></Icon>
            <LogoText fontSize={fontSize}>Lyrica</LogoText>
        </LogoContainer>
    );
}
