import { UserProps } from "@/interfaces";




const Users: React.FC<UserProps[]> = ({ users }) => {
    console.log(users);
    return(
        
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()
  
    return {
      props: {
        posts
      }
    }
  }

export default Users