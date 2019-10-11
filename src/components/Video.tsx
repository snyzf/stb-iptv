import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import styled from 'styled-components';

const StyledVideo = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
  outline: 0;
`;

export default ({ channel }: any) => {
  let instRef: any = useRef();

  useEffect(() => {
    console.log(channel.url);

    if (instRef.current && channel.url !== undefined) {
      var video: any = instRef.current;
      const hls = new Hls({ enableWorker: false });
      hls.loadSource(channel.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play().catch((error: any) => {
          console.log(error);
          // hls.startLoad();
        });
      });

      hls.on(Hls.Events.ERROR, function(event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.log('fatal network error encountered, try to recover');
              // hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log('fatal media error encountered, try to recover');
              // hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });
    }
  }, [instRef, channel.url]);

  return <StyledVideo ref={instRef}></StyledVideo>;
};
