
export default function Product( { product }){
    // const router = useRouter();

    // if( router.isFallback ){
    //     return <h2>The Page is loading...</h2>
    // }

    return( 
        <>
            <h1>{ product.name }</h1>
            {
                 
             <div>
                <p>{ product.description}</p>
                <p>${ product.price }</p>
             </div>
                 
            }
        </>
    )
}

export function getStaticPaths(){

        return {
            paths:[{ params:{ productId: '1' }  },],
            fallback:'blocking'
        }
 
}



export async function getStaticProps( context ){
     const { params } = context;
     const response = await fetch(`https://62fc79a81e6a530698a7479c.mockapi.io/products/${params.productId }`);
    //  const response = await fetch(`http://localhost:4000/products/${params.productId }`);
     const data = await response.json();

    return {
        props:{ product: data, },
        revalidate:60//10 seconds
    }
}