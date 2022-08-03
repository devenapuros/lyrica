import React from "react";
import { SongsGrid, TopContainer } from "../styles/topSongsStyle";
import Song from "./Song";
import Songs from "../topSongs.json";

export default function TopSongs() {
    return (
        <TopContainer>
            <h2>Most wanted songs</h2>
            <SongsGrid>
                {Songs.map((song) => (
                    <Song
                        key={song.number}
                        songTitle={song.title}
                        artist={song.artist}
                        artistThumb={song.artistThumb}
                        number={song.number}
                        imgSize="3.5rem"
                    />
                ))}
            </SongsGrid>
        </TopContainer>
    );
}
