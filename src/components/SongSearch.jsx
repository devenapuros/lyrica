import React, { useState } from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Footer from "./Footer";
import { helpHttp } from "../helpers/helpHTTP";
import TopSongs from "./TopSongs";

export default function SongSearch() {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);

    const api = helpHttp();

    const getData = async (search) => {
        let artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search.artist}`;
        let songURL = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}`;
        const [artistRes, songRes] = await Promise.all([
            api.get(artistURL),
            api.get(songURL),
        ]);
        if (songRes.error) {
            throw songRes;
        } else {
            return { artistRes, songRes };
        }
    };

    return (
        <React.Fragment>
            <SongForm
                setSearch={setSearch}
                getData={getData}
                setBio={setBio}
                setLyric={setLyric}
                search={search}
            />
            <TopSongs />
            <Footer />
            {lyric && (
                <SongDetails
                    lyric={lyric}
                    setLyric={setLyric}
                    bio={bio}
                    setBio={setBio}
                    search={search}
                    setSearch={setSearch}
                />
            )}
        </React.Fragment>
    );
}
