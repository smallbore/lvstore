import { PushWrapper, SdVideo, PushControl, PushText, PushBtn } from './style';
import { VIDEO_ENUM } from './const'
import { isPc } from "utils"
import sd from 'components/styled';

const Page = () => {
  return (
    <div>
      {VIDEO_ENUM.map(item => {
        const { pc, h5, coverpc, coverh5, des, baybtn, adbtn } = item;
        const url = isPc() ? pc : h5;
        const coverurl = isPc() ? coverpc : coverh5;
        return (
          <PushWrapper key={url}>
            <img className='video-img' alt="" srcSet={coverurl} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="></img>
            <SdVideo width="100%" height="auto" autoPlay loop muted>
              <source src={url} type="video/mp4" />
            </SdVideo>
            <PushControl>
              <PushText>{des}</PushText>
              <PushBtn>
                <sd.Button shape="round" ghost className='push-button'>
                  {baybtn}
                </sd.Button>
                {adbtn && (
                  <sd.Button shape="round" ghost className='push-button'>
                    {adbtn}
                  </sd.Button>
                )}
              </PushBtn>
            </PushControl>
          </PushWrapper>
        )
      })}
    </div>
  );
};

export default Page;
