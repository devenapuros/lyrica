import React from "react";
import { MadeSection, MadeAnchor } from "../styles/madeby.style";

export default function MadeBySection() {
    return (
        <MadeSection className="copyright-brand">
            Designed by &nbsp;
            <MadeAnchor href="https://twitter.com/misterrobotow">
                @misterrobotow
            </MadeAnchor>
        </MadeSection>
    );
}
