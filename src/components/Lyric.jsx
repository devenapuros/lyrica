import React from "react";
import "../styles/lyric.css";
import ArtistPicture from "./ArtistPicture";

export default function Lyric({ lyric, artist, search }) {
    return (
        <section className="lyric-container">
            <header>
                <ArtistPicture
                    size="4rem"
                    imgURL={artist ? artist.strArtistThumb : null}
                />
                <div className="song-data">
                    <h1>{search ? search.song : "-----"}</h1>
                    <small>
                        {artist
                            ? artist.strArtist
                            : search.artist
                            ? search.artist
                            : "------"}
                    </small>
                </div>
            </header>
            <main className="lyric">{lyric}</main>
        </section>
    );
}
