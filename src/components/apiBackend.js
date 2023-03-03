const ketApi = "34091250-f9712553eb000eb19daf1218a"

export const backApiData = async value => {
    fetch(`https://pixabay.com/api/?key=34091250-f9712553eb000eb19daf1218a&q=yellow+flowers&image_type=photo`)
    .then(res=> res.json()).then(console.log())
}