// import { comments } from "../../../data/comments";
import path from 'path';

let index = 0;

export default function handler( req, res ){
    const fs= require('fs');
    const uuid = require('uuid');

    let comments = [];
    try{
    comments= JSON.parse( fs.readFileSync( path.join( process.cwd(), 'data/comments.js')) );
    }catch(err){
        console.log(err)
    }


    if( req.method === 'GET'){      
        
        res.status( 200 ).json( comments );

    }if( req.method === 'POST'){
        const uniqueRandomID = uuid.v4();

        const newcomment = {
            id: uniqueRandomID,
            text: req.body.comment
        }

        comments.push(newcomment);

        fs.writeFileSync( path.join( process.cwd(), 'data/comments.js'), JSON.stringify(comments));
       
        res.status( 201 ).json( comments);
    }

    if( req.method === 'PATCH'){      
            
        const { id , comment } =  req.body;
        console.log( id + ' ' + comment );
        try{
         const index = comments.findIndex( comment => comment.id ===  id  );
        
         comments[ index ].text = comment;
         fs.writeFileSync( path.join( process.cwd(), 'data/comments.js'), JSON.stringify(comments));

        }catch( err ){
            console.log( err );
        }
        
        
        res.status( 200 ).json( comments );
    }
    
}