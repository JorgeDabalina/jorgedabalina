import React from "react";
import { Spotify } from "react-spotify-embed";
import { MEDIA_TYPE } from "../../models/project.enum";
import { Caption } from "caption.jsx";



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
      if (item.caption){
        return(
        <div>
          <img
            className="proj-media-img w-10 img-fluid"
            src={item.src}
            alt={item.alt}
          />  
          <Caption caption={item.caption}/>
          </div>
        );
      } else{
        return(
            <img
              className="proj-media-img w-10 img-fluid"
              src={item.src}
              alt={item.alt}
            />  
          );
      }
       
      

    

    /* case MEDIA_TYPE.YOUTUBE:
       return (
         <iframe
           className="proj-media-youtube"
           width="560"
           height="315"
           src= {`https://www.youtube.com/embed/${item.url}`}
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowFullScreen/>
       );*/

    case MEDIA_TYPE.YOUTUBE:
      return (
        <iframe
          className="videoyt"
          id="ytplayer"
          type="text/html"
          title="hello"
          src={`https://www.youtube.com/embed/${item.src}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen

        ></iframe>);



    case MEDIA_TYPE.VIMEO:
      return null;

    case MEDIA_TYPE.SOUNDCLOUD:
      return (
        <iframe
          title="soundcloud"
          width="100%" height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={item.url}>.toString()
        </iframe>

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
        <code>
          {item.codeText}
        </code>);

    default:
      return null;
  }
};

ProjMediaItem.propTypes = {};

export default ProjMediaItem;
