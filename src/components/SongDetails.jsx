import React from "react";
import "../styles/song-details.css";
import CloseButton from "./CloseButton";
import BioArtist from "./BioArtist";
import Lyric from "./Lyric";
import Logo from "./Logo";

export default function SongDetails({
    setForm,
    initialFrom,
    lyric,
    bio,
    setLyric,
    setBio,
    search,
    setSearch,
}) {
    return (
        <div className="container">
            <div className="card">
                <nav>
                    <div className="left">
                        <Logo
                            color="#111"
                            marginLeft="2rem"
                            fontSize="1.3rem"
                            iconSize="2rem"
                        />
                    </div>
                    <div className="right">
                        <CloseButton
                            setLyric={setLyric}
                            setBio={setBio}
                            setSearch={setSearch}
                            setForm={setForm}
                            initialFrom={initialFrom}
                        />
                    </div>
                </nav>
                <main className="main">
                    <Lyric
                        lyric={lyric || null}
                        artist={bio ? bio : null}
                        search={search}
                    />
                    <BioArtist artist={bio ? bio : null} />
                </main>
            </div>
        </div>
    );
}
