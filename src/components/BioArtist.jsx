import React from "react";
import "../styles/bio-artist.css";

export default function BioArtist({ artist }) {
    return (
        <section className="artist-info-container">
            {artist ? (
                <React.Fragment>
                    <h3>{artist.strArtist}</h3>
                    <div className="artist-image">
                        <img
                            src={artist.strArtistThumb}
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="artist-bio">
                        <h5>Biography</h5>
                        {artist.strBiographyEN}
                    </div>
                </React.Fragment>
            ) : (
                <div className="bio-not-found">
                    <i className="bx bx-ghost not-found-icon"></i>
                    <h3 className="not-found-text">
                        We can't found info about this artist
                    </h3>
                </div>
            )}
        </section>
    );
}
