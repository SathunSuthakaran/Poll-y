import * as React from 'react';
import Button from './Button';



const Poll = () => {
  return (
    <div className="poll-flex-container">
        <Button image='../assets/Donald_Trump_official_portrait.jpg' content='Donald Trump'/>
        <Button image='../assets/51pJvuFiZ+L._AC_UF894,1000_QL80_.jpg' content='Kamala Harris'/>
    </div>
  );
}
export default Poll;