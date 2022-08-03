import React from "react";
import { FooterUl, FooterSec } from "../styles/footer.style";

export default function FooterSection({ title, children }) {
    return (
        <FooterSec>
            <h4>{title}</h4>
            <FooterUl>{children}</FooterUl>
        </FooterSec>
    );
}
