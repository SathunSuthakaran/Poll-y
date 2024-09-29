import * as React from 'react';
import Button from './Button';


const Poll = () => {
  return (
    <div>
      <h1 className='poll-title'>Poll-y: Who's got your vote?</h1>
    <div className="poll-flex-container">
        <Button image='../assets/Donald_Trump_official_portrait.jpg' content='Donald Trump' option='B'/>
        <Button image='../assets/V20210305LJ-0043-cropped.webp' content='Kamala Harris' option='A'/>
    </div>
    
    </div>
  );
}
export default Poll;