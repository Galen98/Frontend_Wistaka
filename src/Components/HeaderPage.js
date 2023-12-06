import { Carousel } from "@material-tailwind/react";

export default function HeaderPage(){
    return(
        <>
<header>
<div class="w-full bg-cover bg-center" style={{height:"32rem",marginTop:"80px",backgroundImage:"url(https://images.unsplash.com/photo-1625506278007-23f4b5c926cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFtYW4lMjBTYXJpJTIwWW9neWFrYXJ0YXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80)"}}>
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-60">
            <div className="flex">
            <h1 class="mb-5 text-5xl px-1 font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-6xl" style={{marginBottom:"200px"}}><span class="text-transparent bg-clip-text bg-white">
            Travel memories you'll never forget</span> <br/>
            <h3 className="text-2xl text-white lg:text-center md:text-center mt-5 mb-5">Exploring Yogyakarta and many more</h3></h1>
            </div>

            <div class="absolute text-center mt-24">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="shadow-sm md:w-96 rounded-xl block w-80 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mau pergi kemana?" style={{borderRadius:"999px"}} required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 rounded-3xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        style={{borderRadius:"999px"}}>Search</button>
    </div>
        </div>
    </div>
</header>
        </>
    )
}