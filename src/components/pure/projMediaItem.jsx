import React from "react";
import Caption from "./caption.jsx";
import { Spotify } from "react-spotify-embed";
import { MEDIA_TYPE } from "../../models/project.enum";




const ProjMediaItem = ({ item }) => {
  switch (item.type) {
    case MEDIA_TYPE.TEXT:
      return (
        <div className='container p-0 g-10'>
          <div className='proj-description-es mb-4'>
            {
              item.texts.filter(({ language }) => language === 'es')
                .map((text, index) => {
                  return (
                    <p key={index.toString()}>
                      {text.value}
                    </p>
                  )
                })
            }
          </div>
          <div className='proj-description-en text-secondary'>
            {
              item.texts.filter(({ language }) => language === 'en')
                .map((text, index) => {
                  return (
                    <p key={index.toString()}>
                      {text.value}
                    </p>
                  )
                })
            }
          </div>
        </div>
      );
    case MEDIA_TYPE.IMAGE:

      return (
        <div>
          <img
            className="proj-media-img w-10 img-fluid"
            src={item.src}
            alt={item.alt}
          />
          <Caption caption={item.caption} />
        </div>
      );

    case MEDIA_TYPE.YOUTUBE:
      return (
        <div>
          <iframe
            className="videoyt"
            id="ytplayer"
            type="text/html"
            title="hello"
            src={`https://www.youtube.com/embed/${item.src}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <Caption caption={item.caption} />
        </div>
        );
        



    case MEDIA_TYPE.VIMEO:
      return null;

    case MEDIA_TYPE.SOUNDCLOUD:
      return (
        <div>
        <iframe
          title="soundcloud"
          width="100%" height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={item.url}>.toString()
        </iframe>
        <Caption caption={item.caption} />
        </div>
      );


    case MEDIA_TYPE.BANDCAMP:
      return null;

    case MEDIA_TYPE.SPOTIFY:
      return (
        // Displaying an album.
        <Spotify link="https://open.spotify.com/album/4lFfj4We5ctZG9IzqRVxzA?si=O53NSiVYQYuVVsKHolnc2g" />
      );

    case MEDIA_TYPE.CODE:
      return (
        <div> 
        <code>
          {item.codeText}
        </code>
        <Caption caption={item.caption} />
        </div>);

    default:
      return null;
  }
};

ProjMediaItem.propTypes = {};

export default ProjMediaItem;
