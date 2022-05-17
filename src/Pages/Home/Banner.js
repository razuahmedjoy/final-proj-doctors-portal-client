import chair from '../../assets/images/chair.png'
import bgImage from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url('${bgImage}')` }} className="hero min-h-screen bg-no-repeat bg-cover bg-center md:px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="w-full md:max-w-sm rounded-lg shadow-2xl" alt="hero-img" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p className="py-6 mr-16">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton btnText="Get Started" />
                </div>
            </div>
        </div>
    );
};

export default Banner;