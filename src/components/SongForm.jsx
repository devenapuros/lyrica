import React, { useState } from "react";
import Loader from "./Loader";
import {
    Hero,
    Main,
    Form,
    FormTitle,
    FormGroup,
    FormInput,
    FormDivider,
    Actions,
    ErrorContainer,
    Error,
} from "../styles/songFormStyle";
import { Icon } from "../styles/iconStyle";
import Topbar from "./Topbar";

const initialFrom = {
    artist: "",
    song: "",
};

export default function SongForm({
    setSearch,
    getData,
    setBio,
    setLyric,
    search,
}) {
    const [form, setForm] = useState(initialFrom);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        if (form.artist || form.song) {
            setError(null);
        }
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (form.artist && form.song) {
            setError(null);
            setLoading(true);
            try {
                let { artistRes, songRes } = await getData(form);
                setLoading(false);
                setSearch(form);
                setForm(initialFrom);
                setBio(artistRes.artists ? artistRes.artists[0] : null);
                setLyric(songRes.lyrics || null);
            } catch (err) {
                console.log(err);
                setError(err);
                setLoading(false);
            }
        } else {
            setSearch(null);
            setError({
                error: true,
                status: 400,
                statusText: "Completa los datos",
            });
        }
    };

    return (
        <Hero>
            <Topbar />
            <Main>
                <Form onSubmit={handleSubmit}>
                    <FormTitle>
                        Search the lyric of any song of any artist
                    </FormTitle>
                    <FormGroup>
                        <FormInput
                            type="text"
                            placeholder="Write a artist here"
                            name="artist"
                            value={form.artist}
                            onChange={handleChange}
                        />
                        <FormDivider />
                        <FormInput
                            type="text"
                            placeholder="Write a song here"
                            name="song"
                            value={form.song}
                            onChange={handleChange}
                        />
                        <Actions>
                            {loading ? (
                                <Loader
                                    size="25px"
                                    lineColor="#f39c12"
                                    trackColor="#0000001a"
                                />
                            ) : (
                                <Icon
                                    className="bx bx-search icon"
                                    iconSize="1.4rem"
                                />
                            )}
                        </Actions>
                    </FormGroup>
                    <ErrorContainer>
                        {error && (
                            <Error>
                                <Icon
                                    className="bx bx-error-circle"
                                    iconSize="1.3rem"
                                    color="#e74c3c"
                                />
                                {error.statusText}
                            </Error>
                        )}
                    </ErrorContainer>
                </Form>
            </Main>
        </Hero>
    );
}
