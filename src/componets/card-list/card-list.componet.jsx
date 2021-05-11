import React from 'react';
import { Card } from '../Card/card.componet';
import './card-list.styles.css'

export const Cardlist = (props) => (
   <div className ='card-list'>{
        props.monsters.map(monster =>(
           <Card key={monster.id} monster ={monster}/>
         ))}
    </div>
);


