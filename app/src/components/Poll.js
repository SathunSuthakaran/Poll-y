import * as React from 'react';
import Button from './Button';



const Poll = () => {
  return (
    <div className="poll-flex-container">
        <h1>HELLO  THERE</h1>
        <Button image='../assets/Donald_Trump_official_portrait.jpg' content='Donald Trump'/>
        <Button image='../assets/V20210305LJ-0043-cropped.webp' content='Kamala Harris'/>
    </div>
  );
}
export default Poll;