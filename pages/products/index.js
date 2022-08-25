import Link from 'next/link';

function ProductList( { products }){
    return( 
        <>
            <h1>Our Products</h1>
            {
                products.map( 
                    product =><div key={ product.id }>
                        
                        <Link href= { `products/${product.id}`}>
                            <li><a>{ product.name }</a></li>
                        </Link></div>
                 
                 )
            }
        </>
    )
}

export default ProductList
 
 
export async function getStaticProps(){

        const response = await fetch('https://62fc79a81e6a530698a7479c.mockapi.io/products');
        // const response = await fetch('http://localhost:4000/products');
        const data = await response.json();
         console.log( data ) //UNCOMMENT TO SEE THE DATA RECEIVE FROM API
        return {
            props:{
                products: data,
            },
            // revalidate:60,//10 seconds
        }
}
