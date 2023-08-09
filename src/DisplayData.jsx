import React, { useContext } from 'react';
import {CreateContent} from './App';

const DisplayData = () => {

    const {data} = useContext(CreateContent);
  return (
    <>
    {data && (
      <div className='displayCon'>

<img src={data.avatar_url} />


<div className='information'>
<p>Name : <span>{data.name}</span></p>
<p>username : <span>{data.login}</span></p>
<p>Followers : <span>{data.followers}</span></p>
<p>following : <span>{data.following}</span></p>
<p>repo : <span>{data.public_repos}</span></p>
    
</div>


</div>
    )}

    </>
  )
}

export default DisplayData