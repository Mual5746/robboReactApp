import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    
// const Cardcomponent = robots.map( (user, i) => {       
    return (
        //<div>
        // < Card id={robots[0].id} name = {robots[0].name} email = {robots[0].email} />
        //</div>
        //
        <div>
        {
            robots.map( (user, i) => {
                return ( 
                    < Card 
                        key = {i} 
                        id={robots[i].id} 
                        name = {robots[i].name} 
                        email = {robots[i].email}
                    />
                );
            })
        }
        </div>
    );
}

export default CardList;