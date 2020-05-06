import React from 'react';
import Card from './Card';

const CardList = ( { robots } ) => {
    return (
        <div>
            {
                robots.map((username, i) => {
                    return <Card key={i} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
                })
            }
        </div>
    )
}

export default CardList;