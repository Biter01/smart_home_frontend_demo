import supabase from "../config/supabaseClient";
import {useEffect, useState} from "react"; 

export default function Dashboard() {

  const [fetchError, setFetchError] = useState<string  | null>(null);
  const [names, setNames] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchNames = async () => {
      const {data, error}  = await supabase 
        .from('test')
        .select()

        if(error) {
          setFetchError('Could not fetch the smoothes');
          setNames(null)
          console.log(error)
        }

        if(data) {
          setNames(data)
          setFetchError(null)
        }
    }

    fetchNames()
  },[]);


  return (
    <div>
      {fetchError && (<p> {fetchError} </p>)}
      {names && (<div>{names.map(name => <p>{name.lastname}</p>)}</div>) }
    </div>
  );
}