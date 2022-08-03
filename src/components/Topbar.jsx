import React from "react";
import Logo from "./Logo";
import { Navbar, Right, RightElement } from "../styles/songFormStyle";
export default function Topbar() {
    return (
        <Navbar>
            <Logo
                color="#fff"
                marginLeft="2rem"
                fontSize="1.4rem"
                iconSize="2.2rem"
            />
            <Right>
                <li>
                    <RightElement href="/">Blog</RightElement>
                </li>
                <li>
                    <RightElement href="/">About</RightElement>
                </li>
                <li>
                    <RightElement href="/">Contact</RightElement>
                </li>
            </Right>
        </Navbar>
    );
}
