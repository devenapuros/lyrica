import React from "react";
import {
    PictureContainer,
    Picture,
    Number,
} from "../styles/artistPictureStyle";
import { GlobalStyle } from "../styles/globalStyle";

export default function ArtistPciture({ size, imgURL, number }) {
    return (
        <PictureContainer size={size}>
            <GlobalStyle />
            <Picture
                src={imgURL ? imgURL : "img/artists/user.png"}
                alt="Lyrica"
            />
            {number && <Number>{number}</Number>}
        </PictureContainer>
    );
}
