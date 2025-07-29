import HomeImg from '.././assets/1.jpg'

const Home = () => {
  return (
    <div className="flex h-full w-full">
        <div 
          className="w-full h-full bg-contain bg-center" 
          style={{ backgroundImage: `url(${HomeImg})` }}
        />
    </div>
  )
}

export default Home