import { useEffect, useState , useRef} from "react";



export default function Comments(){

    const [ state, setState ] = useState([]);
    const [ comment, setComment ] = useState([]);
    const [ currentId , setCurentId ] = useState(null);
    
    const inputEl = useRef(null);
    const submitEl = useRef(null);

    const getComments = async () =>
    {
        const response = await fetch('/api/comments');
        const comment =  await response.json();
        setState ( comment );
    };
   
    
    const addComments = async (e) =>
    {
       
        e.preventDefault();
        if( currentId == null ){
                const response = await fetch('/api/comments', 
                {
                    method:'POST',
                    body: JSON.stringify( { comment: comment }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                
                );
                const newcomment =  await response.json();
                setState( newcomment );
                inputEl.current.value = '';
    }else{
        const response = await fetch('/api/comments', 
        {
            method:'PATCH',
            body: JSON.stringify( { id: currentId, comment: comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        );
        const updatedComment =  await response.json();
        setState( updatedComment );
        inputEl.current.value = '';
        submitEl.current.innerHTML= "add comment";
        setCurentId( null );

    }
        
    };
   
    const deleteComment =  async ( id ) => {
       
        const response = await fetch(`/api/comments/${id}`,  { method:'DELETE' }
        
        );

        const comment =  await response.json();
        console.log( comment );
        setComment( comment );
    }
      
    const editComment =  async ( id , comment ) => {
        setCurentId( id );        
        setComment( comment );
        inputEl.current.value = comment;
        submitEl.current.innerHTML= "Update comment";

        
    }

    useEffect(()=>{   
        getComments();
        
    },[ comment ])
    

       return(
     
        <div>            
            {
                state.map( comment => <li keys={ comment.id } >{ comment.text }
                <button onClick={ () => deleteComment( comment.id ) }>Delete</button> 
                <button onClick={ () => editComment( comment.id , comment.text) }>edit</button> 
                </li>)
            }


        <form action='post' onSubmit={ addComments }>
            <input ref={inputEl} type='text' onChange={ (e) => setComment(e.target.value) }/>
            <button ref={ submitEl}> add comment</button>
        </form>
        </div>
       )
       

    

    
}