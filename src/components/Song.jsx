import React from "react";
import ArtistPicture from "./ArtistPicture";
import { SongContainer, SongTitle, ArtistName } from "../styles/SongStyle";

export default function Song({
    songTitle,
    artist,
    artistThumb,
    number,
    imgSize,
}) {
    return (
        <SongContainer>
            <ArtistPicture
                size={imgSize}
                imgURL={artistThumb}
                number={number}
            />
            <div>
                <SongTitle>{songTitle}</SongTitle>
                <ArtistName>{artist}</ArtistName>
            </div>
        </SongContainer>
    );
}
