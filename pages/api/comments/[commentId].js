import path from 'path';

export default function handler(  req, res ){
    const { commentId } = req.query;
    const fs= require('fs');
    const comments = JSON.parse( fs.readFileSync( path.join( process.cwd(), 'data/comments.js')) );
    const comment = comments.find( comment => comment.id === ( commentId ));
   
    res.status( 200 ).json( comment );


    if( req.method === 'DELETE'){      
            

        const index = comments.findIndex( comment => comment.id === ( commentId) );
      
        comments.splice(  index , 1);

        fs.writeFileSync( path.join( process.cwd(), 'data/comments.js'), JSON.stringify(comments));
        res.status( 200 );
    }

    
}   