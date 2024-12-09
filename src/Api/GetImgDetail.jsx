const getImgDetail =async ({params}) => {
    console.log(params);
    const id=params.imgID;

    try{
        const res=await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        const data=await res.json();

        return data;
    }
    catch(error)
    {
        console.log(error);
    }
    
}

export default getImgDetail;