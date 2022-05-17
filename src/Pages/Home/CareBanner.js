import dentalCare from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const CareBanner = () => {
    return (
        
            <div className="hero md:px-24">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <img src={dentalCare} className="w-full md:max-w-sm  rounded-lg shadow-2xl" alt="care" />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms.</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <PrimaryButton btnText="Get Started" />
                    </div>
                </div>
            </div>
      
    );
};

export default CareBanner;