import  useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Profile() {
  
  // const { data, error } = useSWR('http://localhost:4000/dashboard', fetcher , {  revalidateOnFocus: true }  );

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading, please wait..!</div>

  // return (
  //   <div>
  //     <div>Welcome  { data.username }</div>
  //     <p>Email: { data.email }</p>
  //   </div>
  // )
}