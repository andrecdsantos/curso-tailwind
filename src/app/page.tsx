import Image from 'next/image';

export default function Home() {
    return (
        <div className="text-4xl text-cyan-300 bg-violet-500 p-6 min-h-screen">
            <h1 className="text-9xl mb-8 bg-slate-700 text-center hover:text-fuchsia-400 cursor-pointer">
                hover teste
            </h1>
            <p>https://www.youtube.com/watch?v=dHwY5lRfkoQ&ab_channel=Lu%C3%ADsRudge</p>
            <p className="text-black bg-red-500 md:bg-teal-300 lg:bg-orange-400 xl:bg-yellow-300 ">
                responsividade
            </p>
            <p className='bg-primary w-5/6'>cor primaria personalizada na config</p>
            <p className='bg-orange-300 w-40'>largura</p>
            <p className='bg-red-300 text-black w-40 hover:bg-red-700 hover:px-8 hover:w-5/12 transition-all duration-1000 delay-200 ease-in-out'>transition</p>
            <p className='bg-yellow-100 w-3/6'>posicionamento</p>
            <div className='my-8 p-10 bg-gray-300 grid grid-cols-4 gap-5'>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="col-span-3 h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
              <div className="h-10 bg-green-600"></div>
            </div>
        </div>
    );
}
