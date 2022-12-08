# Meme Generator
![preview](/readme_images/Screenshot_20221208_084341.png)


# Working Mechanism

## useStates
the article section holds a useState hook to hold and change as follows
```
    const [allMemes,setAllMemes]=useState(memesData);
    //memesData is imported from a json file

```

similarly for meme text a useState is used as follows
```
  const [memeText,setMemeText]=useState({
        first:"shut up ",
        second:"and take my money"
    })
```
then finally a useState is used to hold current memes data
```
  const [meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/3si4.jpg"
    });
``` 

## handleClick
the function ```handleChange``` is used to handle all the changes made to the useState
```
  function handleChange(event){
        setMemeText(prevText=>{
            return {
                ...memeText,
                [event.target.name]:event.target.value
            }
        })
    }
```

## props
the meme image url and meme texts are passed into section component through props as follows
```
    <Section url={meme.randomImage} topText={memeText.first} bottomText={memeText.second}/>

```

## fetching data
fetcing meme images is done through a meme API [getMemes](https://https://api.imgflip.com/get_memes) and implemented by the help of ```useEffect``` hook
```
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
```