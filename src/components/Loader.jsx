import React from "react";
import { Spinner } from "../styles/spinner.style";

export default function Loader({ size, lineColor, trackColor }) {
    return (
        <Spinner size={size} lineColor={lineColor} trackColor={trackColor} />
    );
}
