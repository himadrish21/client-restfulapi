import { useEffect , useState} from 'react';
import axios from 'axios';

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      // setTimeout(()=>{
        let fetchData = async () => {
          try{
          let responce = await axios.get(url);
          console.log(responce) 
          setData(responce.data);
          setPending(false)
        }catch(error){
          setError(error.message);
          setPending(false);
          console.log(error.message)
      }
    }
      fetchData();  
      // },1000)
  }, []);
      // fetch(url)
      //   .then((response) => {
      //     if (response.ok == false)
      //     {
      //       throw Error("data not found , please try for different");
      //     }
      //     else
      //     {
      //       return (response.json())
      //     } 
      //   })
      //   .then((data) => { setData(data); setPending(false); })
      //   .catch((error) => { setError(error.message); setPending(false);})
    return {data ,pending , error}
    
}

export default useFetch;