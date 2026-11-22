import {useState , useEffect} from "react";
function useFetch(url){
    const [data,setData]=useState(null);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState("");

    useEffect(()=>{
        async function fetchData(){
            try{
        setloading(true);
        seterror("");
        const response=await fetch(url);
        if(!response.ok){
            throw new Error("failed to fetch data");
        }
        const result= await response.json();
        setData(result);
            }
        catch(err){
            seterror(err.message);
        }
        finally{
            setloading(false);
        }
        }
       fetchData();
    },[url]);
    return {data,loading,error};
}
export default useFetch;
