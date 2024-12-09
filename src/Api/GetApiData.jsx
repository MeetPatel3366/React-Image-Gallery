const getApiData =async () => {
    try{
        const res=await fetch('https://api.slingacademy.com/v1/sample-data/photos?limit=20')
        const data=await res.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}

export default getApiData
