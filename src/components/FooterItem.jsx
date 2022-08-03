import React from "react";
import { FooterSectionItem } from "../styles/footer.style";

export default function FooterItem({ children }) {
    return (
        <li>
            <FooterSectionItem href="/">{children}</FooterSectionItem>
        </li>
    );
}
