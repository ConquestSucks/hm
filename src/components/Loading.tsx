import LoadingGif from '.././assets/loading.gif'

const Loading = () => {
    return (
        <div className="h-full">
            <img src={LoadingGif} alt="" className="w-full h-full" />
        </div>
    )
}

export default Loading