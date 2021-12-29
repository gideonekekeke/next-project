import Head from "next/head";
import Image from "next/image";
import HeaderView from "../components/HeaderView";

const index = () => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center h-screen '>
				<div className='flex justify-around  w-screen '>
					<div
						className='w-96 h-96 bg-slate-500 rounded-md text-white font-bold p-2 bg  object-cover bg-no-repeat bg-center '
						style={{ backgroundImage: "url(/assets/img.jpg)" }}>
						hello gideon
					</div>
					<div className='w-96 h-96 bg-slate-500  rounded-md'>
						<Image
							width={380}
							height={350}
							src='/assets/img2.jpg'
							className='object-cover bg-no-repeat bg-center bg-red '
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
