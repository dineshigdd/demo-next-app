 import Link from 'next/link';
 
// function ProductList( { products }){
//     return(
//         <div>
//             <h1>Our Products</h1>
//             {
//                 products.map(
//                     product =><div key={ product.id }>                       
//                         <Link href= { `products/${product.id}`}>
//                             <li><a>{ product.title }</a></li>
//                         </Link></div>                 
//                  )
//             }
//         </div>
//     )
// }
 
// export default ProductList 
 
// export async function getStaticProps(){
//         const response = await fetch('http://localhost:4000/products');
//         const data = await response.json();
//         return {
//             props:{
//                 products: data,
//             },
		 
//         }
// }

export default function LoginPage(){
    return( 
        <div>
                    Test
        </div>)
}
