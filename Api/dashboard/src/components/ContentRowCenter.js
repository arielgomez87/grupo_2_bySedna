import React from 'react';
import Categories from './Categories';

function ContentRowCenter({props}){
    return (
        <div className="row">
            {/*<!-- Categories in DB -->*/}
            <Categories props= {props}/>

        </div>
    )
}

export default ContentRowCenter;